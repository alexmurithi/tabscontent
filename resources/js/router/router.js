import Vue from 'vue';
import VueRouter from 'vue-router';
import MainApp from '../components/MainApp.vue';

// Import Routes //
import Welcome from '../components/Welcome.vue';



import Authentication from '../components/Authentication.vue';
import Login from '../components/Auth/login.vue';
import Signup from '../components/Auth/Signup.vue';
import ForgotPassword from '../components/Auth/ForgotPassword.vue';
import ResetPassword from '../components/Auth/ResetPassword.vue';


import NotFound from '../components/NotFound.vue';



import ContentIndex from '../components/Content/index.vue';
import BlogPosts from '../components/Content/BlogPosts.vue';
import Articles from  '../components/Content/Articles.vue';
import MakeOrder from '../components/Content/Orders/MakeOrder.vue';


Vue.use(VueRouter);

export const router =new VueRouter({
   mode:'history',
   routes:[
    {
      path:'/',
      name:'welcome',
      component:Welcome
    },

     {
       path:'/packages/',
       name:'packages',
       component:ContentIndex,
       children:[
         {
          path:'blog-posts',
          name:'blog-posts',
          component:BlogPosts
         },
         {
          path:'articles',
          name:'articles',
          component:Articles
         }
        
        
       ]
     },

     {
       path:'/content/make-order',
       component:MakeOrder,
       props:route=>({query:route.query})
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
           path:'forgot-password',
           name:'forgot-password',
           component:ForgotPassword
         },
         {
           path:'reset-password',
           name:'reset-password-form',
           component:ResetPassword
         },
         {
           path:'signup',
           component:Signup,
           
         }
       ]

     },
    
     
     
   ]
});