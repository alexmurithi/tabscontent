<template>
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
                             <Option 
                             v-for="(contentType,index)
                              in content_types" 
                              :value="contentType.id"
                              :key="index">
                              {{contentType.type}}
                              </Option>
                             
                           </Select>
                       </div>
                         </div>
                          <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Language</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Select v-model="content.language" >
                             <Option 
                             v-for="(language,index) in languages"
                             :key="index"
                             :value="language.id">
                             {{language.name}}
                             </Option>
                             
                           </Select>
                       </div>
                         </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Quality</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9 text-left" id="input">
                          
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
                            <router-link
                             :to="{
                               path:'/order/details',
                               query:{
                                 content_type:content.type,
                                 language:content.language,
                                 quality:content.quality.star,
                                 word_count:content.word_count,
                                 no_of_content:content.number,
                                 urgency:content.urgency.time,
                                 total_price:content.totalPrice
                                 }
                               }">
                            <Button type="warning" size="large"><Icon type="md-cart" /> Order Now</Button>
                            </router-link>
                          </div>
                       
                    </div>
                      </div>
                    </div>
                    

                    

                    

                  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name:'banner-section',

  mounted:function(){
    
    this.$store.dispatch('contentTypes');
    this.$store.dispatch('languages');
  },

  data:function(){
    return{
      content:{
        quality:{"star":3,"amount":0,"per_words":100},
        type:1,
        language:1,
        word_count:300,
        urgency:{"time":72,"amount":0},
        number:1,
        price_per_word:0.035,

        totalPrice:0
      },
      
        urgency: [
          { text: '3 Days', value: {"time":72,"amount":0} },
          { text: '2 Days', value: {"time":48,"amount":2}},
          { text: '24 Hours', value: {"time":24,"amount":4}},
          { text: '12 Hours', value: {"time":12,"amount":6} },
          { text: '8 Hours', value: {"time":8,"amount":8} },
          { text: '4 Hours', value: {"time":4,"amount":10} }
        ],
        quality:[
          
          { text: '3 Star', value: {"star":3,"amount":0,"per_words":100}},
          { text: '4 Star', value: {"star":4,"amount":1,"per_words":100} },
          { text: '5 Star', value: {"star":5,"amount":2,"per_words":100} },
          
        ]
    }
  },

  watch:{
    'content.word_count':function(newVal, oldVal){
       this.content.word_count =parseInt(newVal)
       if(newVal>6000){
          this.$set(this.content, 'word_count', oldVal)
         this.$toastr.e("Sorry Maximum Word Count is 6,000")
       }else if(newVal<100){
         this.$set(this.content, 'word_count', oldVal)
         this.$toastr.e("Sorry Minimum Word Count is 100")
       }


       
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

      orderThis:function(){
         this.$router.push({path:'/order/details'})
      },

      

      
  },
  computed:{
    ...mapGetters([
      'orderFormTotalPrice',
      'content_types',
      'languages',
    ]),

    getTotalPrice:function(){
     return this.content.totalPrice =
     parseFloat(
       (this.content.word_count*this.content.price_per_word*this.content.number)
       +((this.content.word_count/this.content.quality.per_words)*(this.content.quality.amount))
       +this.content.urgency.amount
     ).toFixed(2)
    //  =parseFloat((this.content.word_count*this.content.price_per_word*this.content.number)
    //  +
    //  (this.content.quality.amount*(this.content.word_count/this.quality.per_words))
    //  +
    //  this.content.urgency.amount).toFixed(2)

    
    },

    


    
  }
}
</script>

<style>

</style>