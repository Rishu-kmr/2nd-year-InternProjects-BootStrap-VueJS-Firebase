
<template>
 <div class="main-container">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="head">
      <div class="dot2">
      <div class="dot"></div>
        <img src="../assets/logo.png" class="logo" alt="logo">
        </div>
        <span class="risk">Risk Assessment</span>
    </div>

    <div class="container">
      <div class="left">
        <div class="cont">
        <img src="../assets/risk.png" class="img" alt="risk.png">
        <span class = "p1">{{mainData.riskP}}</span>
        <span v-if="riskP<25" class = "p1 p2">Low</span>
        <span v-if="riskP > 25 && riskP <=65" class = "p1 p2">Medium</span>
        <span v-if="riskP > 65" class = "p1 p2">High</span>
      </div>
      </div>
      <div class="right">
        <div class="box">
        <div :class="{yboxGreen:setGreen, yboxYellow:setYellow, yboxOrange: setOrange}" class="">
          <div v-if="riskP <= 25">
            <p>
                Your COVID-19 risk assessment is {{mainData.riskP}}%  and you are in a Low risk category. 
                Please maintain safe social distancing, hygiene, and avoid close-contact. 
                Please self-isolate from others in the household until you recover.  
            </p>
        </div>
        <div v-if="riskP > 25 && riskP <=65">
            <p>
                Your COVID-19 risk assessment is  {{mainData.riskP}}% and you are in a Medium risk category. 
                Please self-isolate yourself and monitor your symptoms regularly. 
                If your symptoms persist, Click the button below to seek help.
            </p> 
            <!-- <div>
                <a class="btn deep-blue" href="https://www.mohfw.gov.in/"> Help </a>
            </div> -->
        </div>
        <div v-if="riskP > 65">
            <p>
                Your COVID-19 risk assessment is {{mainData.riskP}}% and you are in a High risk category. 
                Please self-quarantine yourself and immediately notify authorities. 
                You need to seek medical help immediately.
            </p> 
            <!-- <div>
                <a class="btn deep-blue" href="https://www.mohfw.gov.in/"> Help </a>
            </div> -->
        </div>

          <button class = " p1 p2 p3"><a href="https://www.mohfw.gov.in/">Help</a></button>
        </div>
        <div class="d1">
        <p class="disc"> Disclaimer : The metrics shown above based only on symptoms selected by the
          user, and does not include analysis of the cough samples at the moment. It is
          not a substitute for professional medical advice, diagnosis or treatment. If
          now or in future you experience severe symptoms like difficulty in breathing,
          chest pain or other concerning symptoms, call emergency services immediately
          and notify authorities.</p>
          <button class = "retake">Retake Survey</button>
        </div>
</div>
    </div>
    </div>


  <!-- <div class="message">
    <a href="#">
<i class='bx bxs-message i1'></i>
<i class='bx bx-message i1 i2'></i>
</a>
</div> -->

 </div>
</template>

<script>
import { bus } from '../main'
import firebase from 'firebase'
export default {
    components: {
      
    },
  data () {
    return {
      riskP:this.mainData.riskP,
      setGreen: this.mainData.riskP<=25? true: false,
      setYellow: this.mainData.riskP>25 && this.mainData.riskP<=65? true: false,
      setOrange: this.mainData.riskP>65? true: false,
  }
},
methods:{
  
},
props:['mainData']
 
}
</script>

<style lang="scss" scoped>
    *{
  box-sizing: border-box;
  margin:0;
  padding: 0;
  font-family: Titillium Web, sans-serif;
}
 .lightGreen{
   background: lightgreen;
 }
 .lightYellow{
   background: #EFF752;
 }
 .lightOrange{
   background: orange;
 }

a{
    text-decoration: none;
}
a:hover{
    cursor: pointer;
}

.head{
  /* position: relative; */
    /* background: black; */
  margin-top:112px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  margin-left: 8%
  /* justify-content: center; */
}
.dot{
/* position: absolute; */
width: 179px;
z-index:-7;
height: 176px;
background: #FC897A;
border-radius: 133px;
}
.dot2{
  /* position: relative; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.logo{
padding-right: 10px;
/* padding-bottom: 5px: */
position: absolute;
z-index:-5;
width: 145px;
height: 145px;
border-radius: 133px;
}

.risk{
width: auto;
height: 105px;
font-style: normal;
font-weight: 900;
font-size: 96px;
line-height: 105px;
display: flex;
align-items: center;
color: #333333;
}
.container{
  /* background-color: black; */
  display: flex;
 // flex-flow: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.left{
  /* background-color: red; */
  flex-direction: column;
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.cont{
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20%;
}

.img{
    width: 378px;
    height: 196px;
}

.right{
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items:flex-start;
}

.start{
  background: white;
  width: 207px;
  height: 73px;
  border: 3px solid #FC897A;
  box-sizing: border-box;
  border-radius: 43px;

margin: 20px 40px 20px 0px;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 50px;
text-align: center;
letter-spacing: 0.05em;
}
.start:hover{
background: #FC897A;
}

.p1{
width: 137px;
height: 49px;
border: 3px solid #EFF752;
box-sizing: border-box;
border-radius: 43px;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 50px;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content:  center;
align-items:center;
}

.p2{
margin-top: 15px;
background: #EFF752;
/* font-weight: 500; */
}
.p3{

  width: 137px;
  height: 49px;
  border: 3px solid #828282;
  box-sizing: border-box;
  border-radius: 43px;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 50px;
display: flex;
align-items: center;
text-align: center;

/* Gray 1 */

color: #333333;

}
.yboxYellow{
  max-width: 592px;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 43px;
  background: #EFF752;
}
.yboxGreen{
  max-width: 592px;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 43px;
  background: greenyellow;
}
.yboxOrange{
  max-width: 592px;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 43px;
  background: orange;
}
.disc{

  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
}
.text{
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.05em;

}
.d1{
  margin-top: 15px;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box{
  /* background: black; */
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 350px;
}

.retake{
  margin-top: 20px;
width: 240px;
height: 49px;
border: 3px solid #FC897A;
box-sizing: border-box;
border-radius: 43px;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 50px;
display: flex;
align-items: center;
justify-content: center;

}
/* Gray 1 */

@media only screen and (max-width: 970px){

.head{
  width: auto;
}
.dot2{
  display: none;
}
.container{
  display: flex;
  flex-direction: column;
}
.text{
  min-width: 300px;
}
.left{
  height:60vh;
  width:100%;
 // background:blue;
  display:flex;
  justify-content:center;
  align-items:center;
}
.right{
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
 // margin-right:11%;

}
.cont{
  margin-bottom:0;
  margin-left:17%;
//  margin-left:50px;
}
.box{
  align-self:center;
}
}


@media only screen and (max-width: 500px){

.head{
  width: auto;
}
.container{
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content:center;
  align-items:center;
}
.text{
  min-width: 300px;
}
.left{
  height:60vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
.right{
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
 // margin-right:11%;
}
.head{
  margin-left:0;
}
.box{
  width:100%;
}
.cont{
  width:100%;
  margin-bottom:0;
}
.box{
  align-self:center;
}

.dot2{
  display:flex;
}
.logo{
padding-right: 10px;
//position: absolute;
max-width: 128px;
height: auto;
border-radius: 190px;
}
.dot{
width: 149px;
height: 140px;
background: #FC897A;
border-radius: 133px;
}
.risk{
width: auto;
height: auto;
font-style: normal;
font-weight: 900;
font-size: 56px;
line-height: 55px;
display: flex;
align-items: center;
color: #333333;
}
}


</style>
