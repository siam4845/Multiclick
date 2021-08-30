//===========testimonial part slider===========
$('.testi-item-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.testi-prev',
    nextArrow:'.testi-next',
    speed:2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows:false,
          autoplay:true,
          speed: 1000,
        }
      },
      {
          breakpoint: 768,
          settings: {
            
          }
      },
       {
           breakpoint: 992,
           settings: {
             
           }
         },
  
    ]
  });

  //============video part start============
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function toggle(button) {
  if (video.paused) {
    video.play();
    document.getElementById('myBtn').innerHTML = '<i class="fa fa-pause"></i>';
    document.getElementById('siam-player').innerHTML = 'Pause Video';
  } 
  else {
    video.pause();
    document.getElementById('myBtn').innerHTML = '<i class="fa fa-play"></i>';
    document.getElementById('siam-player').innerHTML = 'Play Video';
  }
}
//====================counter part======================
$(function(){
  $('.counter').counterUp({
    delay: 5,
    time: 3000,
  });
});
//===========Bottom-to-top and fixed nav==============
$(function(){
  $('.bottom-to-top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
});
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
        $('.bottom-to-top').fadeIn(500);
    }
    else{
        $('.bottom-to-top').fadeOut(500);
    }


    if(scrolling > 200){
        $('.navbar').addClass('nav-bg');
    }
    else{
        $('.navbar').removeClass('nav-bg');
    }
});
});
