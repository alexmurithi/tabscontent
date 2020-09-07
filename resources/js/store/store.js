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
   
    languages:[],
    contentTypes:[],
    workFlows:[],
    wordsCount:[],
    deliveryTime:[],
    contentPricing:[],
    contentOrders:[],

    academic_categories:[],
    academic_languages:[],
    academic_paperformats:[],
    academic_services:[],
    academic_spacing:[],
    academic_urgency:[],
    academic_edulevels:[]
     
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
   
      users:state=>{
        return state.users;
      },
   
    contentTypes:state=>{
      return state.contentTypes
    },

    languages:state=>{
      return state.languages;
    },

    workFlows:state=>{
      return state.workFlows
    },
    wordsCount:state=>{
      return state.wordsCount
    },
    deliveryTime:state=>{
      return state.deliveryTime
    },
    contentPricing:state=>{
      return state.contentPricing
    },
    contentOrders:state=>{
      return state.contentOrders
    },

    //ACADEMIC//

    academic_categories:state=>{
      return state.academic_categories
    },
    academic_languages:state=>{
      return state.academic_languages
    },
    academic_paperformats:state=>{
      return state.academic_paperformats
    },
    academic_services:state=>{
      return state.academic_services
    },
    academic_spacing:state=>{
      return state.academic_spacing
    },
    academic_urgency:state=>{
      return state.academic_urgency
    },

    academic_edulevels:state=>{
      return state.academic_edulevels
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
     wordsCount:(state,payload)=>{
       state.wordsCount =payload
     },

    deliveryTime:(state,payload)=>{
      state.deliveryTime =payload
    },
    contentPricing:(state,payload)=>{
      state.contentPricing =payload
    },
    
    contentOrders:(state,payload)=>{
      state.contentOrders =payload.data
    },

    //ACADEMIC//
    academicCategories:(state,payload)=>{
      state.academic_categories =payload
    },
    academicServices:(state,payload)=>{
      state.academic_services =payload
    },
    academicLanguages:(state,payload)=>{
      state.academic_languages =payload
    },
    academicPaperformats:(state,payload)=>{
      state.academic_paperformats =payload
    },
    academicSpacing:(state,payload)=>{
      state.academic_spacing=payload
    },
    academicUrgency:(state,payload)=>{
      state.academic_urgency=payload
    },
    academicEdulevels:(state,payload)=>{
      state.academic_edulevels=payload
    }

   },
   //ACTIONS//

   actions:{
    login:context=>{
      context.commit("login");
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

    //ACADEMIC//
    academicServices:({commit})=>{
       axios.get('/api/academic/services')
         .then((res)=>{
           if(res.status==200){
             commit('academicServices',res.data)
           }
         }).catch((err)=>{
           console.log("Academic Services "+err)
         })
    },

    academicCategories:({commit})=>{
      axios.get('/api/academic/categories')
        .then((res)=>{
          if(res.status==200){
            commit('academicCategories',res.data)
          }
        }).catch((err)=>{
          console.log("Academic Categories "+err)
        })
   },

   academicLanguages:({commit})=>{
    axios.get('/api/academic/languages')
      .then((res)=>{
        if(res.status==200){
          commit('academicLanguages',res.data)
        }
      }).catch((err)=>{
        console.log("Academic Languages "+err)
      })
 },

 academicPaperformats:({commit})=>{
  axios.get('/api/academic/paperformats')
    .then((res)=>{
      if(res.status==200){
        commit('academicPaperformats',res.data)
      }
    }).catch((err)=>{
      console.log("Academic Paperformats "+err)
    })
},

academicSpacing:({commit})=>{
  axios.get('/api/academic/spacing')
    .then((res)=>{
      if(res.status==200){
        commit('academicSpacing',res.data)
      }
    }).catch((err)=>{
      console.log("Academic Spacing "+err)
    })
},

academicUrgency:({commit})=>{
  axios.get('/api/academic/urgency')
    .then((res)=>{
      if(res.status==200){
        commit('academicUrgency',res.data)
      }
    }).catch((err)=>{
      console.log("Academic Urgency "+err)
    })
},

academicEdulevels:({commit})=>{
  axios.get('/api/academic/edulevels')
    .then((res)=>{
      if(res.status==200){
        commit('academicEdulevels',res.data)
      }
    }).catch((err)=>{
      console.log("Academic Edulevels "+err)
    })
},

   
   }
});