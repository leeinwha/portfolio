$(function(){

    let event1 = $('.section2').offset().top;
    let event2 = $('.section3').offset().top;
    let event3 = $('.section4').offset().top;    
    
    $(window).scroll(function(){
        let pointS = $(document).scrollTop() - 2000;
        let pointM = $(document).scrollTop() - 100;
        let pointL = $(document).scrollTop() + 600;

        if(pointL >= event1){
            $(".sec2_obj1").addClass('on');
            $(".sec2_obj2").addClass('on');
            $(".sec2_obj3").addClass('on');
        }else{
            $(".sec2_obj1").removeClass('on');
            $(".sec2_obj2").removeClass('on');
            $(".sec2_obj3").removeClass('on');
        }
        if(pointL >= event2){
            $(".sec3_obj1").addClass('on');
            $(".sec3_obj2").addClass('on');
            $(".sec3_obj3").addClass('on');
        }else{
            $(".sec3_obj1").removeClass('on');
            $(".sec3_obj2").removeClass('on');
            $(".sec3_obj3").removeClass('on');
        }
        if(pointM >= event3){
            $(".sec5_obj1").addClass('on');
            $(".sec5_obj2").addClass('on');
            $(".sec5_obj3").addClass('on');
        }else{
            $(".sec5_obj1").removeClass('on');
            $(".sec5_obj2").removeClass('on');
            $(".sec5_obj3").removeClass('on');
        }
        if(pointS >= event3){
            $(".sec7_obj1").addClass('on');
            $(".sec7_obj2").addClass('on');
            $(".sec7_obj3").addClass('on');
        }else{
            $(".sec7_obj1").removeClass('on');
            $(".sec7_obj2").removeClass('on');
            $(".sec7_obj3").removeClass('on');
        }
    });


    $('.section_swiper').slick({
        autoplay:true,
        autoplaySpeed:1500,
        slidesToShow: 3,
        pauseOnHover: true,
        arrows: false,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
      });
});