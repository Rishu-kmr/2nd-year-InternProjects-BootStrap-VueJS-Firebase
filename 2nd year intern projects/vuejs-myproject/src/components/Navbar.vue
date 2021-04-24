
<template>
 <div class="main-container">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="header">
      <div class="icons">
         <a href="https://www.instagram.com/healthwinin/"><i class='bx bxl-twitter fa'></i></a>
         <a href="https://www.instagram.com/healthwinin/"><i class='bx bxl-facebook fa '></i></a>
        <a href="https://www.instagram.com/healthwinin/"><i class='bx bxl-instagram fa '></i></a>
        </div>
        <!-- <img   src="" alt=""> -->
        <router-link to="/"><div class="title"><p>CoughLoud</p></div></router-link>
        <div class="menu">
        <router-link to="/"><i class='bx fa bxs-home'></i></router-link>
        <router-link to="/survey"><i class='bx fa bx-list-check'></i></router-link>
        <router-link to="/about"><button href="#" class="au"><div>About Us</div></button></router-link>
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

  //    function initFreshChat() {
  //   window.fcWidget.init({
  //     token: "58e4eb4f-f2c3-4f4c-8fd9-e2bf45ccde8b",
  //     host: "https://wchat.freshchat.com"
  //   });
  // }
  // function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);


</script>



<style lang="scss" scoped>

 *{
  box-sizing: border-box;
  margin:0;
  padding: 0;
  // background-color: #000;
  font-family: Titillium Web, sans-serif;
  text-decoration:none;
}

.header{
  top: 0px;
  position: fixed;
  display:flex;
  z-index: 100;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background: #E7D39F;
}

.icons{
  height:auto;
  margin-left:4%;
//  background: black;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}

.title{
    justify-content: center;
    align-items: center;
    color: black;
    font-style: normal;
    font-weight: 700;
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


.au{
 background: #E7D39F;
border: 3px solid #E7D39F;
box-sizing: border-box;

font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 0px;
text-align: center;
letter-spacing: 0.015em;
margin-bottom: 10px;
}


.fa {
  color: black;
  padding: 12px;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  color: white;
}

.menu{
  margin-right: 4%;
  display:flex;
  justify-content:center;
  align-items:center;
}
a{
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
button:hover{
  cursor: pointer;
}
button{
  outline: none;
  text-decoration: none;
}

@media all and (max-width:500px){

.header{
  top: 0px;
  position: sticky;
  display:flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background: #E7D39F;
}

.icons{
  height:auto;
  margin-left:4%;
//  background: black;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}

.title{
 display:none;
}

.title:hover{
  color:white;
}
.au:hover{
  color: white;
}


.au{
 background: #E7D39F;
border: 3px solid #E7D39F;
box-sizing: border-box;

font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 0px;
text-align: center;
letter-spacing: 0.015em;
margin-bottom: 10px;
}


.fa {
  color: black;
  padding: 12px;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
.fa:hover {
  color: white;
}

.menu{
  margin-right: 4%;
  display:flex;
  justify-content:center;
  align-items:center;
}

}

</style>
