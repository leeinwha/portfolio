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
  
  new Swiper ('.box1_swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.box1_swiper .swiper-button-next',
      prevEl: '.box1_swiper .swiper-button-prev',
    },
  });

  new Swiper ('.box2_swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.box2_swiper .swiper-button-next',
      prevEl: '.box2_swiper .swiper-button-prev',
    },
  });

  new Swiper ('.box3_swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.box3_swiper .swiper-button-next',
      prevEl: '.box3_swiper .swiper-button-prev',
    },
  });

  new Swiper ('.box4_swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.box4_swiper .swiper-button-next',
      prevEl: '.box4_swiper .swiper-button-prev',
    },
  });

});