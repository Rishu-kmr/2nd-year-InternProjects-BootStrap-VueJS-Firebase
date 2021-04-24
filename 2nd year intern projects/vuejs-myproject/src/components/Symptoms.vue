
<template>
 <div class="container">
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <h1>In the past 20 days, did you experience any of the below symptoms ? <span>*</span></h1>
     <p>These symptoms will help us understand and assess your risk. Select as many as applicable. The listed symptoms were indicated in the studies of several COVID 19 patients. </p>
     <div class="symptom">
         <div class="cont-1">
             <input type="checkbox" id="symptom1" name="symptom1" value="Fever" v-model="symptoms.has_fever">
             <label for="symptom1"> Fever</label><br>
             <input type="checkbox" id="symptom2" name="symptom2" value="DryCough" v-model="symptoms.has_dryCough">
             <label for="symptom2"> Dry Cough</label><br>
             <input type="checkbox" id="symptom3" name="symptom3" value="Shortnessofbreath"  v-model="symptoms.has_shortnessOfBreath">
             <label for="symptom3"> Shortness of Breath /<br><span>Difficult breathing</span></label><br>
             <input type="checkbox" id="symptom4" name="symptom4" value="Bodypain" v-model="symptoms.has_bodyPain">
             <label for="symptom4"> Body pains / Fatigue</label><br>
             <input type="checkbox" id="symptom5" name="symptom5" value="headache" v-model="symptoms.has_headache">
             <label for="symptom5"> Headaches</label><br>
         </div>
         <div class="cont-2">
             <input type="checkbox" id="symptom6" name="symptom6" value="Sorethroat" v-model="symptoms.has_soreThroat">
             <label for="symptom6"> Sore-throat</label><br>
             <input type="checkbox" id="symptom7" name="symptom7" value="runnynose" v-model="symptoms.has_runnyNose">
             <label for="symptom7"> Runny Nose / Sneezes</label><br>
             <input type="checkbox" id="symptom8" name="symptom8" value="chestpain" v-model="symptoms.has_chestPain">
             <label for="symptom8"> Chest Pain</label><br>
             <input type="checkbox" id="symptom9" name="symptom9" value="diarrhoea" v-model="symptoms.has_diarrhoea">
             <label for="symptom9">Diarrhoea / Loose motions </label><br>
             <input type="checkbox" id="symptom10" name="symptom10" value="nausea" v-model="symptoms.has_nausea">
             <label for="symptom10"> Nausea / Vomitting sensation</label><br>
         </div>
         <router-link to="/details"><button v-on:click="passSymptoms()" type="button">NO SYMPTOMS</button></router-link>
        </div>
     <div class="arrow">
         <router-link to=/q2><i class="fas fa-arrow-left"></i></router-link>
         <router-link to='/details'> <i v-on:click="passSymptoms()" class="fas fa-arrow-right"></i> </router-link>
     </div>
     <div class="mobile-version">
         <div class="check-symptoms">
             <input type="checkbox" id="symptom1" name="symptom1" value="Fever" v-model="symptoms.has_fever">
             <label for="symptom1"> Fever</label><br>
             <input type="checkbox" id="symptom2" name="symptom2" value="DryCough" v-model="symptoms.has_dryCough">
             <label for="symptom2"> Dry Cough</label><br>
             <input type="checkbox" id="symptom3" name="symptom3" value="Shortnessofbreath" v-model="symptoms.has_shortnessOfBreath">
             <label for="symptom3"> Shortness of Breath /<br><span>Difficult breathing</span></label><br>
             <input type="checkbox" id="symptom4" name="symptom4" value="Bodypain" v-model="symptoms.has_bodyPain">
             <label for="symptom4"> Body pains / Fatigue</label><br>
             <input type="checkbox" id="symptom5" name="symptom5" value="headache" v-model="symptoms.has_headache">
             <label for="symptom5"> Headaches</label><br>
             <input type="checkbox" id="symptom6" name="symptom6" value="Sorethroat" v-model="symptoms.has_soreThroat">
             <label for="symptom6"> Sore-throat</label><br>
             <input type="checkbox" id="symptom7" name="symptom7" value="runnynose" v-model="symptoms.has_runnyNose">
             <label for="symptom7"> Runny Nose / Sneezes</label><br>
             <input type="checkbox" id="symptom8" name="symptom8" value="chestpain" v-model="symptoms.has_chestPain">
             <label for="symptom8"> Chest Pain</label><br>
             <input type="checkbox" id="symptom9" name="symptom9" value="diarrhoea" v-model="symptoms.has_diarrhoea">
             <label for="symptom9">Diarrhoea / Loose motions </label><br>
             <input type="checkbox" id="symptom10" name="symptom10" value="nausea" v-model="symptoms.has_nausea">
             <label for="symptom10"> Nausea / Vomitting sensation</label><br>
         </div>
     <!-- <div class="position-end"> -->
         <div class="bottom-bar">
            <div class="arrow-left">
                <router-link to=/q2><i class="fas fa-arrow-left"></i></router-link>
            </div>
            <div class="bottom-button">
                <router-link to="/details"><button v-on:click="passSymptoms()" type="button">NO SYMPTOMS</button></router-link>
            </div>
            <div class="arrow-right">
                <router-link to='/details'> <i v-on:click="passSymptoms()" class="fas fa-arrow-right"></i> </router-link>  
            </div>
         </div>
     </div>
     <!-- </div> -->
     <!-- <div class="msg-1">
        <i class="fas fa-comments"></i>
        </div> -->
 </div>
