
<template>
 <div class="main-container">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="image">
      <img src="../assets/congrats.png" class="img" alt="Congragulations!">
       <p class="ttt">Congratulations!</p>
       <span class="text">You just came to know your<br> COVID- 19 risk assessment!</span>
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

.image{
  /* background-color: black; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-flow: wrap; */
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
.ttt{
  
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 73px;
/* display: flex;
align-items: center;
text-align: center; */
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


@media only screen and (max-width: 1145px){

  .img{
    min-width: 300px;
    height: auto;
  }


}

</style>
