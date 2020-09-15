import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Routes //
import Welcome from '../components/Welcome.vue';
import Employer from '../components/Employer.vue';

import Admin from '../components/Admin.vue';

import EmployerPageContent from '../components/SectionEmployer/EmployerPageContent.vue';
import EmployerContentOrder from '../components/SectionEmployer/Orders/Content.vue';


import Authentication from '../components/Authentication.vue';
import Login from '../components/Auth/login.vue';
import Signup from '../components/Auth/Signup.vue';

import MyContentOrders from '../components/SectionEmployer/Orders/MyContentOrders.vue'

import AdminDashBoard from '../components/SectionAdmin/PageContent.vue';
import AdminContentOrders from '../components/SectionAdmin/Orders/Content.vue';
import NotFound from '../components/NotFound.vue';


Vue.use(VueRouter);

export const router =new VueRouter({
   mode:'history',
   routes:[
     {
       path: '/',
       component:Welcome
     },
     {
       path:'/404',
       component:NotFound
     },
     { path: '*', redirect: '/404' },  
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
       component:Employer,
       meta: {
        requiresAuth: true,
        // requiresEmployer:true
      
    },
       
       children:[
         {
           path:'',
           name:'employer-dashboard',
           component:EmployerPageContent,
           
          
         },
        {   
          path:'make-order/content',
          name:'make-order',
          component:EmployerContentOrder,
          
        },

        {
          path:':id/my-orders',
          name:'my-orders',
          component:MyContentOrders
        }
       
        
       
       ]
     },
    
     
     {
       path:'/app/admin',
       component:Admin,
       children:[
          {
            path:'',
            component:AdminDashBoard
          },
          {
            path:'orders/content',
            component:AdminContentOrders
          }
       ]
     },
     
     
   ]
});