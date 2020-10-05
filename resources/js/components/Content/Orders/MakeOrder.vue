<template>
  <div>
   <nav-bar/>
    <div class="container" style="padding-top:50px">
        <div class="row py-2">
           <div class="col col-sm-12 col-md-12">
               <div class="order-section">
                  <div class="card" ref="orderForm">
                    <div class="card-header d-none">
                      <Steps :current="current">
                          <Step title="Order Details"></Step>
                          <Step title="Instructions"></Step>
                          <Step title="Upload File"></Step>
                          <Step title="Payment"></Step>
                      </Steps>
                    </div>
                     <div class="card-body">
                      
                       <Tabs v-show="current==0" v-if="!isLoggedIn">
                                   
                                    <TabPane label="AM NEW HERE" icon="md-person-add" class="newClient">
                                       
                                        <div class="new-client">
                                            <Form ref="validateClientNew" :model="validateClientNew" :rules="rulevalidateClientNew" :label-width="80">
                                            <Row :gutter="32">

                                            <Col span="24">
                                            <FormItem label="Name" prop="name">
                                                <Input v-model="validateClientNew.name" placeholder="Enter your name"></Input>
                                            </FormItem>
                                            </Col>

                                            <Col span="24">
                                            <FormItem label="E-mail" prop="mail">
                                                <Input v-model="validateClientNew.mail" placeholder="Enter your e-mail"></Input>
                                            </FormItem>
                                            </Col>

                                            <Col span="24">
                                            <FormItem label="Password" prop="password">
                                                <Input type="password" v-model="validateClientNew.password" password placeholder="****"></Input>
                                            </FormItem>
                                            </Col>
                                             
                                             <Col span="24">
                                             <FormItem label="Confirm Password" prop="password_confirm">
                                                <Input type="password" v-model="validateClientNew.password_confirm" password placeholder="****"></Input>
                                            </FormItem>
                                            </Col>

                                            <Col span="24">
                                            <FormItem label="Phone" prop="phone">
                                               <vue-tel-input v-model="validateClientNew.phone" enabledCountryCode id="phone-country"></vue-tel-input>
                                            </FormItem>
                                            </Col>
                                            
                                            <Col span="24">
                                            <FormItem>
                                              <Button type="primary"
                                               @click="signUp('validateClientNew')" 
                                               :loading="accountLoading" 
                                               long
                                               :disabled="accountLoading">
                                               
                                                {{accountLoading ? 'Please wait...':'Create account'}}
                                                </Button>
                                            </FormItem>
                                            
                                             </Col>
                                            </Row>
                                          </Form>
                                        </div>
                                         
                                       
                                      
                                    </TabPane>
                                     <TabPane label="I HAVE AN ACCOUNT" icon="md-log-in" class="login">
                                          <div class="client-login">
                                             <Form  :model="validateClient" ref="validateClient" :rules="rulevalidateClient" :label-width="80">
                                            <Row :gutter="32">

                                              <Col span="24">
                                            <FormItem label="Email" prop="mail">
                                                <Input v-model="validateClient.mail" placeholder="Enter your name"></Input>
                                            </FormItem>
                                            </Col>

                                            
                                              <Col span="24">
                                            <FormItem label="Password" prop="password">
                                                <Input password type="password" v-model="validateClient.password"></Input>
                                            </FormItem>
                                            </Col>
                                           
                                            <Col span="24">
                                            <FormItem>
                                              <Button type="primary" 
                                              :loading="loginLoading" 
                                              :disabled="loginLoading"
                                              long
                                              @click="login('validateClient')"
                                              >Login
                                              </Button>
                                            </FormItem>
                                            </Col>

                                            </Row>
                                          </Form>
                                          </div>
                                         
                                        
                                    </TabPane>
                                    
                       </Tabs>
                       <Row :gutter="32" v-else v-show="current==0" >
                         <Col span="24">
                             <Alert banner type="info">
                               <p>
                                 You are Logged In as <span style="color:#000">{{currentUser.name}}</span>. 
                                  <span class="px-2"><Button type="primary" @click="logout">Use a different account</Button></span>
                               </p>
                               
                               </Alert>
                         </Col>
                         <Col span="24">
                           <label for="">Full Name</label>
                           <Input  disabled :value="currentUser.name"/>
                         </Col>
                         <Col span="24">
                           <label for="">Email</label>
                           <Input  type="email" disabled :value="currentUser.email"/>
                         </Col>
                          <Col span="24">
                           <label for="">Phone</label>
                           <Input  type="email" disabled :value="currentUser.phoneNumber"/>
                         </Col>
                       </Row>

                       <Row :gutter="32" v-show="current==1">
                         <Col span="24" class="pb-2">
                            <label for="">Title</label>
                            <Input placeholder="Title" v-model="title"></Input>
                         </Col>
                         <Col span="24">
                          <p class="py-2" style="color:#000">
                            Please provide us as much details as possible. Provide keyword, topic and other information or instruction
                             that may be neccessarly.
                          </p>
                           <editor
                       
                       api-key="no-api-key"
                       v-model="instructions"
                       :init="{
                         height: 300,
                         menubar: false,
                         plugins: [
                           'advlist autolink lists link image charmap print preview anchor',
                           'searchreplace visualblocks code fullscreen',
                           'insertdatetime media table paste code help wordcount'
                         ],
                         toolbar:
                           'undo redo | formatselect | link|bold italic underline | code| \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent '
                       }"
                           />
                         </Col>

                       </Row>

                       <Row :gutter="32" v-show="current==2">
                         <Col span="24">
                           <Alert closable banner split="false">
                            Requirements

                             <template slot="desc">
                               <List>
                                <ListItem>1. Upload file size limit is 3Mibs.</ListItem>
                                <ListItem>2. Only one file can be uploaded.</ListItem>
                                <ListItem>3. Only files of format (png, jpeg, jpg pdf, docx) are accepted.</ListItem>
                               </List>
                              </template>
                           </Alert>
                         </Col>
                           <Col span="24">
                            
                             <Upload

                                  type="drag"
                                  :headers="{'x-csrf-token':token,'X-Requested-With': 'XMLHttpRequest'}"
                                  :on-exceeded-size="handleMaxSize"
                                  :max-size="3048"
                                  :on-success="handleSuccess"
                                  :on-error="handleError"
                                  :format="['pdf','docx','png','jpg','jpeg']"
                                  :on-format-error="handleFormatError"



                                  action="/api/content/files">
                                  <div style="padding: 20px 0">
                                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                      <p>Click or drag your file here to upload</p>

                                  </div>


                          </Upload>
                         </Col>
                       </Row>

                       <Row :gutter="32" v-show="current==3">
                         <div v-if="!paidFor"> 
                           <Col span="24">
                            <Alert type="info" show-icon>

                                      <span slot="desc"> Please Pay <span style="color:#000">${{totalAmount}} USD</span> to complete your order, 14% service fee included. <br>Click on the <strong style="color:#000">Paypal</strong> button below to make payment.</span>
                            </Alert>
                        </Col>
                         <Col span="24">
                           <div ref="paypal"></div>
                         </Col>
                         </div>

                         <div v-else>
                           <div class="row">
                             <div class="col-sm-12" >
                            <Alert type="success" show-icon>
                              Success
                                      <span slot="desc">Thank You <span style="color:#000">{{currentUser.name}}</span> for choosing to work with us! <br> We have received your <strong>${{totalAmount}} USD</strong> payment. To complete your order request, please click on submit order button below.</span>
                            </Alert>
                           </div>

                          
                           </div>

                           <div class="row">
                             <div class="col sm-12 col-md-12">
                                
                             </div>
                           </div>
                         </div>
                         
                        </Row>
                      

                     </div>
                     <div class="card-footer">
                       
                        
                          <Button type="primary" :disabled="isBackDisabled" v-show="current!=0"><Icon type="ios-skip-backward" /> Back</Button>
                       
                         
                           <Button type="success" @click="next" :disabled="isNextDisabled" :loading="submitOrder"><Icon type="ios-skip-forward"  /> {{current!=3 ? 'Continue' : 'Submit Order'}}</Button>
                        
                       
                       
                     </div>
                  </div>
               </div>
           </div><!--END COL-SM-12 COL-MD-7-->
          
        </div><!--END ROW-->
    </div><!--End CONTAINER-->
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../../SectionWelcome/HeaderSection.vue';
import Footer from '../../SectionWelcome/Footer.vue';
import Editor from '@tinymce/tinymce-vue';
import {login} from '../../../helper/auth.js';
import {mapGetters} from 'vuex';
export default {
 name:'make-order',

 mounted(){
   const script =document.createElement("script");
    script.src="https://www.paypal.com/sdk/js?client-id=AXT-1yDXEmB4c8oK8MiFWnOYnTprWVaxoYrvux4otWnThYPiOFct4SIPf8kUl1lTXJUtOP1III8OzOzU";
    script.addEventListener("load",this.setLoaded);
    document.body.appendChild(script);

    this.amount=this.$route.query.amount
    this.contentType =this.$route.query.type
    this.package =this.$route.query.package
    this.quality =this.$route.query.quality
    this.words =this.$route.query.words
    this.urgency =this.$route.query.urgency
    this.totalAmount =Number(this.amount*this.tax).toFixed(2)

 },

 created(){
      this.token =window.Laravel.csrfToken
      

   },

 computed:{
   ...mapGetters([
     'currentUser',
     'isLoggedIn'
   ]),

   isNextDisabled:function(){
      if(this.current==0){
        if(this.isLoggedIn){
          return false
        }else{
          return true
        }
      }else if(this.current==1){
        if(this.title=='' || this.instructions==''){
          return true
        }else{
          return false
        }
      }else if (this.current==3){
        if(!this.paidFor){
          return true
        }else{
          return false
        }
      }
    },
 },

 data:function(){
   return {
     current:0,
     accountLoading:false,
     amount:0,
     contentType:'',
     quality:0,
     urgency:'',
     words:0,
     tax:1.14,
     totalAmount:0,
     upload:[],
     title:'',
     paidFor:false,
     submitOrder:false,
     paypalData:[],
     paypalOrder:[],
     loginLoading:false,
     instructions:'',
     validateClient:{
       mail:'',
       password:'',
      
     },
    
    validateClientNew:{
       name:'',
       mail:'',
       password:'',
       password_confirm:'',
       phone:''
    },

     rulevalidateClient:{
       mail:[
         {required: true, message: 'Email is required', trigger: 'blur'},
         {type: 'email', message: 'Incorrect email format', trigger: 'blur' }
       ],
        password:[
         {required: true, message: 'Full Name is required', trigger: 'blur'}
       ],
        
     },
     rulevalidateClientNew:{
       name:[
         {required: true, message: 'Full Name is required', trigger: 'blur'}
       ],
       mail:[
         {required: true, message: 'Email is required', trigger: 'blur'},
         {type: 'email', message: 'Incorrect email format', trigger: 'blur' }
       ],
       password:[
         {required: true, message: 'Password cnnot be empty!', trigger: 'blur'},
         
       ],
       password_confirm:[
         {required: true, message: 'Password cnnot be empty!', trigger: 'blur'},
         
       ],

       phone:[
         {required: true, message: 'Phone Number is required!', trigger: 'blur'},
         
       ],
     }
   }
 },
  components:{
      NavBar,
      'editor': Editor,
      Footer,
     
  },

  

  methods:{
    next:function(){
      if(this.current!==3){
        this.current+=1
      }else if(this.current==3){
        this.submitOrder();
      }
    },

    submitOrder:function(){
     this.submitOrder=true
     axios.post(`/api/content/submit_order`,{
       orderID:this.paypalData.orderID,
       status:this.paypalOrder.status,
       amount:this.totalAmount,
       type:this.contentType,
       words:this.words,
       package:this.package,
       user_id:this.currentUser.id,
       title:this.title,
       instructions:this.instructions,
       upload_id:this.upload ? this.upload.id : '',
       quality:this.quality,
       urgency:this.urgency
     }).then((res)=>{

     })
    },

    logout(){
      if(this.currentUser){
        this.$store.dispatch('logout');
        this.$toastr.s("Logged out Successfully")
      }
      
    },

    

    signUp:function(name){
      
       this.$refs[name].validate((valid) => {
                    if (valid) {
                       this.accountLoading=true
                       axios.post(`/api/auth/register`,{

                         name:this.validateClientNew.name,
                         email:this.validateClientNew.mail,
                         password:this.validateClientNew.password,
                         password_confirm:this.validateClientNew.password_confirm,
                         phone:this.validateClientNew.phone

                       }).then((res)=>{
                         if(res.status==200){
                            this.accountLoading=false
                            this.$toastr.s("Your account has been created successfully!");
                            let user ={
                              email:this.validateClientNew.mail,
                              password:this.validateClientNew.password
                            }
                            login(user).then((res)=>{
                              this.$store.commit('loginSuccess',res)
                              this.validateClientNew.name='';
                              this.validateClientNew.mail='';
                              this.validateClientNew.password='';
                              this.validateClientNew.password_confirm='';
                              this.validateClientNew.phone='';
                            }).catch((err)=>{
                              this.accountLoading=false
                              this.$store.commit('loginFailed',{err})
                            })
                         }
                       }).catch((err)=>{
                              if(err.response.status==422){
                              this.accountLoading=false
                             
                              for(let i in err.response.data){
                                this.$toastr.w(err.response.data[i][0])
                                  
                                }
                          }else{
                            this.$toastr.e(err.response.statusText)
                          }
                       })

                       
                    } else {
                        this.$toastr.e("All Fields are required!");
                    }
                })
    },

    login:function(name){
      this.$refs[name].validate((valid)=>{
        if(valid){
          this.loginLoading=true
          let user ={
            email:this.validateClient.mail,
            password:this.validateClient.password
          }
          login(user).then((res)=>{
              this.loginLoading=false
              this.$store.commit('loginSuccess',res)
              this.$toastr.s('Login Successfull!')
              this.validateClient.mail='';
              this.validateClient.password='';
          }).catch((err)=>{
              this.loginLoading=false
              this.$store.commit('loginFailed',{err})
          })
        }else{
           this.$toastr.e('Login Failed!')
        }
      })
    },

    setLoaded: function() {
                     
        this.loaded = true;
          window.paypal
            .Buttons({
            createOrder: (data, actions) => {
            return actions.order.create({
            purchase_units: [
                {
                  description: 'Payment For ' + this.contentType,
                   amount: {
                   currency_code: "USD",
                    value:this.totalAmount
                                      }
                                    }
                                  ]
                                });
                              },
            onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paypalData=data;
            this.paypalOrder =order
            this.paidFor = true;

            console.log(order);
            console.log(data)
              },
            onError: err => {
             console.log(err);
                    }
                  })
              .render(this.$refs.paypal);

    },

    handleFormatError (file) {
      this.$Notice.warning({
      title: 'The file format is incorrect',
      desc: 'File format of ' + file.name + ' is incorrect, please select pdf.'
                });
   },

   handleSuccess (res, file) {
      this.upload =res;
   },

   handleError(res,file){
      console.log(file)
      this.$Notice.warning({
      title: 'The file format is incorrect',
      desc: `${file.errors.file.length ? file.errors.file[0] : 'OOPS! Something went wrong!'}`
        });
    },

    handleMaxSize (file) {
      this.$Notice.warning({
      title: 'Exceeding file size limit',
      desc: 'File  ' + file.name + ' is too large, no more than 3M.'
      });
    },

  }
}
</script>

<style lang="scss">
    .order-section{
      .card{
        
      }
    }

    #phone-country{
      height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 14px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    }

    @media screen and (min-width: 768px){
      .order-section .card .card-header.d-none{
        display: block !important;
      }
    }
</style>