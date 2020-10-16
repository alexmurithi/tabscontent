<template>
   <div class="banner" >
    <div class="container">
      <h1 class="font-weight-semibold">Professional Content Writings Services.
</h1>
      <h6 class="font-weight-normal text-muted pb-3 py-2">
        We have got your back! We are professionals who understand exactly what is needed to have your website top-ranked on Google searches. 

        </h6>
      <!-- <div>
        <button class="btn btn-opacity-light mr-1">Get started</button>
        <button class="btn btn-opacity-success ml-1">Order Content Now!</button>
      </div>
      <img src="images/Group171.svg" alt="" class="img-fluid"> -->
    </div>
     <section class="contact-us " id="order-form">
        <div class="contact-us-bgimage grid-margin" >
            <div class="container"> 
              <banner-order-form/> 
            </div>

       </div>
      </section>
  </div>
  
</template>

<script>
import BannerOrderForm from '../Content/Orders/components/BannerOrderForm.vue';
export default {
  name:"banner-section",
  components:{
    BannerOrderForm,
  }
}
</script>

<style scoped lang="scss">

 
  
</style>