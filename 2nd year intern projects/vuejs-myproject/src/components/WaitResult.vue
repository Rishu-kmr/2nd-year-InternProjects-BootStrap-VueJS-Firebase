
<template>
<div class="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <div class="img">
        <img src="../assets/pic1.jpg" alt="">
    </div>
    <p>Please wait for the results.</p>
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
    .container{
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: center;
    }
    .img{
        margin-top: 100px;
        height: 500px;
        width: 500px;
    }
    img{
        display: flex;
        max-width: 100%;
    }
    p{
        position: relative;
        top: -40px;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 55px;
        // display: flex;
        // align-items: center;
        letter-spacing: 0.05em;

        color: #000000;

    }
    @media all and (min-width: 400px) and (max-width: 500){
        .container{
            padding-right: 20px;
            padding-left: 20px;
        }
        .img{
            height: 400px;
            width: 400px;
        }
    }
    @media all and (max-width: 400){
        .container{
            padding-right: 20px;
            padding-left: 20px;
        }
        .img{
            height: 200px;
            width: 200px;
        }
    }
</style>
