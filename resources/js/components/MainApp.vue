<template>
   
       <router-view/>
  
  
</template>

<script>
    export default {
      name:'main-app',
        created() {
            this.$store.dispatch('getLanguages');
            this.$store.dispatch('getUsers');
            this.$store.dispatch('getContentTypes');
            this.$store.dispatch('workFlows');
            this.$store.dispatch('wordsCount');
            this.$store.dispatch('deliveryTime');
            this.$store.dispatch('contentPricing');
            

        }
    }
</script>
