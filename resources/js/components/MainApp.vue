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
            this.$store.dispatch('contentOrders');

            this.$store.dispatch('academicCategories');
            this.$store.dispatch('academicServices');
            this.$store.dispatch('academicLanguages');
            this.$store.dispatch('academicSpacing');
            this.$store.dispatch('academicPaperformats');
            this.$store.dispatch('academicUrgency');
            this.$store.dispatch('academicEdulevels');
           

        }
    }
</script>
