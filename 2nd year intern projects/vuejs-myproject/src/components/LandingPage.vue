
<template>
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
  
     <div class="container">
      <div class="red">
        <img class="logo" src="../assets/logo.png" alt="CoughLoud_logo">
      </div>
      <div class="white">
        <div class="text">
            <h1 class="heading"> COUGH<br>LOUD </h1>
            <p>Please contribute to the creation of South Asia's first largest COVID-19
              cough database! We are trying to use voice analysis and questionnaire to
              identify the patterns of COVID19 & create a risk profile for individuals.
              Let's start with the recording of a simple cough.<br><br><br></p>
<router-link to="/survey"><button class="start">Start</button></router-link>
    </div>
    </div>
    
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
  // background-color: #000;
  font-family: Titillium Web, sans-serif;
}

.container{
    display: flex;
}

.red{
  /* margin-left:0; */
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 50%;
  background: #F25E47;
}

.logo{
    max-width: 470px;
    height: auto;
    align-self: center;
    border-radius: 150px;
}

.white{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;

}

.text{
  max-width: 407px;
}

.heading{
  position: relative;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 105px;
  color: #333333;
}

p{
  font-weight: 600;
}

.start{
  background: white;
width: 407px;
height: 61px;
border: 3px solid #FC897A;
box-sizing: border-box;
border-radius: 43px;

font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 55px;
text-align: center;
letter-spacing: 0.05em;
outline: none;
cursor: pointer;
}
.start:hover{
background: #FC897A;
}


@media all and (max-width: 950px){

 .container{
      display: flex;
      flex-direction: column;
  }
  .red{

    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: #F25E47;
  }
    .white{
      height: 100vh;
      width: 100%;
    }
    .logo{
      max-width: 500px;
      height:auto;
      border-radius:100px;
    }
}

@media all and (max-width: 500px){

 .container{
      display: flex;
      flex-direction: column;
  }
  .red{

    display: flex;
    justify-content: center;
    height: 70vh;
    width: 100%;
    background: #F25E47;
  }
    .white{
      margin-top: 100px;
      height: 70vh;
      width: 100%;
      justify-content:center;
      align-items:center;
      margin-bottom:40%;
    }

    .logo{
      max-width: 270px;
      height:auto;
      border-radius:100px;
    }
    .text{
      max-width:300px;
    }
    .start{
      height:60px;
      width:300px;
    }
    .heading{
      font-size:80px;
    }
    p{
      font-size:16px;
    }
}



</style>


