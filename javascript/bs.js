$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



$(document).ready(function(){



  console.log(123);
  var owl = $('.owl-carousel');
  if ($(window).width() < 960){
      owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1500,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.picture-course').css({
      "font-weight":"300",
      "font-size":"20px"
    });
  }
  else{
    owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoplay:true,
      autoplaySpeed:2500,
      autoplayTimeout:3000,
      autoplayHoverPause:true
  });
  }  

  // $('.elective-courses').mousedown(function(e){
  //   console.log("clicked:"+$(this).attr('id'));
  //   var file_location = "courses/" + $(this).attr('id') + ".html";
  //   window.open(file_location);
    
  // });

});

