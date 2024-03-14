$(document).ready(function() {
  $('.woman_cate_list > ul > li').click(function(e) {
    e.preventDefault();
    var cate_id = $(this).data('cate');              

    $('.woman_product_list').removeClass('on');
    $('#'+cate_id).addClass('on');        
    $('.woman_cate_list > ul > li').removeClass('active'); 
    $(this).addClass('active');
    $('img.lazyload').trigger('appear');
  });

  $('.woman_cate_list #womanlist1').click(function(){       
    $('.woman_cate_list .active_border').css('top','0');
  });
  $('.woman_cate_list #womanlist2').click(function(){       
    $('.woman_cate_list .active_border').css('top','25%');
  });
  $('.woman_cate_list #womanlist3').click(function(){       
    $('.woman_cate_list .active_border').css('top','50%');
  });
  $('.woman_cate_list #womanlist4').click(function(){       
    $('.woman_cate_list .active_border').css('top','75%');
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