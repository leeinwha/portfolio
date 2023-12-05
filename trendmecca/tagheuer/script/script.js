$(document).ready(function() {
    new Swiper ('.section3_swiper', {
        loop: true,        
        speed:800,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1025: {
                slidesPerView: 4,                
            },
            300: {
                slidesPerView: 2,                
            },
        },         
    });

    new Swiper ('.section4_swiper', {
      loop: true,        
      speed:800,
      autoplay: {
          delay: 1500,
          disableOnInteraction: false,
      },
      breakpoints: {
          1025: {
              slidesPerView: 4,                
          },
          300: {
              slidesPerView: 2,                
          },
      },         
    });

    new Swiper ('.section5_swiper', {      
      breakpoints: {
          1025: {
              slidesPerView: 2,                
          },
          300: {
              slidesPerView: 2,                
          },
      },         
    });

    new Swiper ('.section6_swiper', {      
      breakpoints: {
          1025: {
              slidesPerView: 3,                
          },
          300: {
              slidesPerView: 2,                
          },
      },         
    });

    new Swiper ('.section10_swiper', {      
      breakpoints: {
          1025: {
              slidesPerView: 4,                
          },
          300: {
              slidesPerView: 2,                
          },
      },         
    });

    $(".image_wrap").mouseenter(function(){
      $(".image_wrap div").css("transition" , "0.5s");
      $(this).find('.hover1_img').css('opacity','0');
      $(this).find('.hover2_img').css('opacity','1');
    });
    $(".image_wrap").mouseleave(function(){
      $(".image_wrap div").css("transition" , "0.5s");
      $(this).find('.hover1_img').css('opacity','1');
      $(this).find('.hover2_img').css('opacity','0');
    });

    gsap.to(".sec4_obj1", {
      scrollTrigger: {
          trigger: '.sec4_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: 1300,
    });

    gsap.to(".sec5_obj1", {
      scrollTrigger: {
          trigger: '.sec5_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: -1300,
    });

    gsap.to(".sec6_obj1", {
      scrollTrigger: {
          trigger: '.sec6_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: 1300,
    });

    gsap.to(".sec7_obj1", {
      scrollTrigger: {
          trigger: '.sec7_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: -1450,
    });
  
    gsap.to(".sec8_obj1", {
      scrollTrigger: {
          trigger: '.sec8_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: 1400,
    });
  
    gsap.to(".sec9_obj1", {
      scrollTrigger: {
          trigger: '.sec9_obj1',
          start: "0% 35%",
          end: "100% 100%",            
          scrub: 1,           
      },
      x: -1450,
    });


});