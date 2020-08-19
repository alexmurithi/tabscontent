import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Routes //
import Welcome from '../components/Welcome.vue';
import Home from '../components/Home.vue';
import Admin from '../components/Admin.vue';

import HomePageContent from '../components/SectionHome/HomePageContent.vue';
import MakeOrder from '../components/Employer/MakeOrder.vue';

Vue.use(VueRouter);

export const router =new VueRouter({
   mode:'history',
   routes:[
     {
       path: '/',
       component:Welcome
     },
     {
       path: '/app',
       component:Home,
       children:[
        {
          path:'dashboard',
          component:HomePageContent,
        },
        {
          path:'employer/make-order',
          component:MakeOrder
        }
       ]
     },
     {
       path:'/admin',
       component:Admin,
       children:[

       ]
     },
     
     
   ]
});