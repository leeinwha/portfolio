$(document).ready(function() {
  $('.man_cate_list > ul > li').click(function(e) {
    e.preventDefault();
    var cate_id = $(this).data('cate');              

    $('.man_product_list').removeClass('on');
    $('#'+cate_id).addClass('on');        
    $('.man_cate_list > ul > li').removeClass('active'); 
    $(this).addClass('active');
    $('img.lazyload').trigger('appear');
  });

  $('.man_cate_list #manlist1').click(function(){       
    $('.man_cate_list .active_border').css('top','0');
  });
  $('.man_cate_list #manlist2').click(function(){       
    $('.man_cate_list .active_border').css('top','25%');
  });
  $('.man_cate_list #manlist3').click(function(){       
    $('.man_cate_list .active_border').css('top','50%');
  });
  $('.man_cate_list #manlist4').click(function(){       
    $('.man_cate_list .active_border').css('top','75%');
  });

  new Swiper ('.category_swiper', {
    loop: true,
    speed: 1000,
    spaceBetween: '5%',    
    autoplay: {
      delay: 2000,    
      disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 4,
      },
      300: {
        slidesPerView: 2,               
        slidesPerColumn: 2,
        spaceBetween: '5%',
      },
    },    
  });
});