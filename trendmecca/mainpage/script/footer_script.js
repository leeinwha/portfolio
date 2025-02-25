$(document).ready(function () {
  new Swiper ('.brand_swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },        
    breakpoints: {
      1025: {
        slidesPerView: 4,        
      },
      300: {
        slidesPerView: 4,        
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      }
    }    
  });

  $('.footer_mobile > .footer_list > li').click(function(){
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).children().next().slideToggle().parent().siblings().find('.depth2').slideUp();
    $('.arrow_icon').toggleClass('on');
    $(this).children().next().parent().siblings().find('.arrow_icon').removeClass('on');            
  });

  
  $("body").on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;
  
    if (wheel > 0) {
      //스크롤 올릴때
      $( '.nav_icon' ).addClass( 'on' );
    } else {
      //스크롤 내릴때
      $( '.nav_icon' ).removeClass( 'on' );
    }
  });
});