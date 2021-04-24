
<template>
 <div class="main-container">
     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name = "description" scontent="">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="container">
      <span class="left">
        <img src="../assets/q1.png" class="img" alt="q1.png">
      </span>
      <span class="right">
        <div class="text">
            <h1 class="q"> Have you ever been diagnosed with COVID-19 in the past 30 days? </h1>
            <div><router-link to="/q2"><button v-on:click="passDiagnosis('No, Tested Negative')" class="start">No, Tested Negative</button></router-link></div>
            <div><router-link to="/q2"><button v-on:click="passDiagnosis('Tested Positive')" class="start">Tested Positive</button></router-link></div>
            <div><router-link to="/q2"><button v-on:click="passDiagnosis('Not Tested')" class="start">Not Tested</button></router-link></div>
        </div>
     </span>
    </div>

<router-link to="/q2"><img src="../assets/Arrow 3.png" class="a3" alt="a3"></router-link>
<router-link to="/survey"><img src="../assets/Arrow 4.png" class="a4" alt="a4"></router-link>


 </div>
</template>

<script>
import { bus } from '../main'
import store from '../store'
export default {
    components: {
      
    },
  data () {
    return {
      diagnosed:""
    }
  },
  methods:{
    passDiagnosis(text){
      this.diagnosed=text;
      bus.$emit('diagnosis',this.diagnosed);
      // console.log(this.diagnosed);
    }
  },
  // mounted(){
  //   console.log(store.state)
  // }
}
</script>

<style lang="scss" scoped>
     *{
   box-sizing: border-box;
   margin:0;
   padding: 0;
  //  background-color: #000;
   font-family: Titillium Web, sans-serif;
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
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.img{
    max-width: 460px;
    height: auto;
}

.right{
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.text{
  max-width: 515px;
  margin-left: 10%;
}

.start{
  background: white;
width: 340px;
height: 73px;
border: 3px solid #FC897A;
box-sizing: border-box;
border-radius: 43px;
margin: 20px;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 50px;
text-align: center;
letter-spacing: 0.05em;
outline: none;
}
.start:hover{
background: #FC897A;
}

.a3{
    position: fixed;
  right: 10.344%;
  bottom:24.8%
}


.a4{
  position: fixed;
  left: 7%;
  bottom:24.4%
}

@media only screen and (max-width: 1145px){
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
   .left{
    height: 100vh;
    /* background: red; */
    display: flex;
    justify-content: center;
     align-items: flex-start;
    width: 100%;
  }
   .right{
      height: 100vh;
      width: 100%;
     max-width: 515px;
     display: flex;
     justify-content: flex-start;
      align-items: flex-start;
      margin-bottom:100px;
  }

  .img{
    padding-top:75px;
    min-width: 300px;
    height: auto;
  }

}

@media all and (max-width:500px){

  .img{
    max-width:300px;
  }
  .a3{

  }
  .a4{


  }
  .left{
    height: 60vh;
    /* background: red; */
    display: flex;
    justify-content: center;
     align-items: flex-start;
    width: 100%;
  }
   .right{
      height: 50vh;
      width: 100%;
     max-width: 300px;
     display: flex;
     justify-content: flex-start;
      align-items: flex-start;
      margin-bottom:100px;
  }
  .start{

      background: white;
width: 250px;
height: 53px;
border: 3px solid #FC897A;
box-sizing: border-box;
border-radius: 43px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 50px;
text-align: center;
letter-spacing: 0.05em;

  }
  .text{
  max-width: 300px;
  margin-top:20px;
  margin-left:0px;
  font-size:12px;
}

}
</style>
