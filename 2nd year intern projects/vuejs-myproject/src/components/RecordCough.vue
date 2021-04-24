
<template>
<div class="container">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="top-title"> <h2 v-if="hideContribution">Your contribution helps ! </h2> </div>
    <h1 class="main-title">Record Cough</h1>
    <div class="mid-container">
        <div class="left">
            <p>Please ensure you are in a quiet place away from noise. Press the button and cough 5 times. Listen to the recording, and re-record if needed.</p>
            <p> Press Take survey button after recording. </p>
            <p><b>Note:</b> Please try to cough even if you don't have cough like symptoms, as all types of coughs will make our algorithms better.</p>
        </div>
        <div class="right">
            <img id ="myimg" v-show="showPlay" v-on:click="handlePlayCough(); startRecording();" src="../assets/mic.png" alt="">
            <img id ="myimg" v-show="showRecord" v-on:click="handleRecordCough(); stopRecording();" src="../assets/micon.png" alt="">
            <button v-show="hidePlayButton" v-on:click="playRecording();" class="play"><i class="far fa-play-circle"></i>Play Recording</button>
            <button v-show="hidePauseButton" v-on:click="pauseRecording();" class="play"><i class="far fa-pause-circle"></i>Pause Recording</button>
            <!-- <button v-show="hideResumeButton" v-on:click="resumeRecording();" class="play"><i class="far fa-resume-circle"></i>Resume Recording</button> -->
            <!-- <button v-show="hideSurvey" class="survey"><i class="fas fa-indent"></i>Take Survey</button> -->
        </div>
        <audio id="audio-player"></audio>
    </div>
    <div v-if="complete" class="checkbox">
        <input type="checkbox" id="complete" name="complete" value="complete" v-model="checked">
        <label for="complete">Complete</label><br>
    </div>
    <div class="arrow">
        <!-- <router-link to="/details"><i class="fas fa-arrow-left"> -->
         <router-link to='/wait'><i v-if="checked" v-on:click="calculateRisk(); passBlob(); passRiskP(); uploadAudio();" class="fas fa-arrow-right"></i></router-link>
     </div>
    <!-- <div class="msg-1">
        <i class="fas fa-comments"></i>
    </div> -->
    <!-- <div class="message">
    <a href="#">
<i class='bx bxs-message i1'></i>
<i class='bx bx-message i1 i2'></i>
</a>
</div> -->
</div>
</template>


