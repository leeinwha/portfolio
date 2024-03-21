$(document).ready(function() {
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            pin: true,
            start:'top 50%',
            end:'100% -40%',
            scrub:1.5 //start-end
        }
    });
     tl.to(".sec2_obj1",{opacity:1})
       .to(".sec2_obj1",{opacity:0})
       .to(".sec2_obj2",{opacity:1})
       .to(".sec2_obj2",{opacity:0})
       .to(".sec2_obj3",{opacity:1})
 
    
    new Swiper ('.section3_swiper', {
        loop: true,        
        speed:800,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1025: {
                slidesPerView: 3,                
            },
            300: {
                slidesPerView: 1,                
            },
        },                
    });

    new Swiper ('.section4_swiper', {
        loop: true,        
        speed:800,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },                        
    });

    new Swiper ('.section4_swiper_m', {
        loop: true,        
        speed:800,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },                        
    });

    new Swiper ('.section5_swiper', {
        loop: true,        
        speed:800,
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },                        
    });

    new Swiper ('.section5_swiper_m', {
        loop: true,        
        speed:800,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },                        
    });
    
     
 
 });
 
     
 
 
 
 
 
 