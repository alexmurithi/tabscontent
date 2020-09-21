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
    workFlows:[],
    languages:[],
    contentTypes:[],
    userContOrders:[],
    contentDetails:[]
   
   },
   //GETTERS//

   getters:{
        loading:state=>{
          return state.loading
      },
      contentDetails:state=>{
        return state.contentDetails
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
   
      users:state=>{
        return state.users;
      },
   
    contentTypes:state=>{
      return state.contentTypes
    },

    contentDetails:state=>{
      return state.contentDetails
    },

    languages:state=>{
      return state.languages;
    },

    workFlows:state=>{
      return state.workFlows
    },
  
    contentOrders:state=>{
      return state.contentOrders
    },

   
   userContOrders:state=>{
     return state.userContOrders
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

  
    
     getUsers:(state,payload)=>{
      state.users=payload
     },
   
     //CONTENT MUTATIONS//

     getLanguages:(state,payload)=>{
       state.languages =payload
     },
     getContentTypes:(state,payload)=>{
       state.contentTypes =payload
     },
     workFlows:(state,payload)=>{
       state.workFlows =payload
     },
    
    
    contentOrders:(state,payload)=>{
      state.contentOrders =payload.data
    },

    //Content Pricing//
    contentDetails:(state,payload)=>{
      state.contentDetails =payload
    },
   
    userContentOrders:(state,payload)=>{
      state.userContOrders =payload
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
     getUsers:({commit})=>{
       axios.get(`/api/admin/users`)
        .then((res)=>{
           if(res.status==200){
            commit('getUsers',res.data);
            
           }
          
        }).catch((err)=>{
          console.log(err)
        })
     },

     getLanguages:({commit})=>{
       axios.get(`/api/admin/languages`)
         .then((res)=>{
           if(res.status==200){
             commit('getLanguages',res.data)
           }
         }).catch((err)=>{
           console.log(err)
         })
     },

     getContentTypes:({commit})=>{
       axios.get(`/api/admin/content_types`)
       .then((res)=>{
         if(res.status==200){
           commit('getContentTypes',res.data)
         }
       }).catch((err)=>{
         console.log(err)
       })
     },
     workFlows:({commit})=>{
       axios.get(`/api/admin/workflows`)
        .then((res)=>{
          if(res.status==200){
            commit('workFlows',res.data)
          }
        }).catch((err)=>{
          console.log(err)
        })
     },

     wordsCount:({commit})=>{
       axios.get(`/api/admin/words_count`)
        .then((res)=>{
          if(res.status ==200){
            commit('wordsCount',res.data)
          }
        }).catch((err)=>{
          console.log(err)
        })
     },
     deliveryTime:({commit})=>{
       axios.get(`/api/admin/delivery_time`)
         .then((res)=>{
           if(res.status ==200){
             commit('deliveryTime',res.data)
           }
         }).catch((err)=>{
           console.log(err)
         })
     },
     contentPricing:({commit})=>{
      axios.get(`/api/admin/content_pricing`)
        .then((res)=>{
          if(res.status ==200){
            commit('contentPricing',res.data)
          }
        }).catch((err)=>{
          console.log(err)
        })
    },
   
    contentOrders:({commit})=>{
      axios.get(`/api/content/content_orders`)
        .then((res)=>{
          if(res.status==200){
            commit('contentOrders',res)
          }
        }).catch((err)=>{
          console.log("contentOrders err: "+err)
        })
    },

    //Content Pricing//
  

     userContentOrders:({commit,state})=>{
       axios.get(`/api/content/${state.currentUser.id}/userOrders`)
         .then((res)=>{
           if(res.status==200){
             commit('userContentOrders',res.data)
           }
         }).catch((err)=>{
           console.log("userContentOrders err: "+err)
         })
     },

     getContentDetails:({commit})=>{
        axios.get(`/api/content/details`)
          .then((res)=>{
            commit('contentDetails',res.data)
          }).catch((err)=>{
            console.log("content details "+err)
          })
     }
   
   }
});