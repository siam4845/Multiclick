//===========testimonial part slider===========
$('.testi-item-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.testi-prev',
    nextArrow:'.testi-next',
    speed:2000,
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