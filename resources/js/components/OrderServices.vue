<template>
  <div>
     <NavBar/> 
   <!-- <div class="container-fluid">
      <Row :gutter="32" style="padding-top:50px">
        <Col span="4">
              <Menu :theme="theme3" active-name="1">
                  <MenuGroup title="Web Content">
                      <MenuItem name="1">
                          <Icon type="md-document" />
                          Blog Posts
                      </MenuItem>
                      <MenuItem name="2">
                          <Icon type="md-chatbubbles" />
                          Articles
                      </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="统计分析">
                      <MenuItem name="3">
                          <Icon type="md-heart" />
                          Copy Writing
                      </MenuItem>
                      <MenuItem name="4">
                          <Icon type="md-leaf" />
                          流失用户
                      </MenuItem>
                  </MenuGroup>
              </Menu>
        </Col>
        <Col span="19" offset="1">
         <div id="accordion-packages">
             <Collapse v-model="value1" accordion>
              <Panel name="1" >
                  Entry Packages 
                            
                 <div slot="content">
                   <p class="py-4">
                     Below are some of our Entry Packages. Select the package that suites you best.
                     If you need to place a custom order, please use the custom order form provided below.
                   </p>
                   <div class="row">
                     <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$3.25</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$6.50</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$9.75</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                     
                   </div>
                 </div>
              </Panel>
              <Panel name="2">
                  Intermediate Package
                  
                   <div slot="content">
                   <p class="py-4">
                     Below are some of our Entry Packages. Select the package that suites you best.
                     If you need to place a custom order, please use the custom order form provided below.
                   </p>
                   <div class="row">
                     <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$3.25</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$6.50</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$9.75</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                     
                   </div>
                 </div>
              </Panel>
              <Panel name="3">
                  Standard Package
                   <div slot="content">
                   <p class="py-4">
                     Below are some of our Entry Packages. Select the package that suites you best.
                     If you need to place a custom order, please use the custom order form provided below.
                   </p>
                   <div class="row">
                     <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$3.25</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$6.50</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$9.75</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                     
                   </div>
                 </div>
              </Panel>

                <Panel name="4">
                  Premium Package
                   <div slot="content">
                   <p class="py-4">
                     Below are some of our Entry Packages. Select the package that suites you best.
                     If you need to place a custom order, please use the custom order form provided below.
                   </p>
                   <div class="row">
                     <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$3.25</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$6.50</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                       <div class="col col-md-4" >
                          <div class="card">
                            <div class="card-header">
                              <div class="float-left">
                                <p>1 Custom Blog Post</p>
                              </div>
                              <div class="float-right">
                                 <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                              </div>
                            </div>
                            <div class="card-body">
                               <div class="input-group mb-3">
                                  <div class="input-group-prepend" @click="removeStar">
                                    <span class="input-group-text"><Icon type="md-remove" /></span>
                                  </div>
                                  <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                  <div class="input-group-append" @click="addStar">
                                    <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                  </div>
                                </div>

                                <div>
                                  <ul>
                                    <li>Within 1 Business day</li>
                                    <li>100% Satistaftion Guaranteed</li>
                                  </ul>
                                </div>
                            </div>

                            <div class="card-footer bg-white">
                              <div class="float-left">
                                <h2>$9.75</h2>
                              </div>
                              <div class="float-right">
                                <Button type="warning">Order Now</Button>
                              </div>
                            </div>
                          </div>
                      </div>
                     
                   </div>
                 </div>
              </Panel>

             </Collapse>
         </div>
         
        </Col>
        
      </Row>
     
       
    </div> -->
    
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
                          
                            <!-- <div id="accordion-packages">

                              <Collapse v-model="value1" accordion>
                                <Panel name="1" >
                                    Entry Packages 
                                              
                                  <div slot="content">
                                    <p class="py-4">
                                      Below are some of our Entry Packages. Select the package that suites you best.
                                      If you need to place a custom order, please use the custom order form provided below.
                                    </p>
                                    <div class="row">
                                      <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" name="quality" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$3.25</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" name="quality" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$6.50</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$9.75</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                  </div>
                                </Panel>
                                <Panel name="2">
                                    Intermediate Package
                                    
                                    <div slot="content">
                                    <p class="py-4">
                                      Below are some of our Entry Packages. Select the package that suites you best.
                                      If you need to place a custom order, please use the custom order form provided below.
                                    </p>
                                    <div class="row">
                                      <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$3.25</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$6.50</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$9.75</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                  </div>
                                </Panel>
                                <Panel name="3">
                                    Standard Package
                                    <div slot="content">
                                    <p class="py-4">
                                      Below are some of our Entry Packages. Select the package that suites you best.
                                      If you need to place a custom order, please use the custom order form provided below.
                                    </p>
                                    <div class="row">
                                      <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$3.25</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$6.50</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$9.75</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                  </div>
                                </Panel>

                                  <Panel name="4">
                                    Premium Package
                                    <div slot="content">
                                    <p class="py-4">
                                      Below are some of our Entry Packages. Select the package that suites you best.
                                      If you need to place a custom order, please use the custom order form provided below.
                                    </p>
                                    <div class="row">
                                      <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">100 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$3.25</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">200 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$6.50</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-4" >
                                            <div class="card">
                                              <div class="card-header">
                                                <div class="float-left">
                                                  <p>1 Custom Blog Post</p>
                                                </div>
                                                <div class="float-right">
                                                  <span class="badge badge-pill badge-dark" style="font-size:0.8rem">300 Words</span>
                                                </div>
                                              </div>
                                              <div class="card-body">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend" @click="removeStar">
                                                      <span class="input-group-text"><Icon type="md-remove" /></span>
                                                    </div>
                                                    <input type="text" disabled class="form-control" min="3" max="5" :value="rating + ' Star'">
                                                    <div class="input-group-append" @click="addStar">
                                                      <span class="input-group-text"><Icon type="md-add-circle" /></span>
                                                    </div>
                                                  </div>

                                                  <div>
                                                    <ul>
                                                      <li>Within 1 Business day</li>
                                                      <li>100% Satistaftion Guaranteed</li>
                                                    </ul>
                                                  </div>
                                              </div>

                                              <div class="card-footer bg-white">
                                                <div class="float-left">
                                                  <h2>$9.75</h2>
                                                </div>
                                                <div class="float-right">
                                                  <Button type="warning">Order Now</Button>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                  </div>
                                </Panel>

                              </Collapse>
                            </div> -->
                          
                          <section id="packages" class="blog-section">
                            <div class="package_accordin">
                              <Collapse v-model="value1">
                                  <Panel name="1">
                                      Basic Packages
                                      <div slot="content">
                                        <div class="row packages_list py-2">
                                          <p class="px-2 pb-5">
                                            Below are some of our Begginer Packages. Select the best package that suites your needs! 
                                            Or switch to our custom order below
                                            </p>
                                          <div class="col-md-4">
                                             <div class="card basic_package">

                                               <!--BLOG BASIC CARD HEADER-->
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                                </div>
                                                 <!--END BLOG BASIC CARD HEADER-->

                                                 <!-- START BLOG POST CARD BODY-->
                                               <div class="card-body">

                                                   <!-- BLOG POST INPUTS-->
                                                   
                                                   <div class="inputs">
                                                      <Input  :value="basicPackage.quality_1 + ' '+'Star'" name="basic">
                                                        <span slot="prepend" @click="removePrice_1">
                                                          <Icon type="md-remove-circle" />
                                                        </span>
                                                        <span slot="append" @click="addPrice_1">
                                                          <Icon type="md-add-circle" />
                                                        </span>
                                                        
                                                      </Input>
                                                   </div>
                                                    <!--END BLOG POST INPUTS-->
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>

                                                </div>

                                                <!-- END BLOG POST CARD BODY-->

                                                <div class="card-footer text-center">
                                                   <Button type="warning" >
                                                     <router-link to="/">
                                                       <Icon type="md-cart" />
                                                     Order Now
                                                     </router-link>
                                                     
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   ${{Number(basicPackage.price_1).toFixed(2)}}
                                                </div>
                                                <div class="words-badge">100 Words</div>
                                               </div>
                                             </div>
                                          </div>

                                          <!-- <div class="col-md-4">
                                             <div class="card basic_package">
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                               </div>

                                               <div class="card-body">
                                                   <div class="inputs">
                                                      <Input  :value="qualityStar + ' '+'Star'" name="basic">
                                                        <span slot="prepend">
                                                          <Icon type="md-remove-circle" />
                                                          </span>
                                                        <span slot="append" @click="addStar">
                                                          <Icon type="md-add-circle" />
                                                          </span>
                                                        
                                                    </Input>
                                                   </div>
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>
                                                </div>
                                                <div class="card-footer text-center">
                                                   <Button type="warning">
                                                     <Icon type="md-cart" />
                                                     Order Now
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   $6.50
                                                </div>
                                                <div class="words-badge">200 Words</div>
                                               </div>
                                             </div>
                                          </div> -->

                                          <!-- <div class="col-md-4">
                                             <div class="card basic_package">
                                               <div class="card-header text-white">
                                                 <span>1</span>
                                                 Custom Blog Post

                                               </div>

                                               <div class="card-body">
                                                   <div class="inputs">
                                                      <Input  :value="qualityStar + ' '+'Star'" name="basic">
                                                        <span slot="prepend">
                                                          <Icon type="md-remove-circle" />
                                                          </span>
                                                        <span slot="append" @click="addStar">
                                                          <Icon type="md-add-circle" />
                                                          </span>
                                                        
                                                    </Input>
                                                   </div>
                                                    

                                                    <div class="package-desc">
                                                      <ul>
                                                        <li>Within 48 hours</li>
                                                        <li>100% Satistaftion Guaranteed</li>
                                                        <li>SEO friendly</li>
                                                      </ul>
                                                    </div>
                                                </div>
                                                <div class="card-footer text-center">
                                                   <Button type="warning">
                                                     <Icon type="md-cart" />
                                                     Order Now
                                                   </Button>
                                                </div>
                                               
                                               <div class="package-pricing">
                                                <div class="price">
                                                   $9.75
                                                </div>
                                                <div class="words-badge">300 Words</div>
                                               </div>
                                             </div>
                                          </div> -->

                                        </div>
                                      </div>
                                  </Panel>
                                  <Panel name="2">
                                      Intermediate Packages
                                      <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                                  </Panel>
                                  <Panel name="3">
                                     Expert Packages
                                      <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                                  </Panel>
                                </Collapse>
                            </div>
                          </section>

                           <section class="custom-blog" style=" background: url(/assets/img/pattern-bg.jpg);">
                              <div class="custom-order clearfix" id="myorder">
                                 <h3>Get Started Now!
                                   <span>Order Custom Blog Post Content</span>
                                 </h3>

                                 <div class="row">
                                   <div class="col-md-7 col-sm-7">
                                     <div class="custom-order-form-blog">
                                         <div class="desired-package">
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Quality</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input >
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Word Count</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input>
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">No. of Posts</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <Input>
                                                 <span slot="prepend"><Icon type="md-remove-circle" /></span>
                                                 <span slot="append"><Icon type="md-add-circle" /></span>
                                               </Input>
                                             </div>
                                           </div>
                                           <div class="row py-2">
                                             <div class="col-md-4 colsm-4">
                                               <p class="clearfix">Urgency</p>
                                             </div>
                                             <div class="col-md-8 colsm-8">
                                               <label ><Checkbox  name="urgency">24 Hours</Checkbox></label>
                                               <label ><Checkbox  name="urgency">12 Hours</Checkbox></label>
                                               <label ><Checkbox  name="urgency">8 Hours</Checkbox></label>
                                                <label ><Checkbox  name="urgency">48 Hours</Checkbox></label>
                                             </div>
                                           </div>
                                           <div class="row bottom-order clearfix">
                                             <div class="col-md-6 float-left">
                                               <div class="order-total">
                                                 Total:
                                                 <span id="custom-output">$115.22</span>
                                               </div>
                                             </div>
                                             <div class="col-md-6 float-right">
                                               <div class="order-btn">
                                                 <Button type="warning" class="btn-order"><Icon type="md-cart" /> Order Now</Button>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                     </div>
                                   </div>
                                   <div class="col-md-5 col-sm-5"></div>
                                 </div>
                              </div>
                           </section>
                        </Content>
                    </Layout>
                </Content>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
 import NavBar from './SectionWelcome/HeaderSection.vue';
export default {
  mounted(){
    this.$store.dispatch('blogBasics');
  },
  name:'order-services',

  data:function(){
    return{
      value1:'1',

      basicPackage:{
        quality_1:3,
        price_1:3.25,
        increment_quality:5.05
      }
     
    }
  },

  components:{
    NavBar
  },
  methods:{
  addPrice_1:function(){
    if(this.basicPackage.quality_1!=5){
      this.basicPackage.quality_1++
      this.basicPackage.price_1=this.basicPackage.price_1+=2.2
    }
    
    
  },
  removePrice_1:function(){
    if(this.basicPackage.quality_1!=3){
      this.basicPackage.quality_1--
      this.basicPackage.price_1=this.basicPackage.price_1-=2.2
    }
  }

  },
  computed:{
    ...mapGetters([
      'blogBasics'
    ]),


  }
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