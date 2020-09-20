<template>
<div>
   <header-section/>
   <div class="container" style="padding-top:130px">
      
        <!-- Outer Row -->
        <Row :gutter="32" v-if="resetLink==false">
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:12,offset:6}">
         <div style="background:#eee;padding: 20px">
            <Card  :padding="10" shadow >
                <div slot="title">
                  <h5><strong>Forgot Password</strong></h5>
                </div>
               <Form @submit.prevent="sendResetLink">
            
                    <FormItem label="Email" label-position="top">
                        <Input type="email"  placeholder="Email" size="large" v-model="user.email">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="sendResetLink" long :loading="loading" :disabled="loading">{{loading ? 'Sending Link ...' : 'Send Link'}}</Button>
                    </FormItem>
              </Form>
            </Card>

         </div>
          </Col>

        </Row>
        <Row :gutter="32" v-else>
          <Col span="18" offset="3">
            <Alert type="success" show-icon>
                      Success
                      <span slot="desc">A password reset link was sent to <strong>{{user.email}}</strong>. Please check your email for further instructions.</span>
                   </Alert>
          </Col>
        </Row>
         <!-- <div class="row justify-content-center">

          <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
               
                <div class="row" v-if="resetLink==false">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Send Reset Link</h1>
                      </div>
                      <form class="user" @submit.prevent="sendResetLink">
                        <div class="form-group">
                        
                          <Input type="email" placeholder="email" size="large" v-model="user.email">
                            <span slot="prepend"><Icon type="ios-mail" /></span>
                          </Input>
                        </div>
                        
                        <Button type="primary" long @click="sendResetLink" :loading="loading">{{loading ? 'Sending Link ...' : 'Send Reset Link'}}</Button>
                        
                      </form>
                    
                    </div>
                  </div>
                </div>
                <div class="row" v-else>
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                      <Alert type="success" show-icon>
                        A success prompt
                        <span slot="desc">A password reset link was sent to <strong>{{user.email}}</strong> Please check your email to reset password!</span>
                      </Alert>

                       <form class="user" @submit.prevent="sendResetLink">
                        <div class="form-group">
                        
                          <Input type="email" placeholder="email" size="large" v-model="user.email">
                            <span slot="prepend"><Icon type="ios-mail" /></span>
                          </Input>
                        </div>
                        
                        <Button type="primary" long @click="sendResetLink" :loading="loading">{{loading ? 'Sending Link ...' : 'Resend Reset Link'}}</Button>
                        
                      </form>
                  </div>
                </div>
              
              </div>
            </div>

          </div>

         </div> -->

    </div>
</div>
   
</template>

<script>
import HeaderSection from '../SectionWelcome/HeaderSection.vue';
export default {
 name:'send-reset-link',
 data:function(){
     return{
         user:{
             email:''
         },
         loading:false,
         resetLink:false
     }
 },
 components:{
   HeaderSection
 },
 methods:{
     sendResetLink:function(){
       this.loading=true
        axios.post(`/api/auth/forgot-password`,{
            email:this.user.email
        }).then((res)=>{
           this.loading=false
           this.resetLink=true
          //  this.user.email=''
        }).catch((err)=>{
          this.loading=false
          this.resetLink=false
            console.log(err)
        })
     }
 }
}
</script>


 