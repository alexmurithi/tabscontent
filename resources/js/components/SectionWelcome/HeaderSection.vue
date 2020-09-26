<template>
      <nav class="navbar navbar-dark navbar-expand-md fixed-top bg-dark navbar--apple">
        <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#menu"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"><i class="la la-navicon"></i></span></button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav flex-grow-1 justify-content-between">
                    <li class="nav-item d-none d-xs-block d-md-block" role="presentation"><a class="nav-link" href="#"><i class="far fa-edit apple-logo"></i></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Blog</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Services</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">About Us</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>
                    <li class="nav-item d-none d-xs-block d-md-block" role="presentation"><a class="nav-link" href="#"><i class="fas fa-sign-in-alt"></i></a></li>
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