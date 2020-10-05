<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="{{asset('js/app.js')}}" defer></script>
    <script src="{{asset('assets/js/owl.carousel.js')}}" defer></script>
    <script src="{{asset('assets/js/aos.js')}}" defer></script>
    <script src="{{asset('assets/js/landingpage.js')}}" defer></script>
    
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/owl.carousel.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/owl.theme.default.css')}}" rel="stylesheet">
    <link href="{{asset('assets/css/materialdesignicons.min.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/aos.css')}}" rel="stylesheet"> 
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet"> 
    <title>{{config('app.name')}}</title>


    </head>
    <body id="body" data-spy="scroll" data-target=".navbar" data-offset="100" >
      
      <div id="app" v-cloak>
        
        <main-app/>
      </div>
     
    </body>
     
    
</html>