</template>

<script>
import { bus } from '../main'
export default {
    components: {
      
    },
  data () {
    return {
        symptoms:{
            has_fever:false,
            has_dryCough:false,
            has_shortnessOfBreath:false,
            has_bodyPain:false,
            has_headache:false,
            has_soreThroat:false,
            has_runnyNose:false,
            has_chestPain:false,
            has_diarrhoea:false,
            has_nausea:false,
        },
    }
  },
  methods:{
      passSymptoms(){
          bus.$emit('pass-symptoms',this.symptoms);
      }
  }
}
</script>

<style lang="scss" scoped>
*{
    font-family: Titillium Web;
}
    .container{
        
        margin: 40px auto;
        padding: 20px;
        padding-left: 40px;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
    }
    .container h1{
        
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 50px;
        /* or 139% */
        /* Gray 1 */
        color: #333333;
        margin-top: 40px;
        padding-top: 40px;
    }
    .container p{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 35px;
        /* or 146% */

        display: flex;
        align-items: center;

        color: #000000;
        margin-top: 0px;
    }
    .symptom{
        margin-top: 30px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .symptom input{
        font-size: 24px;
        padding: 10px;
    }
    .symptom label{
        font-size: 24px;
        padding: 10px;
        margin-bottom: 20px;
    }
    .symptom .cont-1{
        padding: 20px;
        padding-right: 0px;
        flex: 30%;
        margin-right: 0px;
        max-width: 30%;
        border: 2px solid #F25E47;
        border-radius: 30px;
    }
    .symptom .cont-1 span{
        padding-left: 40px;
    }
    .symptom .cont-2{
        padding: 20px;
        padding-right: 0px;
        flex: 30%;
        margin-right: 0px;
        max-width: 30%;
        border: 2px solid #F25E47;
        border-radius: 30px;
    }
    .symptom button{
        flex: 20%;
        width: 250px;
        max-width: 180%;
        height: 60px;
        background: #F25E47;
        border-radius: 30px;
        color: black;
        font-size: 120%;
        cursor: pointer;
        outline: none;
        // display: flex;
        // align-items: center;
        // justify-content: center;
    
    }
    .arrow{
        margin-top: 40px;
        display: flex;
        margin-left: 120px;
        margin-right: 120px;
        flex-flow: row nowrap;
        justify-content: space-between;
        font-size: 40px;
        color: black;
    }
    .arrow i{
        color: black;
    }


    .mobile-version{
        display: none;
        margin-top: 0px;
        margin-left: 0px;
        padding-top: 0px;
    }
    .mobile-version .check-symptoms{
        padding: 20px;
        padding-right: 0px;
        flex: 100%;
        margin-right: 0px;
        max-width: 100%;
        border: 2px solid #F25E47;
        border-radius: 30px;
    }
    .mobile-version input{
        font-size: 24px;
        padding: 10px;
        margin-top: 10px;
    }
    .mobile-version label{
        font-size: 24px;
        padding: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
        line-height: 40px;
    }

    .position-end{
        display: none;
    }
    .bottom-bar{
        display: none;
    }
     .msg-1 i{
        display: flex;
        justify-content: flex-end;
        margin: 20px;
        color: #F25E47;
        font-size: 30px;
    }






    @media all and (max-width: 750px){
        .container{
            
            margin: 0px;
            margin-left: 0px;
        }
        .symptom{
            display: none;
            // visibility: hidden;
        }
        .symptom .cont-1{
        flex: 100%;
        max-width: 100%;
        margin-top: 20px;
        margin-left: 0px;
    }
    .symptom .cont-2{
        flex: 100%;
        max-width: 100%;
        margin-top: 20px;
        margin-left: 0px;
    }
    .symptom button{
        flex: 100%;
        // width: 175px;
        max-width: 100%;
        margin-top: 30px;
        margin-left: 0px;
        position: absolute;
        left: 85px;
    }
    .arrow{
        // position: fixed;
        display: none;
        margin-left: 0px;
        margin-right: 0px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        
    }
    .arrow i{
        display: none;
        font-size: 30px;
        z-index: 2;
        border: 2px solid lightgoldenrodyellow;
        border-radius: 100px;
        // position: absolute;
    }
    .mobile-version{
        margin-top: 0px;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
    }
    .arrow{
        margin-bottom: 0px;
    }

    .mobile-version .check-symptoms{
        margin-bottom: 100px;
    }
    .container h1{
        padding-top: 0px;
        font-size: 20px;
        line-height: 22px;
        padding-top: 0px;
    }
    .container p{
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
    .mobile-version .check-symptoms{
        margin-top: 0px;
        padding-top: 0px;
    }
    .mobile-version .check-symptoms label{
        font-size: 22px;
        line-height: 36px;
    }
    
    .bottom-bar{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: baseline;
        margin-top: 30px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        // margin-bottom: 20px;
        padding-top: 5px;
        padding-bottom: 20px;
        background: white;
    }
    .bottom-bar .arrow-left{
        flex: 12%;
        max-width: 12%;
    }
    .bottom-bar .arrow-left i{
        max-width: 100%;
        // font-size: 25px;
        color: black;
        display: flex;
        align-self: flex-start;
        padding: 5px;
        border: 3px solid lightgoldenrodyellow;
        border-radius: 40px;
        font-size: 30px;

    }
    .bottom-bar .bottom-buttom{
        flex: 75%;
        max-width: 75%;
    }
    .bottom-bar .bottom-button button{
        max-width: 100%;
        height: 45px;
        font-size: 20px;
        background: #F25E47;
        border-radius: 30px;
        cursor: pointer;
    }
    .bottom-bar .arrow-right{
        flex: 12%;
        max-width: 12%;
    }
    .bottom-bar .arrow-right i{
        max-width: 100%;
        // font-size: 25px;
        color: black;
        display: flex;
        align-self: flex-end;
        text-decoration: none;
        outline: none;
        padding: 5px;
        border: 3px solid lightgoldenrodyellow;
        border-radius: 50px;
        font-size: 30px;
    }
    a{
        text-decoration: none;
    }
    
    // .position-end{
    //     display: inline;
    //     position: fixed;
    // }
    // .bottom-bar{
    //     // position: fixed;
    //     display: flex;
    //     flex-flow: row nowrap;
    //     justify-content: space-around;
    // }
    // .bottom-bar .arrow-left{
    //     flex: 20%;
    //     max-width: 20%;
    // }
    // .bottom-bar .bottom-button{
    //     flex: 60%;
    //     max-width: 60%;
    //     height: 60px;
    //     background: #F25E47;
    //     border-radius: 30px;
    //     color: black;
    //     font-size: 120%;
    //     cursor: pointer;
    // }
    // .bottom-bar .arrow-right{
    //     flex: 20%;
    //     max-width: 20%;
    // }





    }





    @media all and (min-width: 750px) and (max-width: 1300px){
        .symptom .cont-1{
        flex: 45%;
        max-width: 45%;
    }
    .symptom .cont-2{
        flex: 45%;
        max-width: 45%;
    }
    .symptom button{
        flex: 100%;
        max-width: 100%;
        margin-top: 20px;
    }
    }

</style>