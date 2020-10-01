<template>
   <div class="highlight-phone">
        <div class="container-fluid">
            <div class="row py-2">
                <div class="col px-5 col-md-5">
                    <div class="intro">
                        <h1 class="text-uppercase" id="intro-heading" style="font-family: 'Abril Fatface', cursive;">Professional Content Writing Services</h1>
                        <p id="intro-paragraph" style="font-family: Adamina, serif;">When you try to grow your online business, therefore, you need a <strong>Content Writing Service</strong><br> to advertise your services on your business website. If you want to <br>achieve success in your business, then you too
                            have to search for the <br>best <strong>content writer</strong> for your online business website so that your online business level can be high<br><br></p>
                        <p><button class="btn btn-primary" data-bs-hover-animate="pulse" @click="navToBlog" type="button">ORder Content Now!</button></p>
                    </div>
                </div>
                <div class="col d-none col-md-4">
                    <div class="d-md-block iphone-mockup"><img class="device" src="assets/img/IMac_Pro.svg">
                        <div class="screen">
                            <section id="carousel">
                                <div class="carousel slide carousel-fade" data-ride="carousel" id="carousel-1">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="jumbotron pulse animated hero-nature carousel-hero" style="background-image: url(&quot;assets/img/SEO-IMAGE.png&quot;);background-repeat: no-repeat;background-position: center;background-size: cover;">
                                                <h3 class="text-uppercase hero-title carousel-heading">Professional Copywriting Services</h3>
                                                <p><a class="btn btn-primary text-uppercase hero-button plat" role="button" href="#">Order content now!</a></p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="jumbotron pulse animated hero-photography carousel-hero" style="background-image: url(&quot;assets/img/Web%20Content.png&quot;);background-repeat: no-repeat;background-position: center;background-size: cover;">
                                                <h3 class="text-uppercase hero-title carousel-heading">Blog Post Writing Services</h3>
                                                <p><a class="btn btn-primary text-uppercase hero-button plat" role="button" href="#">Order Content Now!</a></p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="jumbotron pulse animated hero-technology carousel-hero" style="background-image: url(&quot;assets/img/content-women.png&quot;);background-repeat: no-repeat;background-size: cover;">
                                                <h3 class="text-uppercase hero-title carousel-heading">Professional Web Content Writing</h3>
                                                <p><a class="btn btn-primary text-uppercase hero-button plat" role="button" href="#">Order content now!</a></p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="jumbotron pulse animated hero-technology carousel-hero" style="background-image: url(&quot;assets/img/content-women.png&quot;);background-repeat: no-repeat;background-size: cover;">
                                                <h3 class="text-uppercase hero-title carousel-heading">PROFESSIONAL ARTICLE WRITING SERVICES</h3>
                                                <p><router-link class="btn btn-primary text-uppercase hero-button plat" role="button" :to="{name:'blog-post-packages'}">Order Content Now!</router-link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div><a class="carousel-control-prev text-primary" href="#carousel-1" role="button" data-slide="prev" data-bs-hover-animate="flash"><i class="fa fa-chevron-left"></i><span class="sr-only">Previous</span></a><a class="carousel-control-next text-primary"
                                            href="#carousel-1" role="button" data-slide="next" data-bs-hover-animate="flash"><i class="fa fa-chevron-right"></i><span class="sr-only">Next</span></a></div>
                                    <ol class="carousel-indicators d-none">
                                        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel-1" data-slide-to="1"></li>
                                        <li data-target="#carousel-1" data-slide-to="2"></li>
                                        <li data-target="#carousel-1" data-slide-to="3"></li>
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'banner-section',

  methods:{
      navToBlog:function(){
          this.$router.push({name:'blog-posts'})
      }
  }
}
</script>

<style scoped>
 
  
</style>