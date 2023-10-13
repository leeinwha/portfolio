$(document).ready(function() {
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            pin: true,
            start:'top 30%',
            end:'100% -10%',
            scrub:1.5 //start-end
        }
    });
     tl.to(".sec2_obj1",{y:-250,opacity:1})
       .to(".sec2_obj2",{y:-250,opacity:1})
       .to(".sec2_obj3",{y:-250,opacity:1})
 
 
     
     
     new Swiper ('.section3_swiper', {
         loop: true,
         slidesPerView: 3,
         speed: 2000,
         spaceBetween: '5%',       
         autoplay: {
             delay: 2000,
             disableOnInteraction: false,
         },            
         breakpoints: {
             1025: {
                 slidesPerView: 2,                
             },
         },        
     });    
     
 
     new Swiper ('.section4_swiper', {
         loop: true,
         slidesPerView: 3,
         speed: 2000,       
         autoplay: {
             delay: 2000,
             disableOnInteraction: false,
         },        
     });
     
     new Swiper ('.section4_swiper_m', {
         loop: true,
         slidesPerView: 2,
         speed: 2000,
         spaceBetween: '5%',
         autoplay: {
             delay: 2000,
             disableOnInteraction: false,
         },        
     });
     
     new Swiper ('.section5_swiper', {
         loop: true,
         slidesPerView: 3,
         speed: 2000,       
         autoplay: {
             delay: 2000,
             disableOnInteraction: false,
         },        
     });
     
 
 });
 
     
 
 
 
 
 
 