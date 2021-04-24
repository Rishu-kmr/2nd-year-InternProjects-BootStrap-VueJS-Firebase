
<template>
  <div>
     <app-navbar></app-navbar>
     <!-- <app-wait></app-wait> -->
     <!-- <app-risk></app-risk> -->
     <!-- <app-results></app-results> -->
     <!-- <app-wait></app-wait> -->
    <!-- <app-q2></app-q2> -->
    <!-- <app-landingpage></app-landingpage> -->
    <!-- <app-q1></app-q1> -->
    <!-- <app-landingpagenew></app-landingpagenew> -->
   
     <!-- <app-header></app-header>-->
     <!-- <app-survey></app-survey>  -->
     <!-- <app-about0></app-about0> -->
     <!-- <app-recordcough></app-recordcough> -->
     <!-- <app-waitresult></app-waitresult> -->
     <!-- <app-symptoms></app-symptoms> -->
     <!-- <app-details></app-details> -->
     <!-- <app-congrats></app-congrats> -->
    <router-view :mainData="toSend"></router-view>
    <!-- <landing-pageNew></landing-pageNew>  -->
    
    <!-- <app-footer></app-footer> -->
    <!-- <app-about></app-about> -->
    
    <!-- <router-view></router-view> -->
    <!-- <app-congratulation></app-congratulation> -->

  </div>
</template>

<script>
import { bus } from './main'
// import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import LandingPage from './components/LandingPage.vue'
import About from './components/About.vue'
import Survey from './components/Survey.vue'
import Symptoms from './components/Symptoms.vue'
import Details from './components/Details.vue'
import WaitResult from './components/WaitResult.vue'
import RecordCough from './components/RecordCough.vue'
import Congratulation from './components/Congratulation.vue'
import Navbar from './components/Navbar.vue'
import q1 from './components/q1.vue'
import LandingPage from './components/LandingPage.vue'
import q2 from './components/q2.vue'
import congrats from './components/congrats.vue'
import results from './components/results.vue'
import wait from './components/wait.vue'
import risk from './components/risk.vue'


export default {
    components: {
      // 'app-header':Header,
      'app-footer':Footer,
      'app-landingpage':LandingPage,
      'app-about':About,
      'app-survey':Survey,
      'app-symptoms':Symptoms,
      'app-details':Details,
      'app-waitresult':WaitResult,
      'app-recordcough':RecordCough,
      'app-congratulation':Congratulation,
      'app-navbar':Navbar,
      'app-q1':q1,
      'app-q2':q2,
      'app-congrats':congrats,
      'app-results':results,
      'app-wait':wait,
      'app-risk':risk
    },
  data () {
    return {
      title: 'My App',
      toSend:{
        diagnosed:"",
        condition:"",
        symptoms:{
          type:Object,
        },
        details:{
          type: Object,
        },
        file:"",
        riskP:0,
      }
    }
  },
  methods:{},
  mounted(){
  bus.$on('diagnosis',(value) => {
    this.toSend.diagnosed = value;
    console.log(this.toSend.diagnosed+" empty diagnosed");
  });
  bus.$on('present-condition',(value) =>{
    this.toSend.condition = value;
  });
  bus.$on('pass-symptoms',(value) =>{
    this.toSend.symptoms = value;
  });
  bus.$on('pass-details',(value) =>{
    this.toSend.details = value;
  });
  bus.$on('pass-blob',(value) =>{
    this.toSend.file = value;
  });
  bus.$on('pass-riskP',(value) =>{
    console.log('risk-calc');
    this.toSend.riskP = parseFloat((value / 2.29 * 100).toFixed(2));
  })
}
}
</script>

<style lang="scss">

</style>
