<template>
  <div class="card">
    
        <div class="card-header bg-white">
                                    <h4>Tell Us More About Your Content</h4>
        </div>
                                
        <div class="card-body">
                                    
                                    <div class="editor">
                                    <editor
                       
                                    api-key="no-api-key"
                                    v-model="instructions"
                                    :init="{
                                        height: 250,
                                        menubar: false,
                                        plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                        'undo redo | formatselect | link|bold italic underline | code| \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent '
                                    }"
                                        />
                                </div>
        </div> 
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
export default {
    name:'instructions-box',
    data:function(){
        return{
            instructions:'',
        }
    },
    components:{
        'editor': Editor,
    }

}
</script>

<style>

</style>