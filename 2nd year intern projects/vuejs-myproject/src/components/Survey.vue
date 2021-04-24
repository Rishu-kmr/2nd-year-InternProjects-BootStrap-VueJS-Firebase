
<template>
<div class="main-container">


<div class="container">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="title">
        <h1>Survey</h1>
    <div class="consent">Consent Form</div>
    <h2>Concise Summary</h2>
    </div>
    <div class="content-1">
        <p>The purpose of this venture is to collect data that is useful for diagnosis of COVID-19 patients based on voice analysis. If successful, we hope to use the cough samples as a new screening method for early detection of COVID-19 and other respiratory infections. However, at this stage, we are collecting the audio information for internal training purposes, and are not currently using it to generate the risk assessment for COVID-19. The results shown are based only on the symptoms picked by the user. We have included those symptoms which have shown strong correlation with COVID-19. You will be shown a short questionnaire to collect demographic information, approximate location, as well as an indication whether or not you have been tested positive for COVID-19. </p>
        <p>You will be shown a short questionnaire to collect demographic information, approximate location, as well as an indication whether or not you have been tested positive for COVID-19. You will be asked to provide a voice sample of your cough. If you are interested in learning more about this study, please continue to read below. This tool does not provide medical advice and it is intended for informational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment. Never ignore professional medical advice in seeking treatment because of something you have read. While the tool does not dispense medical advice, it can help in navigating the healthcare system. </p>
        <i v-on:click="sd()" class="fas fa-arrow-down"></i>
    </div>
    <!-- <div class="msg-1">
        <a class="porto-button" ><i @click="scrollMeTo('porto')" class="fas fa-comments"></i></a>
    </div> -->
    
    <div ref="porto" class="mid-content">
        <h2>Important Note</h2>
        <p>If you are currently experiencing severe symptoms like difficulty in breathing, chest pain or other concerning symptoms, call emergency services immediately and notify authorities. Recommendations provided by this survey do not constitute or substitute medical advice and should not be used to diagnose or treat medical conditions.</p>
        <h2>Introduction</h2>
        <p>Thank you for deciding to volunteer in our project to make contact-less detection a reality. We aim to study the ability of Deep Learning techniques and voice analysis to assist in diagnosis of COVID-19, and assist in stopping the pandemic. The Coughloud project will consist of you filling a short questionnaire and obtaining a recordation of your voice. All your data collected will be anonymised. Please note that you have no obligation to participate and you may decide to terminate your participation at any time. Below is a description of the Cough Loud project, and your consent to participate. Please read this information carefully. By clicking the button, you are agreeing that you’ve had time to read and consider this consent waiver and are comfortable with what is being asked of you as a participant.</p>
        <h2>Title of the Project</h2>
        <p id="big">Cough Loud by HealthWin </p>
        <div class="content-2">
            <div class="benefit">
                <h2>Benefits and Risks </h2>
                <p>We hope to be able to assist in early and remote diagnosis of COVID-19 patients, to target suspected cases for expensive and insufficient laboratory tests. We have not identified any particular risk associated with your participation in this venture. We would provide you with a risk rating, and recommend a course of action, which you are free to choose to act upon. The choice would be entirely yours. Recommendations provided by this survey do not constitute or substitute medical advice and should not be used to diagnose or treat medical conditions. </p>
            </div>
            <div class="confidentiality">
                <h2>Confidentiality</h2>
                <p>We will keep you information confidential and will not divulge any non-anonymised data. We have left the fields where you are asked to provide non-anonymised data as Optional. You can use the tool anonymously to obtain the questionnaire result. The anonymised data may be transferred to third parties for research purposes.</p>
            </div>
            <i v-on:click="sd()" class="fas fa-arrow-down"></i>
        </div>
        <!-- <div class="msg-1">
        <i class="fas fa-comments"></i>
        </div> -->
    </div>
    <div class="end-content">
        <div class="content-2">
            <div class="benefit">
                <h2>Liability</h2>
                <p>The informtion provided by the survey on Coughloud by Healthwin is for general informational purpose only. All information provided is in good faith, however we make no representation, warranty of any kind express or implied regarding accuracy, adequacy validity, reliability of the completeness of any information on the site. The results generated by tool should not be considered as a medical advice. It is intended for informational purposes only. We are not liable for any damage caused by acting on the recommendation of the tool, and not seeking appropriate medical help. </p>
            </div>
            <div class="confidentiality">
                <h2>Research Data and Feedback</h2>
                <p>You give your permission toCough Loud project by Healthwin to collect information about your participation in the Cough Loud project in the formats and medium (“Data”) described above. We shall own and control all Data you share with us in connection with the research project. You may also provide suggestions, comments or other feedback (“Feedback”) to the investigators with respect to the project. Feedback is entirely voluntary and the team shall be free to use, disclose, license, or otherwise distribute, and exploit the Feedback and Data as authorised by the participant. </p>
            </div>
        </div>
        <div class="content-3">
            <h2>Your authority to participate</h2>
        <p>You represent that you have the full right and authority to sign this form. By clicking the survey button, you confirm that you understand what the project is about and how and why it is being done. Should you have any questions concerning this project, please contact the below group: Helpdesk :<a href="#">info@healthwin.in </a> </p>
        </div>
        <h2 class="last-line">Please print this page for your records.<br> We thank you for your kind participation.</h2>
        <div class="checkbox-proceed">
            <div class="checkbox">
                <input type="checkbox" id="terms" name="terms" v-model="checked">
                <label for="terms">Agree to terms and conditions </label>
            </div>
            <div class="btn-proceed">
                <router-link to="/q1"><button :class="{selected:checked,proceed:!checked}" v-bind:disabled="!checked">Proceed</button></router-link>
            </div>
            
        </div>
        <br>
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
        

    
    
    
</div>
</div>
</template>

