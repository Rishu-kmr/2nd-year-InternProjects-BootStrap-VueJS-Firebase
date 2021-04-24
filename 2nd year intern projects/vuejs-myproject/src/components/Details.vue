
<template>
 <div class="container">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
     <h2>Other Details</h2>
     <form action="#">
     <div class="content-1">
         <div class="phone">
             <div class="phonecont">
                <label for="phone">Contact<br>Number <span>*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="+91-123-2341-231" pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}" v-model="details.contact_number" autofocus required>
             </div>
             <p>Why we collect it: It will help us connect you to health providers and arrange for help in the time of need.</p>
          </div>
         <div class="state">
            <label for="state">State</label>
            <select name="state" id="state" v-model="details.state">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerela">Kerela</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharshtra">Maharshtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Tripura">Tripura</option>
                <option value="Telangana">Telangana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>

            <!-- <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Chattisgarh">Chattisgarh</option> -->
            </select>
         </div>
     </div>
     <div class="content-2">
         <div class="age">
             <label for="age">Age<span>*</span></label>
             <input type="number" id="age" name="age" placeholder="Enter Age" v-model="details.age" required>
           
         </div>
         <div class="email">
             <label for="email">Email:</label>   
             <input type="email" id="email" name="email" placeholder="abc@gmail.com" v-model="details.email">
         </div>
     </div>
     <div class="content-3">
         <div class="gender">
             <label for="gender">Gender<span>*</span></label>
            <select name="gender" id="gender" v-model="details.gender" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>                //include a text field for other types of gender
            </select>
         </div>
         <div class="location">
             <label for="location">Current<br>Location:</label>
             <input type="text" id="location" name="location" placeholder="Mumbai, India" v-model="details.current_location">
         </div>
     </div>
     </form>
     <div class="arrow">
         <router-link to ='/symptoms'><i class="fas fa-arrow-left"></i></router-link>
         <router-link to ='/recordCough'><i v-if="details.contact_number!=='' && details.age!=='' && details.gender!==''" v-on:click="passDetails" class="fas fa-arrow-right"></i> </router-link>
     </div>
     <br>
     <!-- <div class="msg-1">
        <i class="fas fa-comments"></i>
     </div> -->
 </div>
</template>

