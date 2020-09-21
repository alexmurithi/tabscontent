<template>
<div>
   <header-section/>
      <section class="home">
           <!-- Outer Row -->
        <Row :gutter="32" v-if="resetLink==false">
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:24}" :lg="{span:12,offset:6}">
         <div style="background:#eee;padding: 20px; ">
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
      </section>
</div>
   
</template>

<script>
import HeaderSection from '../SectionWelcome/HeaderSection.vue';
export default {
 name:'send-reset-link',
 mounted(){
   this.$Notice.config({
    top: 130,
    
});
 },
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
          console.log(err.response.data.errors)
           if(err.response.status==422){
            for(let i in err.response.data.errors){
                  this.loading=false
                   this.resetLink=false
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

 