<template>
  <div>
    <header-section/>
    
    <banner-section/>

    <content-section/>
    
  </div>
</template>

<script>
import HeaderSection from './SectionWelcome/HeaderSection.vue';
import BannerSection from './SectionWelcome/BannerSection.vue';
import ContentSection from './SectionWelcome/ContentSection.vue';
export default {
   name:'welcome',
   components:{
     HeaderSection,
     BannerSection,
     ContentSection
   }
}
</script>

<style>

</style>