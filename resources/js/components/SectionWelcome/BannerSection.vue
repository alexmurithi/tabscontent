<template>
   <div class="banner" >
    <div class="container">
      <h1 class="font-weight-semibold">Professional Content Writings Services.
</h1>
      <h6 class="font-weight-normal text-muted pb-3 py-2">
        We have got your back! We are professionals who understand exactly what is needed to have your website top-ranked on Google searches. 

        </h6>
      <div>
        <!-- <button class="btn btn-opacity-light mr-1">Get started</button> -->
        <!-- <button class="btn btn-opacity-success ml-1">Order Content Now!</button> -->
      </div>
      <!-- <img src="images/Group171.svg" alt="" class="img-fluid"> -->
    </div>
     <section class="contact-us " id="order-form">
        <div class="contact-us-bgimage grid-margin" >
            <div class="container"> 
              

                  <div class="custom-order-section" id="custom-order-section">
                    <div class="card">
                      <div class="card-header">
                        <div class="row">
                          <h4 class="mx-auto">Get Started On Your Custom Content Now!</h4>
                        </div>
                      </div>
                      <div class="card-body">
                         <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Content Type</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Select v-model="content.type" >
                             <Option :value="content.type">Web Content</Option>
                             <Option :value="content.type">Blog or Article</Option>
                             <Option :value="content.type">Press Release</Option>
                           </Select>
                       </div>
                         </div>
                          <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Language</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Select v-model="content.type" >
                             <Option :value="content.type">English (US)</Option>
                             <Option :value="content.type">English (Uk)</Option>
                           </Select>
                       </div>
                         </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Quality</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9 text-left" id="input">
                           <!-- <Input :value="content.quality + ' Star'">
                             
                              <span slot="prepend" @click="decrementQuality" style="cursor:pointer">
                                  <Icon type="md-remove-circle" />
                                </span>
                              <span slot="append" @click="incrementQuality" style="cursor:pointer">
                                 <Icon type="md-add-circle" />
                              </span>
                          </Input> -->
                          <b-form-group>
                            <b-form-radio-group
                              id="urgency"
                              v-model="content.quality"
                              :options="quality"
                              
                              buttons
                              button-variant="outline-primary"
                              size="sm"
                              name="quality"
                            ></b-form-radio-group>
                          </b-form-group>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Word Count</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                            <b-input-group size="sm">
                              <b-input-group-prepend >
                                <b-button variant="primary" @click="decrementWords"><Icon type="md-remove-circle" /></b-button>
                              </b-input-group-prepend>

                              <b-form-input 
                              type="number" 
                              min="100" max="6000"
                              style="text-align:center;" 
                              step="100"
                              pattern="[0-9]"
              
                              v-model="content.word_count">
                              </b-form-input>

                              <b-input-group-append >
                                <b-button variant="primary" @click="incrementWords"><Icon type="md-add-circle" />
                                </b-button>
                              </b-input-group-append>
                            </b-input-group>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">No. of Content</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <b-input-group size="sm">
                              <b-input-group-prepend>
                                <b-button variant="primary" @click="decrementContentNo">
                                  <Icon type="md-remove-circle" />
                                  </b-button>
                              </b-input-group-prepend>

                              <b-form-input 
                              type="number"
                              min="1" max="1000"
                              style="text-align:center"
                              v-model="content.number">

                              </b-form-input>

                              <b-input-group-append>
                                <b-button variant="primary" @click="incrementContentNo">
                                  <Icon type="md-add-circle" />
                                  </b-button>
                              
                              </b-input-group-append>
                            </b-input-group>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Urgency</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9 text-left">
                              
                          <b-form-group>
                            <b-form-radio-group
                              id="urgency"
                              v-model="content.urgency"
                              :options="urgency"
                              buttons
                              button-variant="outline-primary"
                              size="sm"
                              name="urgency"
                            ></b-form-radio-group>
                          </b-form-group>
                       </div>
                    </div>
                      </div>
                      <div class="card-footer">
                         <div class="form-group row" >
              
                          <div class="col-12 col-sm-12 col-md-5 col-lg-5 order-total"> 
                            Order Total <span>${{getTotalPrice}}</span>
                          </div>
                          <div class="col-12 col-sm-12 md-7 col-lg-7">
                            <Button type="warning" size="large"><Icon type="md-cart" /> Order Now</Button>
                          </div>
                       
                    </div>
                      </div>
                    </div>
                    

                    

                    

                  </div>
             
            </div>

       </div>
      </section>
  </div>
  
</template>

<script>
export default {
  name:'banner-section',

  data:function(){
    return{
      content:{
        quality:{"star":2,"amount":0},
        type:'Web Page',
        word_count:100,
        urgency:{"time":24,"amount":0},
        number:1,
        price_per_word:0.04,

        totalPrice:0
      },
      
        urgency: [
          { text: '24 Hours', value: {"time":24,"amount":0} },
          { text: '12 Hours', value: {"time":12,"amount":2}},
          { text: '8 Hours', value: {"time":8,"amount":5}},
          { text: '6 Hours', value: {"time":6,"amount":9} }
        ],
        quality:[
          { text: '2 Star', value: {"star":2,"amount":0}},
          { text: '3 Star', value: {"star":3,"amount":2}},
          { text: '4 Star', value: {"star":4,"amount":3} },
          { text: '5 Star', value: {"star":5,"amount":4} },
          
        ]
    }
  },

  watch:{
    'content.word_count':function(newVal, oldVal){
       this.content.word_count =parseInt(newVal)
       
    },

    'content.number':function(newVal,oldVal){
      this.content.number =parseInt(newVal)
    },

    
    
  },

  methods:{
      incrementQuality:function(){
       if(this.content.quality!=5){
        
       }
      },

      parseThisInt(words){
        console.log(parseInt(words))
      },

      decrementQuality:function(){
        if(this.quality!=3){
          
        }
      },

      incrementWords:function(){
        if(this.content.word_count<=6000){
          this.content.word_count =this.content.word_count+=100
        }
      },

      decrementWords:function(){
         if(this.content.word_count!=100){
          this.content.word_count =this.content.word_count+-100
        }
      },

      incrementContentNo:function(){
        this.content.number =this.content.number+=1
      },

      decrementContentNo:function(){
        if(this.content.number!=1){
          this.content.number =this.content.number-=1
        }
      },

      
  },
  computed:{
    getTotalPrice:function(){
     return this.content.totalPrice
     =parseFloat((this.content.word_count*this.content.price_per_word*this.content.number)
     +
     this.content.quality.amount
     +
     this.content.urgency.amount).toFixed(2)
    },


    
  }
}
</script>

<style scoped lang="scss">
 #custom-order-section.custom-order-section{
   .card{
      background: transparent;
      border-radius: 0;
      border:2px solid #000;

      .card-body{
        
      }

      .card-header{
        border-bottom: 2px solid #000;
      }

      .card-footer{
        border-top:2px solid #000;
        .order-total{
         font-size: 25px;
        
          span{
            color: #ff6000;
            
            font-weight: 900;
          }
        }
      }
   }
 }

 
  
</style>