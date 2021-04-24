
<template>
 <div class="main-container">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="loader">
    </div>
    <div class="image">
      <img src="../assets/logo.png" class="img" alt="Wait For Results">
      <span class="text">Please wait for the results...</span>
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

export default {
    components: {
      
    },
  data () {
    return {
      
    }
  },
  mounted(){
    let vue = this;
    setTimeout(function(){
      vue.$router.push('/risk');
    },2000);
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

.image{
  /* background-color: black; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img{
  min-width: 300px;
  max-width: 515px;
  height: auto;
}
.text{

  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 55px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

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
.loader {
  // border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  // width: 400px;
  // height: 400px;
  width: 550px;
  height: 550px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 32%;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


@media only screen and (max-width: 1145px){
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
@media only screen and (max-width: 500px){
  .img{
    width: 300px;
    height: 300px;

  }
  .loader{
    top: 30%;
    left: 8%;
    height: 330px;
    width: 330px;
  }
  .text{
    font-size: 20px;
  }
}

</style>
