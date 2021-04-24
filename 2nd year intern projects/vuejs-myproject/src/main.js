import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Survey from './components/Survey.vue'
import Symptoms from './components/Symptoms.vue'
import Details from './components/Details.vue'
import WaitResult from './components/WaitResult.vue'
import RecordCough from './components/RecordCough.vue'
import Congratulation from './components/Congratulation.vue'
import LandingPage from './components/LandingPage.vue'
import q1 from './components/q1.vue'
import q2 from './components/q2.vue'
import congrats from './components/congrats.vue'
import results from './components/results.vue'
import wait from './components/wait.vue'
import risk from './components/risk.vue'
import firebase from 'firebase'






var config = {
  apiKey: "AIzaSyAlTGjpHOLHBA8sq8CofJTRvxXvBQ8sy0c",
  authDomain: "coughloud-254e3.firebaseapp.com",
  databaseURL: "https://coughloud-254e3.firebaseio.com",
  projectId: "coughloud-254e3",
  storageBucket: "coughloud-254e3.appspot.com",
  messagingSenderId: "383808259539",
  appId: "1:383808259539:web:1f5ddb7cb2c53356e65b26",
  measurementId: "G-GFN6MXF0WB"
};
// Initialize Firebase
var app = firebase.initializeApp(config);
firebase.analytics();

if(process.env.NODE_ENV == 'development'){
  app.functions().useFunctionsEmulator('http://localhost:5000');
}

Vue.use(VueRouter);


const route = [
  { path: '/about',component: About},
  { path: '/survey',component: Survey},
  { path: '/',component: LandingPage},
  { path: '/recordCough',component: RecordCough},
  { path: '/symptoms', component:Symptoms},
  { path: '/details',component:Details},
  { path: '/waitResult',component: WaitResult},
  { path: 'congratulation',component:Congratulation},
  { path:'/q1',component:q1},
  { path:'/q2',component:q2},
  { path:'/congrats',component:congrats},
  { path:'/results',component:results},
  { path:'/wait',component:wait},
  { path:'/risk',component:risk}
];

const router = new VueRouter({
  routes:route,
  mode:'history'
});


export const bus = new Vue();

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
