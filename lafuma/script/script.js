$(function(){

  $('.mobile_menu > .menu_list > li').click(function(){
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).children().next().slideToggle().parent().siblings().find('.depth2').slideUp();
  });

  $('.m_menu_btn').click(function(){
    $('.cover').fadeIn(200);
    $('.mobile_menu').animate({'left':0},500);
    $('body,html').css('overflow','hidden');
  });
  $('.cover').click(function(){
    $('.cover').fadeOut(200);
    $('.mobile_menu').animate({'left':'-100%'},500);
    $('body,html').css('overflow','auto');
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

  $(window).resize(function(){
    let num = $(this).width();
    if(num <= 767){
      $('.section1 .slide_list1 img').attr('src','img/m_visual_a.jpg');
      $('.section1 .slide_list2 img').attr('src','img/m_visual_b.jpg');
      $('.section1 .swiper-button-prev , .section1 .swiper-button-next').hide();
      $('.section3 .event .event_list1 img').attr('src','img/m_catalogue.jpg');
      $('.section3 .event .event_list2 img').attr('src','img/m_video.jpg');
      $('.section3 .event .event_list3 img').attr('src','img/m_product.jpg');
      $('.section3 .event .event_list4 img').attr('src','img/m_athletic.jpg');
      $('.section3 .event .event_list5 img').attr('src','img/m_camping.jpg');
    }else{
      $('.section1 .slide_list1 img').attr('src','img/visual_a.jpg');
      $('.section1 .slide_list2 img').attr('src','img/visual_b.jpg');
      $('.section1 .swiper-button-prev , .section1 .swiper-button-next').show();
      $('.section3 .event .event_list1 img').attr('src','img/cata_ot.jpg');
      $('.section3 .event .event_list2 img').attr('src','img/video_ot.jpg');
      $('.section3 .event .event_list3 img').attr('src','img/product_ot.jpg');
      $('.section3 .event .event_list4 img').attr('src','img/athletic_ot.jpg');
      $('.section3 .event .event_list5 img').attr('src','img/camping_ot.jpg');
    }
  });

  $('.section3 .event ul li').mouseenter(function(){
    let pre_src=$(this).find('img').attr('src');
    let next_src=pre_src.replace('ot','ov');
    $(this).find('img').attr('src',next_src);
  });
  $('.section3 .event ul li').mouseleave(function(){
    let pre_src=$(this).find('img').attr('src');
    let next_src=pre_src.replace('ov','ot');
  $(this).find('img').attr('src',next_src);
  });
  
});