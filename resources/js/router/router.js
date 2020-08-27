import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Routes //
import Welcome from '../components/Welcome.vue';
import Home from '../components/Home.vue';
import Admin from '../components/Admin.vue';

import HomePageContent from '../components/SectionHome/HomePageContent.vue';
import MakeOrder from '../components/Employer/MakeOrder.vue';

import Authentication from '../components/Authentication.vue';
import Login from '../components/Auth/login.vue';
import Signup from '../components/Auth/Signup.vue';

Vue.use(VueRouter);

export const router =new VueRouter({
   mode:'history',
   routes:[
     {
       path: '/',
       component:Welcome
     },
     {
       path:'/auth',
       component:Authentication,
       children:[
         {
           path:'login',
           name:'login',
           component:Login,
          
         },
         {
           path:'signup',
           component:Signup,
           
         }
       ]

     },
     {
       path: '/app/employer',
       component:Home,
       meta: {
        requiresAuth: true,
      
    },
       
       children:[
         {
           path:'',
           name:'employer-dashboard',
           component:HomePageContent,
           
          
         },
        {   
          path:'make-order',
          name:'make-order',
          component:MakeOrder,
          
        },
        
       
       ]
     },
    
     
     {
       path:'/app/admin',
       component:Admin,
       children:[

       ]
     },
     
     
   ]
});