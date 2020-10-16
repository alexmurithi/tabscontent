<template>
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
                                                           <Button type="primary" size="large" @click.prevent="addKeyword(keyword,density_min,density_max)">Add Keyword</Button>
                                                           
                                                       </div>
                                                       
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12">
                                                           <Tag  color="primary" 
                                                           closable v-for="(keyword,index) in orderKeywords"
                                                           @on-close="deleteKeyword(keyword,index)" 
                                                           :key="index">
                                                           <span style="font-weight:bold"> {{keyword.keyword}}</span> 
                                                           <span style="font-weight:bold;"> ({{keyword.density_min}} - {{keyword.density_max}}) </span>
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
                                                           <Select v-model="content.category" filterable placeholder="Select Category">
                                                               <Option
                                                                 v-for="(category,index) in content_categories"
                                                                 :key="index"
                                                                 :value="category.id"
                                                                 
                                                               >
                                                                  {{category.name}}     
                                                               </Option>
                                                           </Select>
                                                       </div>

                                                       <div class="col-12 col-md-6">
                                                           <label for="vocabulary">Vocabulary Type</label>
                                                           <Select 
                                                           placeholder="Select Vocabulary Type"
                                                           v-model="content.vocabulary">
                                                               <Option
                                                                 v-for="(vocabulary,index) in content_vocabularies"
                                                                 :key="index"
                                                                 :value="vocabulary.id"
                                                               >
                                                                 {{vocabulary.type}}
                                                               </Option>
                                                           </Select>
                                                       </div>
                                                   </div>

                                                   <div class="form-group row">
                                                       <div class="col-12 col-md-6">
                                                           <label for="target-audience">Target Audience</label>
                                                           <Select 
                                                           v-model="content.audience" 
                                                           filterable
                                                           placeholder="Select Target Audience">
                                                               <Option
                                                                 v-for="(audience,index) in content_audiences"
                                                                 :key="index"
                                                                 :value="audience.id"
                                                               >
                                                                 {{audience.audience}}
                                                               </Option>
                                                           </Select>
                                                       </div>
                                                       <div class="col-12 col-md-6">
                                                           <label for="target-audience">Grammatical Person</label>
                                                           <Select 
                                                           v-model="content.grammatic_person"
                                                           placeholder="Select Grammatic Person"
                                                           filterable
                                                           >
                                                               <Option
                                                                 v-for="(person,index) in content_grammatic_people"
                                                                 :key="index"
                                                                 :value="person.id"
                                                               >
                                                                {{person.person}}
                                                               </Option>
                                                           </Select>
                                                       </div>
                                                   </div>
                                               </div>
                                            </Panel>
                                          </Collapse>
                                      </div>
                                  </div>
                              </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name:'advanced-details',

  mounted:function(){
      this.$store.dispatch('content_categories')
      this.$store.dispatch('content_audiences')
      this.$store.dispatch('content_vocabularies')
      this.$store.dispatch('content_grammatic_people')
  },

  

  data:function(){
      return{
    content:{
        category:0,
        audience:0,
        grammatic_person:0,
        vocabulary:0,
    },
     adv_details:'1',
     
     keyword:'',
     density_min:'',
     density_max:'',

     meta_checkbox:0,
     free_images_checkbox:0,
     meta_options:[
         {text:"Yes",value:1},
         {text:"No", value:0}
     ],
     free_images_options:[
      {text:"Yes",value:1},
      {text:"No",value:0}
     ]
      }
  },

  computed:{
      ...mapGetters([
        'orderKeywords',
        'content_categories',
        'content_audiences',
        'content_grammatic_people',
        'content_vocabularies'
    ]),
  },

  methods:{
      addKeyword:function(keyword,density_min,density_max){
       if(!this.keyword.trim()=="" && !this.density!==0){
          this.$store.commit('orderKeywords',{keyword,density_min,density_max})
          this.density_min=''
          this.density_max=''
          this.keyword=''
       }else{
           this.$toastr.w("Keword Cannot be Empty!")
       }
      
    
      
     },

     deleteKeyword:function(keyword,index){
      console.log("index: " +index)
     this.$store.commit('deleteKeyword',keyword)
     }
  }
}
</script>

<style>

</style>