<!-- firebase storage and audio part -->
<script>
import firebase from 'firebase'
import { bus } from '../main'
const Recorder = require('../record.js')
var AudioContext = window.AudioContext || window.webkitAudioContext;
export default {
    components: {
      
    },
  data () {
    return {
      hideContribution:false,
      hidePlayButton:false,
      hideSurvey:false,
      checked:false,
      showPlay:true,
      showRecord:false,
      riskP: 0,
      complete:false,
      hidePauseButton:false,
      hideResumeButton:false,
    }
  },
  methods:{
      handlePlayCough : function(){
          this.hideContribution=true;
          this.hidePlayButton=false;
          this.hidePauseButton = false;
          this.hideSurvey=false;
          this.showPlay=!this.showPlay;
        //   this.hidePauseButton=!this.hidePauseButton,
        //   this.hideResumeButton=!this.hideResumeButton,
          this.showRecord=!this.showRecord;
      },
      handleRecordCough(){
          this.showRecord=!this.showRecord;
          this.showPlay=!this.showPlay;
          this.hidePauseButton = false;
          this.hidePlayButton=!this.hidePlayButton;
          this.hideSurvey=!this.hideSurvey;
          this.complete=true;
      },

      startRecording(){ 
          // look for error
            var vue = this;
            if(vue.st){
              
                clearTimeout(vue.st);
            }
            vue.audioPlayer = document.getElementById('audio-player');

            var constraints = { audio: true, video:false }
            vue.audioPlayer.pause()            
            // audio player to play the recorder audio 
            vue.audioPlayer.currentTime = 0;
            //vue.recordButton.disabled = true;
            navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                vue.audioContext = new AudioContext();
                vue.gumStream = stream;
                vue.input = vue.audioContext.createMediaStreamSource(stream);
                vue.rec = new Recorder.Recorder(vue.input,{numChannels:1})
                vue.rec.record();
                vue.st = setTimeout(function(){ 
                    vue.handleRecordCough();
                    vue.stopRecording();
                    // vue.recordButton.classList.remove('recording')
                    // vue.stopRecording();
                 }, 10500);
                
                
            }).catch(function(err) {
                console.log(err)
                //enable the record button if getUserMedia() fails
                // vue.recordButton.disabled = false;
                // vue.stopButton.disabled = true;
                // vue.pauseButton.disabled = true
                // if getUserMedia() fails, start again recording the audio
                this.hideContribution = false;
                this.showPlay = true;
                this.showRecord = false;
                this.hidePlayButton = false;
                this.hideSurvey = false;
            });
            
        },
        playRecording(){
            var vue = this;
            console.log('played');
            this.hidePlayButton=!this.hidePlayButton;
            this.hidePauseButton= !this.hidePauseButton;
            vue.audioPlayer.play();
            setTimeout(function(){
                this.hidePlayButton=true;
                this.hidePlayButton=false;
                console.log('time out');
            },2000);
            // setTimeout(this.hidePlayButton=true,vue.audioPlayer.duration);
        },
        stopRecording(){
            clearTimeout(this.st);
            var vue =this;
            //disable the stop button, enable the record too allow for new recordings
            vue.rec.stop();
            vue.gumStream.getAudioTracks()[0].stop();
            vue.rec.exportWAV(vue.createDownloadLink);
        },
        pauseRecording(){
            let vue = this
            vue.audioPlayer.pause();
            // if (vue.rec.recording){
            //     vue.rec.stop();
            //     // vue.pauseButton.innerHTML=`<i data-feather="mic"></i> Resume`;
            //  }
            // this.hidePlayButton=!this.hidePlayButton;
            this.hidePauseButton= !this.hidePauseButton;
            this.hidePlayButton=!this.hidePlayButton;
            if(this.audioPlayer.ended){
                this.hidePlayButton=true;
                this.hidePauseButton=false;
                this.hideResumeButton=false;
            }
            //  else{
            //     //resume
            //     vue.rec.record()
            //     // vue.pauseButton.innerHTML=`<i data-feather="pause-circle"></i> Pause`;
            // }
            // feather.replace()
            
        },
        resumeRecording(){
            let vue = this;
            this.hidePauseButton=!this.hidePauseButton;
            this.hideResumeButton=!this.hideResumeButton;
            vue.audioPlayer.play();

            
        },
        createDownloadLink(blob) {
            this.blobA = blob
            let vue = this;
            var url = URL.createObjectURL(blob);
            vue.audioPlayer.src = url;
            vue.audioPlayer.addEventListener('loadedmetadata',function(){
                if(vue.audioPlayer.duration > 120){
                    alert('Recoding should not be greater than 2 minutes');
                }
            })
            //audio.src = url;
            //audio.play()
            
            return false;
            // var au = document.createElement('audio');
            // var li = document.createElement('li');
            // var link = document.createElement('a');
            //name of .wav file to use during upload and download (without extendion)
            var filename = new Date().toISOString();
            //add controls to the <audio> element
            // au.controls = true;
            // au.src = url;
            //save to disk link
            // link.href = url;
            // link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
            // link.innerHTML = "Save to disk";
            // //add the new audio element to li
            // li.appendChild(au);
            
            //add the filename to the li
            // li.appendChild(document.createTextNode(filename+".wav "))
            //add the save to disk link to li
            // li.appendChild(link);
          
        },
        calculateRisk(){
            if(this.mainData.symptoms.has_fever){
                this.riskP+=0.83;
            }
            if(this.mainData.symptoms.has_dryCough){
                this.riskP+=0.82;
            }
            if(this.mainData.symptoms.has_shortnessOfBreath){
                this.riskP+=0.31;
            }
            if(this.mainData.symptoms.has_bodyPain){
                this.riskP+=0.11;
            }
            if(this.mainData.symptoms.has_headache){
                this.riskP+=0.08;
            }
            if(this.mainData.symptoms.has_soreThroat){
                this.riskP+=0.05;
            }
            if(this.mainData.symptoms.has_runnyNose){
                this.riskP+=0.04;
            }
            if(this.mainData.symptoms.has_chestPain){
                this.riskP+=0.02;
            }
            if(this.mainData.symptoms.has_diarrhoea){
                this.riskP+=0.02;
            }
            if(this.mainData.symptoms.has_nausea){
                this.riskP+=0.01;
            }
            if(!this.mainData.symptoms.has_fever && !this.mainData.symptoms.has_dryCough && !this.mainData.symptoms.has_shortnessOfBreath && !this.mainData.symptoms.has_bodyPain && !this.mainData.symptoms.has_headache && !this.mainData.symptoms.has_soreThroat && !this.mainData.symptoms.has_runnyNose && !this.mainData.symptoms.has_chestPain && !this.mainData.symptoms.has_diarrhoea && !this.mainData.symptoms.has_nausea){
                this.riskP = 0;
            }
            console.log(this.riskP);
        },
        passBlob(){
            bus.$emit('pass-blob',this.blobA);
        },
        passRiskP(){
            bus.$emit('pass-riskP',this.riskP);
        },
        uploadAudio(){
            var vue = this
            var storageRef = firebase.storage().ref();
            let u = Math.random().toString(36).slice(2); 
            var coughRef = storageRef.child('cough/'+u+'.wav');
            var file = vue.mainData.file;
            var uploadTask = coughRef.put(file);
            uploadTask.on('state_changed', function(snapshot){
            
            }, function(error) {
                
            }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    vue.dUrl = downloadURL
                    
                    let toSend = {
                        downloadURL:vue.dUrl,
                        diagnosed:vue.mainData.diagnosed,
                        condition:vue.mainData.condition,
                        // dataConsent:vue.dataConsent,
                        // cn:vue.cn,
                        symptoms:vue.mainData.symptoms,
                        riskP:vue.riskP,
                        // riskP:parseFloat((vue.riskP / 2.29 * 100).toFixed(2)),
                        age:vue.mainData.details.age,
                        gender:vue.mainData.details.gender,
                        state:vue.mainData.details.state,
                        location:vue.mainData.details.current_location,
                        // lon:vue.lon,
                        // lat:vue.lat,
                        email:vue.mainData.details.email,
                        number:vue.mainData.details.contact_number
                    }
                    console.log(toSend.riskP);
                    var db = firebase.firestore();
                    let v = Math.random().toString(36).slice(2); 
                    db.collection("users").doc(v+'.data').set({
                        toSend
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                    console.log(toSend);
                   var func = firebase.functions().httpsCallable('handleCough')(toSend).then(x=>{
                        if(x.data){
                            if(x.data.success){
                                // vue.loadingScreen = false
                                // vue.surveyComplete = true
                                console.log('data successfully passed by function');
                            }
                        }else{
                        }
                    }).catch(error=>{
                        var code = error.code;
                          var message = error.message;
                    var details = error.details;
                        // return reject(e)
                    });
                });
            });
            
        },

  },
  props:['mainData'],


  
}

