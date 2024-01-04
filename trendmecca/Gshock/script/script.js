$(document).ready(function() {

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".section2",
      pin: true,
      start:'top 30%',
      end:'100% -40',
      scrub:1
    }
  });
  tl.to(".sec2_obj1",{opacity:1, y:-100})
    .to(".sec2_obj2",{opacity:1, y:-100})
    .to(".sec2_obj3",{opacity:1, y:-100})

  new Swiper ('.section3_swiper', {
    loop: true,
    speed: 1000,    
    autoplay: {
      delay: 1300,
      disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 4,
      },
      300: {
        slidesPerView: 2,
      }
    }
  });  

});