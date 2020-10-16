<template>
    
            <div class="content-details py-5">
                <div class="row clearfix">
                    <div class="col-12 col-md-9">
                        <div class="details-card">
                            
                            <!-- ADVANCED DETAILS BEGIN HERE -->
                              <div class="advanced_details py-4">
                                  <div class="row">
                                      <div class="col-12 div col-md-12">
                                          <Collapse accordin v-model="adv_details" id="adv_details">
                                            <Panel name="1">
                                               Advanced Details
                                               <div slot="content">
                                                   <div class="form-group row">
                                                       <div class="col-12 col-md-4">
                                                           <label for="keyword">Keyword</label>
                                                           <Input v-model="keyword" placeholder="Enter Keyword"></Input>
                                                       </div>
                                                       <div class="col-12 col-md-4 d-flex flex-column">
                                                           <label for="density">Density</label>
                                                           <div class="inputs d-flex flex-row justify-content-between">
                                                             <InputNumber :max="10" :min="1" :step="1" v-model="density_min" placeholder="Min"></InputNumber>
                                                             <InputNumber :max="10" :min="1" :step="1" v-model="density_max" placeholder="Max"></InputNumber>
                                                           </div>
                                                           
                                        
                                                           
                                                       </div>

                                                       <div class="col-12 col-md-4 pt-4">
                                                           <Button type="warning" size="large" @click.prevent="addKeyword(keyword,density)">Add Keyword</Button>
                                                           
                                                       </div>
                                                       
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12">
                                                           <Tag  color="primary" 
                                                           closable v-for="(keyword,index) in orderKeywords"
                                                           @on-close="deleteKeyword(keyword,index)" 
                                                           :key="index">
                                                           <span style="font-weight:bold"> {{keyword.keyword}}</span> 
                                                           <span style="font-weight:bold;"> ({{keyword.density}}) </span>
                                                           </Tag>
                                                           
                                                           
                                                       </div>
                                                       
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12 col-md-6">
                                                           <label for="">Meta Description 
                                                               <Tooltip max-width="200">
                                                                  <Icon type="md-help-circle" />
                                                                   <div slot="content">
                                                                       The meta description is an HTML attribute that provides a brief summary of a web page. Search engines such as Google often display the meta description in search results, which can influence click-through rates.
                                                                   </div>
                                                               </Tooltip>
                                                           
                                                           </label>
                                                           <b-form-radio-group
                                                            v-model="meta_checkbox"
                                                            :options="meta_options"
                                                            name="meta_checkbox"
                                                            stacked
                                                        ></b-form-radio-group>
                                                       </div>

                                                       <div class="col-12 col-md-6">
                                                           <label for="">Royatly-free images 
                                                               <Tooltip max-width="200">
                                                                  <Icon type="md-help-circle" />
                                                                   <div slot="content">
                                                                       The meta description is an HTML attribute that provides a brief summary of a web page. Search engines such as Google often display the meta description in search results, which can influence click-through rates.
                                                                   </div>
                                                               </Tooltip>
                                                               </label>
                                                           <b-form-radio-group
                                                            v-model="free_images_checkbox"
                                                            :options="free_images_options"
                                                            name="free_imagesCheckbox"
                                                            stacked
                                                        ></b-form-radio-group>
                                                       </div>
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12 col-md-6">
                                                           <label for="category">Category</label>
                                                           <Select>
                                                               <Option>Tourism</Option>
                                                           </Select>
                                                       </div>

                                                       <div class="col-12 col-md-6">
                                                           <label for="category">Vocabulary Type</label>
                                                           <Select>
                                                               <Option>Tourism</Option>
                                                           </Select>
                                                       </div>
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12 col-md-6">
                                                           <label for="target-audience">Target Audience</label>
                                                           <Select>
                                                               <Option>Tourism</Option>
                                                           </Select>
                                                       </div>
                                                       <div class="col-12 col-md-6">
                                                           <label for="target-audience">Grammatical Person</label>
                                                           <Select>
                                                               <Option>Tourism</Option>
                                                           </Select>
                                                       </div>
                                                   </div>
                                               </div>
                                            </Panel>
                                          </Collapse>
                                      </div>
                                  </div>
                              </div>
                            <!-- ADVANCED DETAILS END HERE-->

                           

                        </div>
                    </div>

                    <div class="col-12 col-md-3">
                        <!-- ORDER SUMMARY BEGINS HERE-->
                       <div class="summary_sidebar_container">
                          <div class="sidebar_pricebox">
                            <div class="row">
                                <div class="col-12 text-center">ORDER SUMMARY</div>
                            </div>
                            <div class="row p-2 border-bottom">
                                <div class="col-5 text-left">Urgency</div>
                                <div class="col-7 text-right">48 Hours</div>
                            </div>
                            <div class="row my-2" style="background-color: #fbeccd;font-weight: bold;color: #f9b000;font-size: 42px;">
                                <div class="col-12 text-center">
                                    $<span>20</span>
                                </div>
                            </div>
                            <div class="row my-4">
                                <div class="col-12 text-center px-4">
                                    <Button type="warning" size="large" long>Continue</Button>
                                </div>
                            </div>
                          </div>
                       </div>
                        <!-- ORDER SUMMARRY ENDS HERE -->
                    </div>
                </div>
            </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name:'blog-posts',
 
  data:function(){
    return{
      value1:'1',

      basicPackage:{
        quality_1:3,
        price_1:3.25,
        words:100,
        increment_quality:2.2
      }
     
    }
  },

 
  methods:{
  addPrice_1:function(){
    if(this.basicPackage.quality_1!=5){
      this.basicPackage.quality_1++
      this.basicPackage.price_1=this.basicPackage.price_1+=this.basicPackage.increment_quality
    }
    
    
  },
  removePrice_1:function(){
    if(this.basicPackage.quality_1!=3){
      this.basicPackage.quality_1--
      this.basicPackage.price_1=this.basicPackage.price_1-=this.basicPackage.increment_quality
    }
  }

  },
  computed:{
    ...mapGetters([
      'blogBasics'
    ]),


  }
}
</script>

<style>

</style>