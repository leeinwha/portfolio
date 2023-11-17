$(document).ready(function() {

    let event1 = $('.section2').offset().top;

    $(window).scroll(function(){
        let point = $(document).scrollTop() +600;
        if(point >= event1){
            $('.sec2_obj1').addClass('on');
            $('.sec2_obj2').addClass('on');
        }else{
            $('.sec2_obj1').removeClass('on');
            $('.sec2_obj2').removeClass('on');
        }
    });

    new Swiper ('.section4_swiper', {
        loop: true,
        slidesPerView: 3,
        speed:800,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },                
    });

    new Swiper ('.section5_swiper', {
        loop: true,
        slidesPerView: 2,
        speed:800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },                
    });

    $('.section4 .image_wrap').mouseenter(function(){
        $('.section4 .image_wrap div').css('transition','0.5s');
        $(this).find('.hover1_img').css('opacity','0');
        $(this).find('.hover2_img').css('opacity','1');
    });
    $('.image_wrap').mouseleave(function(){
        $('.image_wrap div').css('transition','0.5s');
        $(this).find('.hover1_img').css('opacity','1');
        $(this).find('.hover2_img').css('opacity','0');
    });
});