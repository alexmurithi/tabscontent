<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{config('app.name')}}</title>


    
  
    
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    
        <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    {{-- <link href="{{asset('assets/css/materialdesignicons.min.css')}}" rel="stylesheet"> --}}
    {{-- <link href="{{asset('assets/css/owl.carousel.min.css')}}" rel="stylesheet"> --}}
    {{-- <link href="{{asset('assets/css/owl.theme.default.css')}}" rel="stylesheet">  --}}
    {{-- <link href="{{asset('assets/css/aos.css')}}" rel="stylesheet">  --}}
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    {{-- <link href="{{asset('assets/css/jquery.flipster.css')}}" rel="stylesheet">  --}}

    <link href="{{asset('assets/css/Navbar.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/Navbar-1.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/Highlight.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/styles.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/carousel.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/Highlight-Clean.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/Features.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/Footer-Dark.css')}}" rel="stylesheet">
   

   
        <!-- Styles --> 
    </head>
    <body >
      
      <div id="app" v-cloak>
        
        <main-app/>
      </div>
     
    
      <script src="{{asset('js/app.js')}}" defer></script>
      <script src="{{asset('assets/js/owl.carousel.js')}}" defer></script>
      <script src="{{asset('assets/js/aos.js')}}" defer></script>
      <script src="{{asset('assets/js/bs-init.js')}}" defer></script>
      <script src="{{asset('assets/js/Navbar.js')}}" defer></script>
      <script src="{{asset('assets/js/carousel.js')}}" defer></script>
      <script src="{{asset('assets/js/script.js')}}" defer></script>
      {{-- <script src="{{asset('assets/js/template.js')}}" defer></script> --}}
       <script src="{{asset('assets/js/jquery.easing.min.js')}}" defer></script>
       <script src="{{asset('assets/js/sb-admin-2.min.js')}}" defer></script> 
      {{-- <script src="{{asset('assets/js/jquery.flipster.min.js')}}" defer></script> --}}
      
          
    </body>
     
    
</html>
