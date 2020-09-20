<template>
 <nav class="navbar navbar-expand-lg fixed-top">
			<div class="container">
				<a class="navbar-brand" href="#"><img src="/images/logo.svg" alt="ContentBase"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"><i class="fas fa-bars"></i> </i></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<div class="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
						<img src="images/logo-dark.svg" class="logo-mobile-menu" alt="logo">
						<a href="javascript:;" class="close-menu"><i class="far fa-times-circle"></i></a>
					</div>
					<ul class="navbar-nav ml-auto align-items-center">
						<li class="nav-item active">
							<router-link :to="{name:'home',path:'/'}" class="nav-link">
							  Home
                               <span class="sr-only">(current)</span>
							</router-link>
							<!-- <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> -->
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#services">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#about">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#projects">Projects</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#testimonial">Testimonial</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#plans">Pricing</a>
						</li>
						<li class="nav-item" v-show="!isLoggedIn">
							<router-link class="nav-link btn-success" :to="{name:'login',path:'/auth/login'}">
                              Login
							</router-link>
							<!-- <a class="nav-link btn btn-success" href="#">Login</a> -->
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name:'header-section',
  computed:{
	  ...mapGetters(['isLoggedIn']),
  }
}
</script>

<style scoped>
 
   
</style>