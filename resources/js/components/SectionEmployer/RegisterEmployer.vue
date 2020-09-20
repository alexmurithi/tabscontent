<template>
   <div>
       <header-section/>
       <div class="container" style="padding-top:135px">
        <Form @submit.prevent="">
          <Row :gutter="32">  
                  <Col span="12">
                    <FormItem label ="First Name" label-position="top">
                        <Input size="large" v-model="firstName" />
                    </FormItem>
                   </Col>
                   <Col span="12">
                    <FormItem label ="Last Name" label-position="top">
                        <Input size="large" v-model="lastName" />
                    </FormItem>
                   </Col>  
          </Row>
          <Row :gutter="32">  
                  <Col span="8">
                    <FormItem label ="Email" label-position="top">
                        <Input type="email" size="large" v-model="email" />
                    </FormItem>
                   </Col>
                   <Col span="8">
                    <FormItem label ="Password" label-position="top">
                        <Input type="password" password size="large" v-model="password" name="password"/>
                    </FormItem>
                   </Col> 
                   <Col span="8">
                    <FormItem label ="Confirm Password" label-position="top">
                        <Input type="password" password size="large" v-model="password_confirmation" name="password_confirmation"/>
                    </FormItem>
                   </Col>  
          </Row>
          <Row :gutter="32">  
                  <Col span="12">
                    <FormItem label ="Phone Number(Optional)" label-position="top">
                        <Input size="large" v-model="phoneNumber" />
                    </FormItem>
                   </Col>
                   <Col span="12">
                    <FormItem label ="Country(Optional)" label-position="top">
                        <Input size="large" v-model="country" />
                    </FormItem>
                   </Col>  
          </Row>
          <Row :gutter="32">
              <Col span="24">
                <Button type="primary" size="large" 
                @click="registerEmployer"
                :loading="registerLoading"
                :disabled="registerLoading"
                >
                {{registerLoading ? 'registering...' : 'Register to Order Content Now!'}}
                </Button>
              </Col>
          </Row>
        </Form>
         
       </div>
       
   </div>
</template>

<script>
import HeaderSection from '../SectionWelcome/HeaderSection.vue';
import {login} from '../../helper/auth.js';
export default {
 name:'register-employer',
 mounted:function(){
     this.$Notice.config({
     top: 150,
   
});
 },
 data:function(){
     return{
         firstName:'',
         lastName:'',
         email:'',
         password:'',
         password_confirmation:'',
         country:'',
         phoneNumber:'',
         registerLoading:false,
     }
 },
 components:{
     HeaderSection,
 },
 methods:{
     //this method will register employers//
   registerEmployer:function(){
       this.registerLoading=true
       axios.post('/api/auth/register-employer',{
           firstName:this.firstName,
           lastName:this.lastName,
           email:this.email,
           password:this.password,
           password_confirmation:this.password_confirmation,
           country:this.country,
           phoneNumber:this.phoneNumber
       }).then((res)=>{
           if(res.status==200){
            this.registerLoading=false
            
            let user ={email:this.email,password:this.password}
             login(user)
             .then((res) => {
                        this.$store.commit("loginSuccess", res);
                          if(this.$store.getters.currentUser.role_id==4){
                             this.$router.push({path: '/app/employer'});
                            
                          }else{
                              this.$router.push({path: '/'});
                          }
                       
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                        this.errors(this.authErrors.error)
                    });
           }
       }).catch((err)=>{
           if(err.response.status==422){
               this.registerLoading=false
               console.log(err.response)
               for(let i in err.response.data){
                  this.$Notice.warning({
                      title:'Warning!',
                      desc:err.response.data[i][0]
                  })
                }
           }else{
              this.$Notice.warning({
                      title:'Warning!',
                      desc:err.response.data ? err.response.data : err.response.statusText
                  }) 
           }
       })
   }
 }

}
</script>

<style>

</style>