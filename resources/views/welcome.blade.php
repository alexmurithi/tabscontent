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
    <link href="{{asset('assets/css/materialdesignicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/owl.theme.default.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/aos.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/jquery.flipster.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet">
        <!-- Styles --> 
    </head>
    <body data-spy="scroll" data-target=".navbar" data-offset="50">
      
      <div id="app" v-cloak>
        
        <main-app/>
      </div>
     
    
      <script src="{{asset('js/app.js')}}" defer></script>
      <script src="{{asset('assets/js/owl.carousel.js')}}" defer></script>
      <script src="{{asset('assets/js/aos.js')}}" defer></script>
      <script src="{{asset('assets/js/template.js')}}" defer></script>
       <script src="{{asset('assets/js/jquery.easing.min.js')}}" defer></script>
       <script src="{{asset('assets/js/sb-admin-2.min.js')}}" defer></script> 
      <script src="{{asset('assets/js/jquery.flipster.min.js')}}" defer></script>
      
          
    </body>
     
    
</html>
