$(document).ready(function () {
  new Swiper ('.mainslide_swiper', {
    loop: true,
    speed: 1000,    
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 1,
      },
    },
    pagination: {
        el:'.mainslide_swiper .swiper-pagination',
        clickable : true,
    },
    navigation: {
        nextEl: '.mainslide_swiper .swiper-button-next',
        prevEl: '.mainslide_swiper .swiper-button-prev'
    },
  });
})