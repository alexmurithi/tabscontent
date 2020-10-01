import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getLocalUser } from '../helper/auth.js';

Vue.use(Vuex);
const user =getLocalUser();


export const store =new Vuex.Store({
   state:{
    currentUser :user,
    isLoggedIn: !!user,
    loading:false,
    auth_error:null,
    users:[],
    

    //CONTENT STATES//

    blogBasics:[],
   
   },
   //GETTERS//

   getters:{
        loading:state=>{
          return state.loading
      },
      
      isLoggedIn:state=>{
          return state.isLoggedIn
      },
      currentUser(state) {
        return state.currentUser;
    },
      authErrors:state=>{
        return state.auth_error
    },
  

  //CONTENT GETTERS//

   blogBasics:state=>{
    return state.blogBasics
   },

   currentUser:state=>{
     return state.currentUser
   }
    
  
   },

   //MUTATIONS//

   mutations:{
      login:state=>{
        state.loading=true;
        state.auth_error=null;
    },

    loginSuccess(state, payload) {
        state.auth_error = null;
        state.isLoggedIn = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    loginFailed(state, payload) {
        state.loading = false;
        state.auth_error = payload.error;
    },

    logout:state=>{
        localStorage.removeItem("user");
        state.currentUser =null;
        state.isLoggedIn=false;
    },

  
    
     //CONTENT MUTATIONS//

     blogBasics:(state,payload)=>{
      state.blogBasics =payload
     },

   
   },
   //ACTIONS//

   actions:{
    login:context=>{
      context.commit("login");
  },
  logout:({commit})=>{
    axios.post(`/api/auth/logout`)
      .then((res)=>{
        if(res.status==200){
          commit('logout')
        }
      }).catch((err)=>{
        console.log( "Logout ERR "+err)
      })
  },
     

    //Content Pricing//
  
   //CONTENT ACTIONS//

  
     blogBasics:({commit})=>{
       axios.get(`/api/content/blog_basics`)
         .then((res)=>{
           if(res.status==200){
             commit('blogBasics',res.data)
           }
         }).catch((err)=>{
           console.log("blogBasics err: "+err)
         })
     }
   
   
   }
});