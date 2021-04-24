
<template>
 <div class="main-container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
   <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>


    <div class="container">
      <span class="left">
        <img src="../assets/q2.png" class="img" alt="q2.png">
      </span>
      <span class="right">
        <div class="text">
        <h1 class="q"> Describe your present <br>condition.</h1>
        <div class="box">
          <router-link to="/symptoms"><button v-on:click="passPresentCondition('OK')" class="start"  @mouseover="f1" @mouseleave="f1">OK</button></router-link>
        <router-link to="/symptoms"><button v-on:click="passPresentCondition('A Little Sick')" class="start" @mouseover="f2" @mouseleave="f2">A Little Sick</button></router-link>
      </div>
        <div class="box"><router-link to="/symptoms"><button v-on:click="passPresentCondition('Sick')" class="start" @mouseover="f3" @mouseleave="f3">Sick</button></router-link>
        <router-link to="/symptoms"><button v-on:click="passPresentCondition('Very Sick')" class="start"   @mouseover="f4" @mouseleave="f4">Very Sick</button></router-link>
        </div>
      </div>
      <div class="meter">
      <span class="arrow">
        <img src="../assets/Vector.png" class="a1" alt="">
        <img class="arw" src="../assets/Line 2 (4).png" alt="">
        <div class="circles">
        <span class="dot" v-bind:class="{color: ok}"></span>
        <span class="dot" :class="{'color': littlesick}" ></span>
        <span class="dot" :class="{'color': sick}"></span>
        <span class="dot" :class="{'color': verysick}"></span>
      </div>
        <img src="../assets/Vector (1).png" class="a1" alt="">
        <!-- <div class="arrow-right"></div> -->
      </span>
      <span class="text2">
        <span class="t1">Alright</span>
         <span class="t1 t2">Very Sick</span>
      </span>
    </div>
    </span>
</div>

<router-link to="/symptoms"><img src="../assets/Arrow 3.png" class="a3"></router-link>
<router-link to="/q1"><img src="../assets/Arrow 4.png" class="a4" alt="a4"></router-link>

 </div>
</template>

<script>
import { bus } from '../main'
export default {
    components: {
      
    },
  data () {
    return {
      ok:false,
      littlesick:false,
      sick:false,
      verysick:false
    }
  },
  methods:{
    passPresentCondition(item){
      // if(item==='OK'){
      //   this.alright=true;
      // }
      // else if(item==='A Little Sick'){
      //   this.littlesick=true;
      // }
      // else if(item==='Sick'){
      //   this.sick=true;
      // }
      // else if(item==='Very Sick'){
      //   this.verysick=true;
      // }
      bus.$emit('present-condition',item);
    }, 
        
    f1(){
      this.ok=(!this.ok);   
      // console.log(this.ok);
    },
    f2(){
      this.littlesick=(!this.littlesick);   
    },
    f3(){
      this.sick=(!this.sick);   
    },
    f4(){
      this.verysick=(!this.verysick);   
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
  box-sizing: border-box;
  margin:0;
  padding: 0;
  // background-color: #000;
  font-family: Titillium Web, sans-serif;
}

.container{
  /* background-color: black; */
  display: flex;
  flex-flow: wrap;
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
    max-width: 480px;
    height: auto;
}

.right{
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items:flex-start;
}

.text{
  max-width: 515px;
  /* margin-left: 10%; */
}

.box{
  /* background-color: black; */
  min-width: 515px;
  height: auto;
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
outline: none;

}
.start:hover{
background: #FC897A;
}

.line{

width: 440px;
height: 0px;
left: 861px;
top: 559.62px;

border: 1px solid #FC897A;
transform: rotate(-0.08deg);

}

.arrow{
  /* background: black; */
  margin-top: 40px;
  /* padding-top: 400px; */
display: flex;
justify-content:flex-start;
align-items: center;
}
.circles{
  position: absolute;
  width: 460px;
  /* background: blue; */
  display: flex;
  justify-content: space-around;
}
.dot{
  /* background: white; */
  height: 18px;
  width: 17px;
  background-color: white;
  border: 1px solid #FC897A;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
}
.color{
   /* background: white; */
  height: 18px;
  width: 17px;
  background-color: #FC897A;
  border: 1px solid #FC897A;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
}
.meter{
display:flex;
flex-direction:column;
}
.text2{
  display:flex;
}
.t1{
   width:50%;
margin-top: 5px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.015em;
color: #333333;
display:flex;
justify-content:flex-start;
}
.t2{
  width:50%;
  display:flex;
  justify-content:flex-end;
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

@media all and (max-width: 1145px){
  .container{
    display: flex;
    flex-direction: column;
    /* flex-flow: column wrap; */
    justify-content: center;
    /* align-items: center; */
      /* width: 100%;
      height: 100vh;  */
  }
   .left{
    height: 100vh;
    /* background: red; */
    display: flex;
    justify-content: center;
     align-items: center;
    width: 100%;
  }
   .right{
    /* height: 100vh; */
      /* background: black; */
      height: 100vh;
      width: 100%;
     max-width: 515px;
     display: flex;
     justify-content: center;
      align-items: flex-start;
     /* display: flex;

    justify-content: flex-start;
    align-items: center;
    margin-left: 70%; */
  }

  .img{
    min-width: 300px;
    height: auto;
  }

}

@media all and (max-width: 500px){
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
      /* width: 100%;
      height: 100vh;  */
  }
   .left{
    margin-top:45px;
    height: 50vh;
    /* background: red; */
    display: flex;
    justify-content: center;
     align-items: center;
    width: 100%;
  }
   .right{

      height: 50vh;
      width: 100%;
     max-width: 515px;
     display: flex;
     /* display: flex;

    justify-content: flex-start;
    align-items: center;
    margin-left: 70%; */
  }

  .img{
    max-width: 250px;
    height: auto;
  }
  .text{
    max-width:250px;
    font-size:12px;
    margin-left:20px;
  }
  .start{
  background: white;
  width: 160px;
  height: 65px;
  border: 3px solid #FC897A;
  box-sizing: border-box;
  border-radius: 43px;

margin: 20px 20px 10px 0px;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 50px;
text-align: center;
letter-spacing: 0.05em;
}

.box{
  /* background-color: black; */
  min-width: 500px;
  height: auto;
}

.arrow{
//   background: black; 
  margin-top: 40px;
max-width:350px;
display: flex;
justify-content:flex-start;
align-items: center;

}
.circles{
  position: absolute;
  width: 370px;
  // background: blue; 
  display: flex;
  justify-content: space-around;
}

.arw{
   max-width:330px; 
}
.a4{
  position:fixed;
  bottom:37%;
  left:4%;
}
.a3{
  position:fixed;
  bottom:37%;
  left:58%;
}
}

</style>
