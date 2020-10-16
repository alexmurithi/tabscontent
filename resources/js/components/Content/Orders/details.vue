<template>
  <div>
    <navbar/>
    <section id="order-details">
        <div class="container">
            <div class="steps pt-2 clearfix">
                <div class="row" >
                    <div class="col-12">
                        <Steps :current="orderFormStep">
                            <Step title="Content Details">
                                
                            </Step>
                            <Step title="Client Details"></Step>
                            <Step title="Order Details"></Step>
                            <Step title="Complete Order"></Step>
                        </Steps>
                    </div>
                </div>
            </div>

            <div class="content-details py-2" v-show="orderFormStep==0" >
                <div class="row clearfix">
                    <div class="col-12 col-md-9">
                        <div class="details-card">
                            <Instructions/>

                             <advanced-details/>
                            
                        </div>

                        
                    </div>
                    <div class="col-12 col-md-3">
                      <order-summary/>

                     
                    </div>
                </div>
            </div>

            <div class="account_details py-4" v-show="orderFormStep==1">
                <div class="row">
                    <div class="col-12 col-md-12">
                       <account-user/>
                    </div>
                </div>
            </div>

        </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import navbar from '../../SectionWelcome/HeaderSection.vue';
import Instructions from '../Orders/components/InstructionsBox.vue';
import OrderSummary from '../Orders/components/OrderSummary.vue';
import AdvancedDetails from '../Orders/components/AdvancedDetails.vue';
import AccountUser from '../../Auth/login.vue';


export default {
  name:'order-details',
  mounted(){

  },
  created(){

  },
  data:function(){
      return {
      }
  },
  components:{
      navbar,
      OrderSummary,
      Instructions,
      AdvancedDetails,
      AccountUser,
  },

  computed:{
    ...mapGetters([
        'orderFormStep'
    ]),
  },
  
  methods:{
     
  }
}
</script>

<style scoped lang="scss">

  .steps{
      width:100%;
      padding: 10px;
      background: white;
      border:2px solid #E7E4EA
  }
  
  .summary_sidebar_container, .expectations{
    border: 2px solid #E7E4EA;
    background-color: white;
    
    overflow: hidden;

    .sidebar_pricebox{
       
    }
  }

</style>