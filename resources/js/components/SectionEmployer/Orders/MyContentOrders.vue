<template>
  <div class="container-fluid">
      <Row :gutter="32">
          <Col span="24">
             <div style="background:#eee;padding: 20px">
                    <Card :bordered="false">
                        <p slot="title">My Orders</p>
                        <div v-if="userContOrders && userContOrders.length">
                          
                        <Table border :columns="fields" :data="data" >
                            
                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                                <Button type="error" size="small" @click="remove(index)">Delete</Button>
                            </template>
                        </Table>

                       <Divider dashed/>
                         <Page :total="rows" :page-size-opts="[2,2]" :current="1"/>
                       
                        </div>


                         <div class="mx-auto p-2" v-else>
                               <Spin fix size="large"></Spin>
                              
                          </div>
                        
                    
                    </Card>
                 </div>
          </Col>
      </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'my-content-orders',
   created:function(){
       this.$store.dispatch('userContentOrders');
       
    },
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items:[],
        fields: [
            {
            title:'Order Id',
            key:'order_id'
            },
            {
                title:'Content Type',
                key:'content_type'
            },
            {
                title:'WorkFlow Type',
                key:'workflow_type'
            },
            {
                title:'Language',
                key:'language'
            },
            {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
            }
        ],
        
      }
    },
    computed: {
      ...mapGetters(['userContOrders']),
      rows() {
        return this.userContOrders.length
      },
      data(){
          
          return this.userContOrders
      }
    }

}
</script>

<style>

</style>