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
     <section class="contact-us " id="contact-section">
        <div class="contact-us-bgimage grid-margin" >
            <div class="container"> 
              

                  <div class="custom-order-section" id="custom-order-section">
                    <div class="card">
                      <div class="card-header">
                        <div class="row">
                          <h4 class="mx-auto">Get Started On Your Custom Content</h4>
                        </div>
                      </div>
                      <div class="card-body">
                         <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Content Type</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Select v-model="content.type" >
                             <Option :value="content.type">Web Page</Option>
                             <Option :value="content.type">Blog or Article</Option>
                           </Select>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Quality</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9" id="input">
                           <Input :value="content.quality + ' Star'">
                              <span slot="prepend">
                                  <Icon type="md-remove-circle" />
                                </span>
                              <span slot="append">
                                 <Icon type="md-add-circle" />
                              </span>
                          </Input>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Word Count</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Input v-model="content.word_count">
                              <span slot="prepend">
                                  <Icon type="md-remove-circle" />
                                </span>
                              <span slot="append">
                                 <Icon type="md-add-circle" />
                              </span>
                           </Input>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">No. of Content</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                           <Input v-model="content.number" number>
                             <span slot="prepend">
                                  <Icon type="md-remove-circle" />
                                </span>
                              <span slot="append">
                                 <Icon type="md-add-circle" />
                              </span>
                           </Input>
                       </div>
                    </div>

                     <div class="form-group row">
                       <label for="" class="col-12 col-sm-12 col-md-3 col-lg-3">Urgency</label>
                       <div class="col-12 col-sm-12 col-md-9 col-lg-9 text-left">
                              
                                <Checkbox border name="urgency" v-model="content.urgency" :value="24">24 Hours</Checkbox>
                                <Checkbox border name="urgency" v-model="content.urgency" :value="12">12 Hours</Checkbox>
                                <Checkbox border name="urgency" v-model="content.urgency" :value="8">8 Hours</Checkbox>
                              
                          
                       </div>
                    </div>
                      </div>
                      <div class="card-footer">
                         <div class="form-group row" >
              
                          <div class="col-12 col-sm-12 col-md-5 col-lg-5 order-total"> 
                            Order Total <span>$3.75</span>
                          </div>
                          <div class="col-12 col-sm-12 md-7 col-lg-7">
                            <Button type="warning" size="large">Order Now</Button>
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
        quality:3,
        type:'Web Page',
        word_count:100,
        urgency:24,
        number:1
      },
    }
  },

  methods:{
      
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
         font-size: 35px;
        
          span{
            color: #ff6000;
            
            font-weight: 900;
          }
        }
      }
   }
 }

 
  
</style>