<script>
import store from '../store'
export default {
    components: {
      
    },
  data () {
    return {
      checked:false,
      scrollHeight: 500,
    }
  },
  methods:{
    //   scrollMeTo(refName){
    //       window.alert('ehl');
    //       var element = this.$refs[refName];
    //       var top = element.offsetTop;
    //       window.scrollTo(0,top);
    //   },
      sd(){
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
} ,
  },
  mounted(){
      
      console.log(store.state)
      store.replaceState({test:'Hello Changed'})
}
}
</script>

<style lang="scss" scoped>
    *{
        padding: 10px;
        margin: 10px;
    }
//     .message{
//     position: fixed;
//     font-size: 41px;
//     text-align: center;
//     text-decoration: none;
//     border-radius: 50%;
//     right: 5%;
//     bottom: 8%;
//     width: 25px;
//     height: 25px;
// }

// .i1{
//   color: #F25E47;
// }
// .i2{
// position: absolute;
//   bottom: -70%;
//   right: -90%
// }
    .container{
        margin-top: 60px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .title{
        margin-left: 3%;
        padding: 0px;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .title h1{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 900;
        font-size: 80px;
        line-height: 70px;
        margin-bottom: 20px;
/* identical to box height, or 109% */

// display: flex;
// align-items: center;

/* Gray 1 */

        color: #333333;
    }
    .title .consent{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 30px;
/* identical to box height */

// display: flex;
// align-items: center;
        letter-spacing: 0.05em;

/* Gray 1 */
        background: #F25E47;
        border-radius: 30px;

        width: 250px;
        color: #333333;
        margin: 10px;
        padding: 10px;
    }
    p{
        margin: 20px;
    }
    .title h2{

        margin-top: 10px;
        margin-bottom: 0px;
    }
    
    .content-1{
        padding: 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    .content-1 p{
        margin-top: 0px;
        padding: 0px;
        flex: 40%;
        max-width: 40%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;      
        display: flex;
        align-items: center;
        letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;
    }
    .content-1 i{
        margin-right: 30px;
        align-self: flex-end;
        color: black;
        font-size: 20px;
    }
    .msg-1 i{
        display: flex;
        justify-content: flex-end;
        margin: 20px;
        color: #F25E47;
        font-size: 20px;
    }


    //---------------------------------------------------------------
    .mid-content{
        margin-left: 1%;
    }
    .mid-content h2{
        margin-bottom: 10px;
        font-family: Titillium Web;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 37px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.05em;

/* Gray 1 */

color: #333333;
    }
    .mid-content .big{
        font-size: 24px;
    }
    .mid-content p{
        margin-top: 0px;
        font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;
    }
    .content-2{
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .content-2 .benefit{
        padding: 0px;
        margin: 0px;
        flex: 40%;
        max-width: 
        40%;font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;
    }
    .content-2 .confidentiality{
        padding: 0px;
        margin: 0px;
        flex: 40%;
        max-width: 40%;
        font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.015em;
.content-3{
    margin: 0px;
    padding: 0px;
    font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;
}
.content-3 h2{
    margin: 0px;
    padding: 0px;
    font-family: Titillium Web;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;
}

/* Gray 1 */

color: #333333;
    }
    i{
        cursor: pointer;
    }
    .content-2 i{
        margin-right: 30px;
        align-self: flex-end;
        color: black;
        font-size: 20px;
    }

    .checkbox-proceed{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .checkbox-proceed .checkbox{
        max-width: 30%;
        flex: 30%;
        font-size: 30px;
    }
    .checkbox-proceed label{
        font-size: 24px;
    }
    .checkbox-proceed button{
        outline: none;
        flex: 20%;
        font-size: 24px;
        height: 50px;
        // display: flex;
        width: 250px;
        max-width: 100%;
        text-decoration: none;
        // background: white;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        background: white;
        // color: black;
        // background: #F25E47;

    }
    
    .checkbox-proceed button:hover{
        background: #FC897A;
        cursor: pointer;
    }


    @media all and (max-width: 700px){
        .content-1 p{
            margin: 20px;
            flex: 100%;
            max-width: 100%;
        }
    }
    
    @media all and (max-width: 500px){
        
        *{
            margin: 0px;
            padding: 0px;
        }
        .content-2 .benefit{
        flex: 100%;
        max-width: 100%;
    }
    .content-2 .confidentiality{
        flex: 100%;
        max-width: 100%;
    }
    .checkbox-proceed{
        padding-top: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        margin-left: 0px;
        margin-right: 0px;
        background: #F25E47;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        // border-radius: 10px;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        max-width: 100%;
        // width: 350px;
    }
    .checkbox-proceed .checkbox{
        max-width: 100%;
        flex: 100%;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .checkbox-proceed .checkbox label{
        font-size: 20px;
        color: white;
    }
    .checkbox-proceed button{
        max-width: 100%;
        flex: 100%;
        font-size: 24px;
        width: 180px;
        height: 20px;
        color: white;
        background: #F25E47;

        // background: #F25E47;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        // border-radius: 43px;

    }
    .selected{
        max-width: 100%;
        flex: 100%;
        font-size: 24px;
        width: 180px;
        height: 20px;
        color: white;
        background:#FC897A;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        // border-radius: 43px;

    }
    .proceed{
            background: #F25E47;
        }
    

    }

    @media all and (max-width: 780px){
        .checkbox-proceed .checkbox{
        max-width: 100%;
        flex: 100%;
        font-size: 18px;
    }.checkbox-proceed button{

        max-width: 80%;
        font-size: 24px;
        height: 45px;
        // background: #F25E47;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        // border-radius: 43px;

    }
    i{
        display: none;
    }
    h2{
        margin-left: 5px;
    }
    .last-line{
        margin-bottom: 100px;
    }

    }

</style>
