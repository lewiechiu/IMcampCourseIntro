$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});




$(document).ready(function(){
  console.log(123);
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
});