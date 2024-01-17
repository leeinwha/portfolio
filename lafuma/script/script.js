$(function(){

  $('.mobile_menu > .menu_list > li').click(function(){
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).children().next().slideToggle().parent().siblings().find('.depth2').slideUp();
  });

  $('.m_menu_btn').click(function(){
    $('.cover').fadeIn(200);
    $('.mobile_menu').animate({'left':0},500);
  });
  $('.cover').click(function(){
    $('.cover').fadeOut(200);
    $('.mobile_menu').animate({'left':'-100%'},500);
  });

  new Swiper ('.swiper-container',{
    loop: true,
    speed: 1000,
    pagination:{
      el:'.swiper-pagination',
    },
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    }    
  });
  
});