<script>
import { bus } from '../main'
// document.getElementById('age').validity.valid;       // bc ne 2 ghante waste kar diye
export default {
    components: {
      
    },
  data () {
    return {
     details:{
         contact_number:"",
         state:"",
         age:"",
         email:"",
         gender:"",
         current_location:"",
     },
     count:0,
    }
  },
  methods:{
      passDetails(){
          bus.$emit('pass-details',this.details);
      }
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    span{
        color: red;
    }
    .container{
        margin-top: 10%;
        // margin-left: 10%;
        // margin-bottom: 10%;
        // margin-right: 10%;
    }
    .container h2{
        margin-bottom: 30px;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 60px;
        /* or 139% */

        display: flex;
        justify-content: flex-start;

        /* Gray 1 */
        margin-top: 10%;
        margin-left: 4%;
        margin-bottom: 5%;
        color: #333333;
    }
    .phonecont{
        display: flex;
        flex-flow: row wrap;
    }
    .phonecont label{
        flex: 45%;
        max-width: 45%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 40px;
        /* or 133% */

        // display: flex;
        // align-items: center;

        /* Gray 1 */

        color: #333333;
    }
    .phonecont input{
        flex: 45%;
        max-width: 45%;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        display: flex;
        font-size: 120%;
        align-items: center;
        justify-content: center;
        padding: 15px;
        height: 60px;
        outline: none;
    }
    .phone{
        display: flex;
        flex-flow: column wrap;
    }
    .phone p{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        /* or 143% */

        display: flex;
        align-items: center;

        /* Gray 1 */

        color: #333333;
        margin-top: 15px;
    }
    .content-1{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    .content-1 .phone{
        flex: 45%;
        max-width: 45%;
    }
    .content-1 .state{
        // margin-left: 30px;
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-1 .state label{
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 40px;
        /* or 133% */

        /* Gray 1 */

        color: #333333;
        flex: 45%;
        max-width: 45%;

    }
    .content-1 .state select{
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        flex: 45%;
        max-width: 45%;
        height: 60px;
        font-size: 120%;
        padding: 15px;
        outline: none;
    }

    .content-2{
        margin-top: 20px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    .content-2 .age{
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-2 .age label{
        flex: 45%;
        max-width: 45%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height, or 167% */

        // display: flex;
        // align-items: center;

        /* Gray 1 */

        color: #333333;
    }
    .content-2 .age input{
        flex: 45%;
        max-width: 45%;
        border: 3px solid #FC8375;
        box-sizing: border-box;
        border-radius: 43px;
        height: 60px;
        font-size: 120%;
        padding: 15px;
        outline: none;
        outline: none;
    }
    .content-2 .email{
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-2 .email label{
        flex: 45%;
        max-width: 45%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height, or 167% */

        display: flex;
        align-items: center;

        /* Gray 1 */

        color: #333333;
    }
    .content-2 .email input{
        flex: 45%;
        max-width: 45%;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        height: 60px;
        font-size: 120%;
        padding: 15px;
        outline: none;
    }
    .content-3{
        margin-top: 30px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    .content-3 .gender{
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-3 .gender label{
        flex: 45%;
        max-width: 45%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 50px;
        /* or 167% */

        /* Gray 1 */
        // display: flex;
        // align-items: center;
        color: #333333;
    }
    .content-3 .gender select{
        flex: 45%;
        max-width: 45%;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        height: 60px;
        font-size: 120%;
        padding: 15px;
        outline: none;
    }
    .content-3 .location{
        flex: 45%;
        max-width: 45%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .content-3 .location label{
        flex: 45%;
        max-width: 45%;
        font-family: Titillium Web;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 40px;
        /* or 133% */

        display: flex;
        align-items: center;

        /* Gray 1 */

        color: #333333;
    }
    .content-3 .location input{
        flex: 45%;
        max-width: 45%;
        border: 3px solid #FC897A;
        box-sizing: border-box;
        border-radius: 43px;
        height: 60px;
        font-size: 120%;
        padding: 15px;
        outline: none;
    }

    .arrow{
        margin-top: 40px;
        margin-left: 120px;
        margin-right: 120px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        font-size: 40px;
        color: black;
    }
    .arrow i{
        color: black;
    }
     .msg-1 i{
         
         margin-right: 40px;
         margin-bottom: 30px;
        display: flex;
        justify-content: flex-end;
        color: #F25E47;
        font-size: 30px;

    }
    //------  hover effect
    input:hover{
        background: #F25E47;
        font-weight: bold;
        color: black;
    }
    // select:hover{
    //     background: #F25E47;                                 // look why it select multiple hover items in ui template
    //     font-weight: bold;
    //     color: black;
    // }



    @media all and (min-width: 500px) and (max-width: 850px){
        .container{
            margin-top: 120px;
            padding-left: 30px;
            padding-right: 20px;
        }
        .content-1 .phone{
            flex: 100%;
            max-width: 100%;
        }
       
        .content-1 .state{
            margin-top: 10px;
            margin-bottom: 10px;
            flex: 100%;
            max-width: 100%;
        }
        .content-2 .age{
            flex: 100%;
            max-width: 100%;
        }
        .content-2 .email{
            margin-top: 30px;
            flex: 100%;
            max-width: 100%;
        }
        .content-3 .gender{
            flex: 100%;
            max-width: 100%;
        }
        .content-3 .location{
            margin-top: 30px;
            flex: 100%;
            max-width: 100%;
        }
    }

    @media all and (max-width: 500px){
        .container{
            margin-top: 50px;
            padding-left: 30px;
            padding-right: 20px;
        }
        .container h2{
            font-size: 30px;
            line-height: 30px;
        }
        .content-1 .phone{
            flex: 100%;
            max-width: 100%;
        }
        .content-1 .phone p{
            font-size: 14px;
            line-height: 18px;
        }
        .content-1 .phone label{
            flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
        }
        .content-1 .phone input{
            flex: 100%;
            max-width: 100%;
            // font-size: 100%;
            height: 40px;
            margin-top: 10px;
        }
        .content-1 .state{
            margin-top: 10px;
            flex: 100%;
            max-width: 100%;
        }
        .content-1 .state label{
            flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
        }
        .content-1 .state select{
            flex: 100%;
            max-width: 100%;
            font-size: 20px;
            line-height: 30px;
            margin-top: 10px;
            height: 40px;
            padding-top: 5px;
            padding-bottom: 0px;
            letter-spacing: .4px;
            // padding: 0px;
        }


        .content-2 .age{
            flex: 100%;
            max-width: 100%;
        }
        .content-2 .age label{
            flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
            padding-bottom: 5px;
        }
        .content-2 .age input{
            flex: 100%;
            max-width: 100%;
            height: 40px;
        }
        .content-2 .email{
            margin-top: 20px;
            flex: 100%;
            max-width: 100%;
        }
        .content-2 .email label{
           flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
            padding-bottom: 5px;
        }
        .content-2 .email input{
            flex: 100%;
            max-width: 100%;
            height: 40px;
        }
        .content-3 .gender{
            flex: 100%;
            max-width: 100%;
        }
        .content-3 .gender label{
            flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
            padding-bottom: 5px;
        }
        .content-3 .gender select{
            flex: 100%;
            max-width: 100%;
            height: 40px;
            padding-top: 5px;
            padding-bottom: 0px;
            font-size: 20px;
            line-height: 30px;
        }
        .content-3 .location{
            margin-top: 20px;
            flex: 100%;
            max-width: 100%;
        }
        .content-3 .location label{
            flex: 100%;
            max-width: 100%;
            font-size: 18px;
            line-height: 22px;
        }
        .content-3 .location input{
            margin-top: 10px;
            flex: 100%;
            max-width: 100%;
            height: 40px;
            margin-bottom: 70px;
        }
        .arrow{
            margin-top: 0px;
            max-width: 100%;
            background: white;
            position: fixed;
            padding: 20px;
            bottom: 10px;
            right: 10px;
            left: 10px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            margin-left: 0px;
            margin-right: 0px;
            padding-top: 0px;
            padding-bottom: 4px;
        }
        .arrow i{
            border: 3px solid lightgoldenrodyellow;
            border-radius: 200px;
            font-size: 30px;
        }
    }
   
</style>