import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store =new Vuex.Store({
   state:{
      users:[],
      languages:[],
      contentTypes:[],
      workFlows:[],
      wordsCount:[],
      deliveryTime:[],
      contentPricing:[],
   },
   getters:{

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
    }

   },
   mutations:{
     getUsers:(state,payload)=>{
      state.users=payload
     },

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
    }
   },
   actions:{
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
    
   }
});