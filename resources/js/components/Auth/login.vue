<template>
  <div class="account_page">
    <div class="card">
      <div class="card-header bg-white">
         <div class="row">
           <div class="col-12">
             <h4 class="text-center">
               I Have an Account
             </h4>
           </div>
         </div>
            
      </div>
      <div class="card-body">
         <div class="form-group row">
             <div class="col-12">
               <label for="email">Email</label>
               <Input placeholder="Email"></Input>
             </div>
         </div>

          <div class="form-group row">
            <div class="col-12">
              <label for="password">Password</label>
              <Input type="password" password placeholder="Enter Password"></Input>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-6">
              <Checkbox v-model="remember_me"> Remember Me</Checkbox>
            </div>
            <div class="col-6">
              <router-link to="#">Forgot Password?</router-link>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-12">
              <Button type="primary" size="large" long>SIGN IN</Button>
            </div>
          </div>

      </div>

      <div class="card-footer">
        <div class="text-center">
          <div class="row">
            <div class="col-12">
              <h4>Am New Here. <router-link to="#">Create account.</router-link></h4>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data:function(){
    return{
      remember_me:false,
    }
  }
}
</script>

<style>

</style>