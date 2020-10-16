<template>
  <div class="summary_sidebar_container">
                          <div class="sidebar_pricebox">
                            <div class="row border-bottom">
                                <div class="col-12 ">
                                   <h5 class="text-center">ORDER SUMMARY</h5>
                                </div>
                            </div>
                            <div class="row p-2 border-bottom">
                                <div class="col-9 text-left">No. of Content</div>
                                <div class="col-3 text-right">
                                   {{content_no}}
                                </div>
                            </div>
                            <div class="row p-2 border-bottom">
                                <div class="col-9 px-2 text-left">Word Count</div>
                                <div class="col-3 px-2 text-right">
                                    {{word_count}}
                                </div>
                            </div>
                            <div class="row p-2 border-bottom">
                                <div class="col-6 text-left">Quality</div>
                                <div class="col-6 text-right">
                                    {{content.quality}} Star
                                </div>
                            </div>
                            <div class="row p-2 border-bottom">
                                <div class="col-5 text-left">Urgency</div>
                                <div class="col-7 text-right">
                                    {{content.urgency}} Hours
                                </div>
                            </div>
                            <div class="row my-2" style="background-color: #fbeccd;font-weight: bold;color: #f9b000;font-size: 42px;">
                                <div class="col-12 text-center">
                                    $<span>{{content.totalPrice}}</span>
                                </div>
                            </div>
                            <div class="row my-4">
                                <div class="col-12 text-center px-4">
                                    <Button type="primary" size="large" long @click="continueStep">Continue</Button>
                                </div>
                            </div>
                          </div>
                       </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
 name:'order-summary',

 mounted:function(){
     this.content.totalPrice =this.$route.query.total_price
     this.content.urgency =this.$route.query.urgency
     this.word_count =this.$route.query.word_count
     this.content_no =this.$route.query.no_of_content
     this.content.quality =this.$route.query.quality
 },

 props:['no_of_content','total_price','urgency'],

 data:function(){
     return{
         content:{
           totalPrice:0,
           word_count:0,
           content_no:0,
           urgency:0,
           quality:0,
         }
      
     }
 },

 computed:{
   ...mapGetters([
       'orderFormStep'
   ]),
 },

 methods:{
     continueStep:function(){
         this.$store.commit('nextOrderFormStep',this.orderFormStep)
     }
 }
}
</script>

<style>

</style>