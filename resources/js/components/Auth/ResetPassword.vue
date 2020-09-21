<template>
  <div>
    <header-section/>
   <section class="home">
       <Row :gutter="32">
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:12,offset:6}">
         <div style="background:#eee;padding: 20px">
            <Card  :padding="10" shadow >
                <div slot="title">
                  <h5><strong>Change Password</strong></h5>
                </div>
               <Form @submit.prevent="resetPassword">
                   <FormItem label="Email" label-position="top">
                        <Input type="email" prefix="ios-mail"  placeholder="Email"  size="large" v-model="user.email" name="email">
                            
                        </Input>
                    </FormItem>
            
                    <FormItem label="New Password" label-position="top">
                        <Input type="password" prefix="ios-lock"  placeholder="Password" password size="large" v-model="user.newPassword" name="password">
                            
                        </Input>
                    </FormItem>
                     <FormItem label="Confirm Password" label-position="top">
                        <Input type="password" prefix="ios-lock" placeholder="Password" password size="large" v-model="user.passwordConfirm" name="password_confirmation">
                           
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="resetPassword" long :loading="loading" :disabled="loading">{{loading ? 'Reseting Password ...' : 'Change Password'}}</Button>
                    </FormItem>
              </Form>
            </Card>

         </div>
          </Col>

          </Row>
   </section>
         
    
  </div>
</template>

<script>
import HeaderSection from '../SectionWelcome/HeaderSection.vue';
export default {
  data:function(){
    return{
      user:{
        email:'',
        newPassword:'',
        passwordConfirm:'',
      },
     
      loading:false,
    }
  },
  mounted:function(){
    
  },
  components:{
    HeaderSection,
  },
  methods:{
    resetPassword:function(){
      this.loading=true
      axios.post(`/api/auth/reset-password`,{
        token:this.$route.query.token,
        email:this.user.email,
        password:this.user.newPassword,
        password_confirmation:this.user.passwordConfirm
      }).then((res)=>{
        if(res.status==200){
          this.loading=false
          this.$store.commit('logout')
          this.$router.push({path:'/auth/login'})
        }
      }).catch((err)=>{
          if(err.status==422){
            for(let i in err.response.data.errors){
                  this.loading=false
                  this.warning(err.response.data.errors[i][0])
                }
          }else{
            this.loading=false
            this.$Notice.error({
              title:'Error!',
              desc:"OOPS! Something wrong happened!"
            })
          }
            
      })
    }
  }
}
</script>

<style scoped>
@media (min-width: 991px){
  .home{
  background: url();
  padding-top: 135px;
}
}



 
sidebar-overlay .home {
    padding-top: 0px;
    background-position: 0px -121px;
}
</style>