</script>



<style lang="scss" scoped>
    b{
        display: inline;
    }
    .main-title{
        margin-top: 50px;
    }
    .container{
        margin-top: 24px;
        // padding-left: 40px;
        // padding-right: 40px;
    }
    .top-title{
        display: flex;
        justify-content: center;
    }
    .top-title h2{
        margin-top: 30px;
        flex: 50%;
        max-width: 50%;
        background: #F46F5A;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        display: flex;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.05em;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        color: #FFFFFF;
    }
    h1{
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 10%;  // do remember
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 75px;
        /* identical to box height, or 109% */

        // display: flex;
        // align-items: center;

        /* Gray 1 */

        color: #333333;
    }

    .mid-container{
        margin-left: 6%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    .mid-container .left{
        flex: 35%;
        max-width: 35%;
    } 
    .mid-container .left p{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        // display: flex;
        // align-items: center;
        letter-spacing: 0.05em;

        color: #000000;
    }
    .mid-container .right{
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    .mid-container .right img{
        height: 30vh;
    }
    .mid-container .right img:hover{
        cursor: pointer;
    }
    .mid-container .right button{
        outline: none;
        padding: 0px;
        height: 50px;
        width: 200px;
        margin: 10px;
        font-size: 14px;
        border-radius: 43px;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        background: white;

    }
    .mid-container .right button:hover{
        background:  #FC897A;
        cursor: pointer;
    }
    .mid-container .right button i{
        padding: 0px;
        margin-right: 5px;
    }




    .checkbox{
        margin-top: 40px;
        margin-left: 10%;
        font-size: 24px;
    }
    .checkbox label{
        margin-left: 10px;
    }
    .arrow{
        display: flex;
        justify-content: flex-end;
        margin: 20px;
        margin-right: 120px;
        color: black;
        font-size: 40px;
        margin-bottom: 20px;
    }
    .arrow i{
        color: black;
    }
    .msg-1 i{
        display: flex;
        justify-content: flex-end;
        margin: 20px;
        margin-right: 60px;
        color: #F25E47;
        font-size: 30px;
    }

    .message{
    position: fixed;
    font-size: 41px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    right: 5%;
    bottom: 8%;
    width: 25px;
    height: 25px;
}

    .i1{
        color: #F25E47;
    }
    .i2{
        position: absolute;
        bottom: -70%;
        right: -90%
    }

    @media all and (max-width: 850px){
        .top-title h2{
            flex: 80%;
            max-width: 100%;
            font-size: 24px;
        }
    }
    @media all and (max-width: 550px){
        .container{
            margin-top: 0px;
        }
        .top-title h2{
            margin-top: 0px;
        }
        .mid-container .left{
            flex: 100%;
            max-width: 100%;
        }
        .mid-container .right{
            flex: 100%;
            max-width: 100%;
        }
        .mid-container .right img{
            height: 20vh;
        }
        .mid-container p{
            font-size: 18px;
            line-height: 22px;
        }
        .container h1{
            margin-top: 0px;
            font-size: 60px;
            line-height: 70px;
        }
        .mid-container .left p{
            font-size: 18px;
            line-height: 22px;
        }
        .arrow{
            margin-right: 80px;
        }
        .arrow i{
            align-self: flex-end;
            margin-right: 10px;
        }
    }
</style>