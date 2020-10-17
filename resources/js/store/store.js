import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getLocalUser } from '../helper/auth.js';

Vue.use(Vuex);
const user =getLocalUser();
const price_per_word=0.04

export const store =new Vuex.Store({
   state:{
    currentUser :user,
    isLoggedIn: !!user,
    loading:false,
    auth_error:null,
    users:[],
    orderKeywords:[],
    orderFormStep:0,
    content_types:[],
    languages:[],
    content_categories:[],
    content_audiences:[],
    content_grammatic_people:[],
    content_vocabularies:[],
    content_meta_desc_box:0,
    

    //CONTENT STATES//

   
   
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
    orderKeywords:state=>{
      return state.orderKeywords
    },

    orderFormStep:state=>{
      return state.orderFormStep
    },

    orderFormTotalPrice:state=>{
      return state.orderFormTotalPrice
    },

    content_types:state=>{
      return state.content_types
    },

    languages:state=>{
      return state.languages
    },

    content_categories:state=>{
      return state.content_categories
    },

    content_audiences:state=>{
      return state.content_audiences
    },
    
    content_grammatic_people:state=>{
      return state.content_grammatic_people
    },

    content_vocabularies:state=>{
      return state.content_vocabularies
    },


   currentUser:state=>{
     return state.currentUser
   },

   content_meta_desc_box:state=>{
     return state.content_meta_desc_box
   },
    
  
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

     orderKeywords:(state,payload)=>{
       //add the new keyword to the array as an object//
       state.orderKeywords.push(Object.assign({},payload));
     },

     deleteKeyword:(state,payload)=>{
       //get the index of the selected keyword//
      const i =state.orderKeywords.indexOf(payload)
      //delete the object matching the index from the array//
      state.orderKeywords.splice(i,1)
     },

     nextOrderFormStep:(state,payload)=>{
      state.orderFormStep =state.orderFormStep+=1
     },

     //store content_types from DB IN CONTENT_TYPES ARRAY//
     content_types:(state,payload)=>{
       state.content_types =payload
     },

     //STORE LANGUAGES FROM DB IN LANGUAGES ARRAY//
     languages:(state,payload)=>{
     state.languages =payload
     },

     content_categories:(state,payload)=>{
       state.content_categories =payload
     },

     content_vocabularies:(state,payload)=>{
       state.content_vocabularies =payload
     },

     content_audiences:(state,payload)=>{
       state.content_audiences =payload
     },

     content_grammatic_people:(state,payload)=>{
       state.content_grammatic_people =payload
     },

     addMetaDesc:(state,payload)=>{
       
         state.content_meta_desc_box =payload
       
       
     }
   
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
     

   
  
   //CONTENT ACTIONS//


     //Fetch contentTypes from DB//
     contentTypes:({commit})=>{
       axios.get(`/api/content/types`)
         .then((res)=>{
           if(res.status==200){
              commit('content_types',res.data)
           }
         }).catch((err)=>{
           console.log("content_types: " +err)
         })
     },

     //Fetch languages from DB//
     languages:({commit})=>{
      axios.get(`/api/content/languages`)
        .then((res)=>{
          if(res.status==200){
             commit('languages',res.data)
          }
        }).catch((err)=>{
          console.log("languages: " +err)
        })
    },

    content_categories:({commit})=>{
      axios.get(`/api/content/categories`)
        .then((res)=>{
          if(res.status==200){
             commit('content_categories',res.data)
          }
        }).catch((err)=>{
          console.log("content_categories: " +err)
        })
    },

    content_vocabularies:({commit})=>{
      axios.get(`/api/content/vocabularies`)
        .then((res)=>{
          if(res.status==200){
             commit('content_vocabularies',res.data)
          }
        }).catch((err)=>{
          console.log("content_vocabularies: " +err)
        })
    },

    content_audiences:({commit})=>{
      axios.get(`/api/content/audiences`)
        .then((res)=>{
          if(res.status==200){
             commit('content_audiences',res.data)
          }
        }).catch((err)=>{
          console.log("content_audiences: " +err)
        })
    },

    content_vocabularies:({commit})=>{
      axios.get(`/api/content/vocabularies`)
        .then((res)=>{
          if(res.status==200){
             commit('content_vocabularies',res.data)
          }
        }).catch((err)=>{
          console.log("content_vocabularies: " +err)
        })
    },

    content_grammatic_people:({commit})=>{
      axios.get(`/api/content/grammatic_people`)
        .then((res)=>{
          if(res.status==200){
             commit('content_grammatic_people',res.data)
          }
        }).catch((err)=>{
          console.log("content_grammatic_people: " +err)
        })
    },
   
   
   }
});