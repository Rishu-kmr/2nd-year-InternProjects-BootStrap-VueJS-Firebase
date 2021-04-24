
<template>
<div class="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <div class="content">
        <img src="../assets/congratulation.png" alt="">
        <h1>Congratulations!</h1>
        <p>You just came to know your COVID- 19 risk assessment! </p>
    </div>
</div>
</template>

<script>

export default {
    components: {
      
    },
  data () {
    return {
      copyright:'Copyright 2020, thanks for ....'
    }
  }
}
</script>

<style lang="scss" scoped>
    .content{
        margin-top: 10%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
    .content img{
        max-width: 40%;
        height: 300px;
        width: 300px;
    }
    .content h1{
        max-width: 40%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 45px;
        line-height: 65px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;

        color: #000000;

    }
    .content p{
        max-width: 30%;
        margin-top: 0px;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;

        color: #000000;
    }
    
    
    
    
    @media all and (max-width: 700px){
        .container{
            margin-top: 100px;
        }
        .content h1{
            max-width: 100%;
            font-size: 24px;
            
        }
        .content p{
            max-width: 60%;
            font-size: 18px;
        }
        .content img{
            max-width: 60%;
            height: 200px;
            width: 200px;
        }
    }
</style>
