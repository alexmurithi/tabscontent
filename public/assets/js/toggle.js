$(document).ready(function(){
  $(".js-toggle-advanced").click(function(){
    $("i",this).toggleClass("md-arrow-dropup-circle md-arrow-dropdown-circle");
    $(".advanced-details").toggle("slow","linear");
  });
});