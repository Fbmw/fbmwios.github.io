// shrinking navbar JS
$(window).scroll(function() {
  if ($(document).scrollTop() > 250) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// $(function(){
//   var dt = new Date();
//     var dateSpanTag = $("#date")
//     dateSpanTag[0].innerText = dt.getFullYear() 
// });

// $(function(){
//     $(".note-app-img").on('mouseover', function(event){
//       $('.portfolio-caption').css("opacity", "1");

//     });

//     $(".note-app-img").on('mouseleave', function(event){
//       $('.portfolio-caption').css("opacity", "0");
//     });
// });

// $(function(){
//   //$('.portfolio-caption-iphone').css("opacity", "0");
//     $(".iphone-container").on('mouseover', function(event){
//       $('.portfolio-caption-iphone').css("opacity", "1");
//     });

//     $(".iphone-container").on('mouseleave', function(event){
//       $('.portfolio-caption-iphone').css("opacity", "0");
//     });
// });


// $(function(){
//     $(".iphone-container").on('mouseover', function(event){
//       var img = '<img src="images/secondShot.png">';
//
//       $('.iphone-container').append(img);
//     });
//     $(".iphone-container").on('mouseleave', function(event){
//       $('img + img').remove();
//     });
// });
