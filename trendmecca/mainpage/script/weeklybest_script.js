$(document).ready(function () {
  new Swiper ('.Prd_swiper', {
    loop: true,
    speed: 1000,
    spaceBetween: '5%',    
    autoplay: {
    delay: 2000,    
    disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 5,
      },
      300: {
        slidesPerView: 2,
        spaceBetween: '5%',
      },
    },    
  });
});