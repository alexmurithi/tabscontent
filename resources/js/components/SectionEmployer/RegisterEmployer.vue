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

 }

}
</script>

<style>

</style>