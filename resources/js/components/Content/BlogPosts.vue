<template>
  <div>
     
      <section id="packages" class="blog-section">
                            <div class="package_accordin">
                              <Collapse v-model="value1">
                                  <Panel name="1">
                                      Basic Packages
                                      <div slot="content">
                                        <div class="row packages_list py-2">
                                          <p class="px-2 pb-5">
                                            Below are some of our Begginer Packages. Select the best package that suites your needs! 
                                            Or switch to our custom order below
                                            </p>
                                          <div class="col-md-4">
                                             <div class="card basic_package">

                                               <!--BLOG BASIC CARD HEADER-->
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                                </div>
                                                 <!--END BLOG BASIC CARD HEADER-->

                                                 <!-- START BLOG POST CARD BODY-->
                                               <div class="card-body">

                                                   <!-- BLOG POST INPUTS-->
                                                   
                                                   <div class="inputs">
                                                      <Input  :value="basicPackage.quality_1 + ' '+'Star'" name="basic">
                                                        <span slot="prepend" @click="removePrice_1">
                                                          <Icon type="md-remove-circle" />
                                                        </span>
                                                        <span slot="append" @click="addPrice_1">
                                                          <Icon type="md-add-circle" />
                                                        </span>
                                                        
                                                      </Input>
                                                   </div>
                                                    <!--END BLOG POST INPUTS-->
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>

                                                </div>

                                                <!-- END BLOG POST CARD BODY-->

                                                <div class="card-footer text-center">
                                                   <Button type="warning" >
                                                     <router-link :to="{path:'/content/make-order',query:{
                                                         type:'blog-post',
                                                         package:'basic',
                                                         words:this.basicPackage.words,
                                                         quality:this.basicPackage.quality_1,
                                                         amount:this.basicPackage.price_1,
                                                         urgency:'48hours'
                                                         }}">
                                                       <Icon type="md-cart" />
                                                     Order Now
                                                     </router-link>
                                                     
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   ${{Number(basicPackage.price_1).toFixed(2)}}
                                                </div>
                                                <div class="words-badge">100 Words</div>
                                               </div>
                                             </div>
                                          </div>

                                          <!-- <div class="col-md-4">
                                             <div class="card basic_package">
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                               </div>

                                               <div class="card-body">
                                                   <div class="inputs">
                                                      <Input  :value="qualityStar + ' '+'Star'" name="basic">
                                                        <span slot="prepend">
                                                          <Icon type="md-remove-circle" />
                                                          </span>
                                                        <span slot="append" @click="addStar">
                                                          <Icon type="md-add-circle" />
                                                          </span>
                                                        
                                                    </Input>
                                                   </div>
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>
                                                </div>
                                                <div class="card-footer text-center">
                                                   <Button type="warning">
                                                     <Icon type="md-cart" />
                                                     Order Now
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   $6.50
                                                </div>
                                                <div class="words-badge">200 Words</div>
                                               </div>
                                             </div>
                                          </div> -->

                                          <!-- <div class="col-md-4">
                                             <div class="card basic_package">
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                               </div>

                                               <div class="card-body">
                                                   <div class="inputs">
                                                      <Input  :value="qualityStar + ' '+'Star'" name="basic">
                                                        <span slot="prepend">
                                                          <Icon type="md-remove-circle" />
                                                          </span>
                                                        <span slot="append" @click="addStar">
                                                          <Icon type="md-add-circle" />
                                                          </span>
                                                        
                                                    </Input>
                                                   </div>
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>
                                                </div>
                                                <div class="card-footer text-center">
                                                   <Button type="warning">
                                                     <Icon type="md-cart" />
                                                     Order Now
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   $9.75
                                                </div>
                                                <div class="words-badge">300 Words</div>
                                               </div>
                                             </div>
                                          </div> -->

                                        </div>
                                      </div>
                                  </Panel>
                                  <Panel name="2">
                                      Intermediate Packages
                                      <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                                  </Panel>
                                  <Panel name="3">
                                     Expert Packages
                                      <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                                  </Panel>
                                </Collapse>
                            </div>
      </section>

                           <section class="custom-blog" style=" background: url(/assets/img/pattern-bg.jpg);">
                              <div class="custom-order clearfix" id="myorder">
                                 <h3>Get Started Now!
                                   <span>Order Custom Blog Post Content</span>
                                 </h3>

                                 <div class="row">
                                   <div class="col-md-7 col-sm-7">
                                     <div class="custom-order-form-blog">
                                         <div class="desired-package">
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Quality</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input >
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Word Count</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input>
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">No. of Posts</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input>
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Urgency</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <label ><Checkbox  name="urgency">24 Hours</Checkbox></label>
                                               <label ><Checkbox  name="urgency">12 Hours</Checkbox></label>
                                               <label ><Checkbox  name="urgency">8 Hours</Checkbox></label>
                                                <label ><Checkbox  name="urgency">48 Hours</Checkbox></label>
                                             </div>
                                           </div>
                                           <div class="row bottom-order clearfix">
                                             <div class="col-md-6 float-left">
                                               <div class="order-total">
                                                 Total:
                                                 <span id="custom-output">$115.22</span>
                                               </div>
                                             </div>
                                             <div class="col-md-6 float-right">
                                               <div class="order-btn">
                                                 <Button type="warning" class="btn-order"><Icon type="md-cart" /> Order Now</Button>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                     </div>
                                   </div>
                                   <div class="col-md-5 col-sm-5"></div>
                                 </div>
                              </div>
                           </section>
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