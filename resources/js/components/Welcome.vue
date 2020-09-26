<template>
  <div>
    
    <header-section/>
    
    <banner-section/>

    <content-section/>

    <features/>

    <landing-footer/>
    
  </div>
</template>

<script>
import HeaderSection from './SectionWelcome/HeaderSection.vue';
import BannerSection from './SectionWelcome/BannerSection.vue';
import ContentSection from './SectionWelcome/ContentSection.vue';
import Features from './SectionWelcome/Features.vue';
import LandingFooter from './SectionWelcome/Footer.vue';
export default {
   name:'welcome',
   components:{
     HeaderSection,
     BannerSection,
     ContentSection,
     Features,
     LandingFooter,
   }
}
</script>

<style scoped>

   </style>
