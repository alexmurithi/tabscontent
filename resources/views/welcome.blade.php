<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{config('app.name')}}</title>
  

        <!-- Scripts -->
      <script src="{{asset('js/app.js')}}" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" defer></script>
      <script src="{{asset('assets/js/landingpage.js')}}" defer></script>
      
      <!-- Home Scripts -->
       <script src="{{asset('assets/js/jquery.easing.min.js')}}" defer></script>
       <script src="{{asset('assets/js/sb-admin-2.min.js')}}" defer></script>

       <script src="{{asset('assets/js/jquery.dataTables.min.js')}}" defer></script> 
       <script src="{{asset('assets/js/dataTables.bootstrap4.min.js')}}" defer></script>
       <script src="{{asset('assets/js/datatables-demo.js')}}" defer></script>
      


        <!-- Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles --> 
       <link href="{{asset('css/app.css')}}" rel="stylesheet">
       <link href="{{asset('assets/css/owl.carousel.min.css')}}" rel="stylesheet">
       <link href="{{asset('assets/css/owl.theme.default.css')}}" rel="stylesheet">
       <link href="{{asset('assets/css/aos.css')}}" rel="stylesheet">
       <link href="{{asset('assets/css/style.min.css')}}" rel="stylesheet">


    </head>
    <body id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
      <div id="app" v-cloak>
        <main-app/>
      </div>
    </body>
</html>
