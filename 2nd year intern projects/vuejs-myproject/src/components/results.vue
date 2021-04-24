
<template>
 <div class="main-container">
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
        <img src="../assets/risk.png" class="img" alt="risk.png">
        <span class = "p1">62.88%</span>
        <span class = "p1 p2">Medium</span>
      </div>
      <div class="right">
        <div class="text">Your COVID-19 risk assessment is 35.81% and you are
          in a Medium risk category. Please self-isolate yourself and monitor
          your symptoms regularly. If your symptoms persist, Click the button
          below to seek help. </div>
        <div class="box">
          <button class="start">OK</button>
        <button class="start">A Little Sick</button>
      </div>
        <div class="box"><button class="start">Sick</button>
        <button class="start">Very Sick</button></div>
      </div>
    </div>
  <div class="message">
    <a href="#">
        <i class='bx bxs-message i1'></i>
        <i class='bx bx-message i1 i2'></i>
    </a>
  </div>
 </div>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
  box-sizing: border-box;
  margin:0;
  padding: 0;
  font-family: Titillium Web, sans-serif;
}

.menu{
  position: absolute;
right : 4.31%;
}


.au{
  background: #E7D39F;
border: 3px solid #E7D39F;
box-sizing: border-box;

font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 48px;
text-align: center;
letter-spacing: 0.015em;


}

.title{
    position: absolute;
    color: black;
    left: 47%;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    line-height: 53px;
    letter-spacing: -0.015em;
}
.title:hover{
  color:white;
}
.au:hover{
  color: white;
}

header{
  top: 0px;
  position: fixed;
  width: 100%;
  height: 55px;
  background: #E7D39F;
}

.fa {
  color: black;
  padding: 15px;
  font-size: 0px;
  line-height: 53px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  color: white;
}

.fa-twitter{
    margin-left: 6.2%;
}
.head{
  /* position: relative; */
    /* background: black; */
  margin-top:112px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  margin-left: 4%
  /* justify-content: center; */
}
.dot{
/* position: absolute; */
width: 179px;
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
width: 145px;
height: 145px;
border-radius: 133px;
}
.risk{
width: 764px;
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
  flex-flow: wrap;
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
    align-items: center;
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
.text{

width: 592px;
height: 248px;

font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 33px;
display: flex;
align-items: center;
letter-spacing: 0.05em;

color: #000000;


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


@media only screen and (max-width: 750px){

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

}

</style>
