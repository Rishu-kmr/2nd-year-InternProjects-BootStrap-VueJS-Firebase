
<template>
 <div class="container">
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <h1 class="title">How much risk<br> you at?</h1>
     <div class="mid-container">
     <div class="content-1">
         <h2>About Us</h2>
         <p>"Coughloud" is an initiative with a vision to perform risk assessment of COVID-19 from home. The world is on a standstill at the moment and we do not have enough testing kits for everybody. We are building different ways to assess the risk for COVID-19. Recent studies have shown evidence that identifying certain patterns assisted with artificial intelligence can identify lung diseases like flu, bronchiolitis and pneumonia. We believe the same may hold true for COVID-19.</p>
     </div>
     <div class="img-msg">
          <!-- <v-img :src="require('@../assets/pic2.jpg')" aspect-ratio="2.75" ></v-img> -->
         <img src="../assets/pic2.png" alt="">
        <!-- <i class="fas fa-comments"></i> -->
     </div>
     
     </div>
    <hr>
     <div class="end-container">
         <!-- <v-img :src="require('@../assets/pic1.jpg')" aspect-ratio="2.75" ></v-img> -->
         <img src="../assets/pic1.jpg" alt="">
         <!-- <div class="p-msg"> -->
         <p>We envision to build the database with indicated symptoms through data surveys and create AI algorithms to detect "COVID-19" from your home. We are entrepreneurs, researchers and scientists, who have come forward as a group hoping that this tool can become an effective in addressing the global pandemic and seeking global well-being. <br> <br> Please write to us for any comments, suggestions, and questions at <a href="#">info@healthwin.in</a> <br> <br> Happy Health ! </p>
         <!-- <i class="fas fa-comments"></i> -->
         <!-- </div> -->
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
    hr{
        display: none;
    }
    .title{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 900;
        font-size: 89px;
        line-height: 80px;
        display: flex;
        justify-content: center;
    }
    .mid-container{
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
    }
    .content-1{
        height: 400px;
        width: 450px;;
    }
    .content-1 h2{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 44px;
        line-height: 40px;
        color: #F25E47;
    }
    .content-1 p{
        font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* display: flex;
align-items: center; */
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;

    }
    /* .p-msg{
        display: flex;
    } */
    /* .p-msg i{
        align-self: flex-end;
    } */
    i{
        margin: 40px;
        color: #F25E47;
    }
    .mid-container img{
        height: 300px;
        width: 400px;
        border: 2px solid #F25E47;
        border-radius: 40px;
    }

    .end-container{
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
    }
    .end-container img{
        height: 400px;
        width: 450px;
        
    }
    .end-container p{
        height: 300px;
        width: 400px;
        font-family: Titillium Web;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* display: flex;
align-items: center; */
letter-spacing: -0.015em;

/* Gray 1 */

color: #333333;

    }

    @media all and (max-width: 750px){
        .content-1{
            height: 500px;
        }
        .end-container p{
            height: 450px;
        }
    }
    @media all and (max-width: 500px){
        p{
            margin-left: 10px;
        }
        hr{
            display: block;
        }
        .title{
            margin-left: 10px;
        }
        .content-1{
            height: 600px;
            width: 350px;
        }
        .end-container p{
            height: 550px;
            width: 350p;
        }
        .mid-container p{
            margin-bottom: 0px;
        }
        .mid-container img{
            height: 300px;
            width: 350px;
            margin-top: 0px;
            margin-bottom: 20px;
        }
        .end-container img{
            height: 300px;
            width: 350px;
            margin-bottom: 0px;
        }
    }
    @media all and (max-width: 300px){
        .content-1{
            height: 800px;
            width: 350px;
        }
        .end-container p{
            height: 700px;
            width: 350p;
        }
        img{
            height: 200px;
            width: 220px;
        }
    }
    @media all and (max-width: 400px){
        .content-1{
            height: 600px;
            width: 350px;
        }
        .end-container p{
            height: 700px;
            width: 350p;
        }
        img{
            height: 200px;
            width: 220px;
        }
        .mid-container img{
            height: 250px;
            width: 300px;
            margin-top: 0px;
            margin-bottom: 20px;
        }
        .end-container img{
            height: 250px;
            width: 300px;
            margin-bottom: 0px;
        }
    }
</style>
