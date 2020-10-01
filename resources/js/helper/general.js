export function initialize(store, router) {
  router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const requiresEmployer = to.matched.some(record => record.meta.requiresEmployer);

     
      const currentUser = store.state.currentUser;
  
      if(requiresAuth && !currentUser) {
          next('/auth/login');
      } else if(to.path == '/auth/login' && currentUser) {
          next('/');
      } else if(requiresEmployer){
             if(currentUser.role_id ==4){// $email =$user->email;
              // $password=$user->password;
      
              // return response()->json([$email,$password],200);
              // $token = auth()->login($user);
      
              // return $this->respondWithToken($token);
      
              // $this->login($user->email,$user->password);
              // return response()->json([
              //     'message' => 'User successfully registered',
              //     'user' => $user
              // ], 201);
      
               next()
             }else{
               next('/')
             }
      }
      else{
        next()
      }
  });
  
  axios.interceptors.response.use(null, (error) => {
      if (error.response.status == 401) {
          store.commit('logout');
      }

      return Promise.reject(error);
  });

  if (store.getters.currentUser) {
      setAuthorization(store.getters.currentUser.token);
  }
}

export function setAuthorization(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}