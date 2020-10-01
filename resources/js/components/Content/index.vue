<template>
  <div>
     <NavBar/> 
    
      <Content :style="{padding: '50px 0px 0px', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1" theme="light" width="auto">
                                <MenuGroup title="Content Writing Services">
                                  <MenuItem name="1">
                                      <Icon type="md-document" />
                                      Blog Posts
                                  </MenuItem>
                                  <MenuItem name="2">
                                      <Icon type="md-chatbubbles" />
                                      Articles
                                  </MenuItem>
                                  <MenuItem name="3">
                                      <Icon type="md-chatbubbles" />
                                     Copy Writing
                                  </MenuItem>
                                  <MenuItem name="4">
                                      <Icon type="md-chatbubbles" />
                                      Product Description
                                  </MenuItem>
                                  <MenuItem name="4">
                                      <Icon type="md-chatbubbles" />
                                      SEO
                                  </MenuItem>
                                </MenuGroup>
                                
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                          <router-view/>
                          
                        </Content>
                    </Layout>
      </Content>
  </div>
</template>

<script>

 import NavBar from '../SectionWelcome/HeaderSection.vue';
export default {
  mounted(){
    this.$store.dispatch('blogBasics');
  },
  name:'content-index',

   components:{
    NavBar
  },

  
}
</script>

<style scoped lang="scss">
  
   

  .custom-blog{
    padding: 10px;
   
    border: 1px solid #a8a8a8;;
    background: no-repeat;
   
    & #myorder h3{
     color: #000;
     font-size: 32px;
     & span{
       color: #ff6000;
     }
    }
    
  }
  .custom-order-form-blog{
    background: #eee;
    border:1px solid #a8a8a8;
    padding: 15px ;

    & .bottom-order{
          background: #fff;
          padding: 15px 20px;
          border-top: 2px solid #142f56;
          display: block;

          & .order-btn{
            & .btn-order{
              font-size: 21px;
            }
          }

          & .order-total{
            color: #374e7d;
          font-size: 20px;

          & #custom-output{
            color: #ff6000;
          font-size: 25px;
          font-weight: 900;
          }
          
          }
    }
  }
</style>