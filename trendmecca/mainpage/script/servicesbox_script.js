$(document).ready(function () {
  new Swiper ('.services_box_swiper', {
    loop: true,
    speed: 1000,        
    breakpoints: {
      1025: {
        slidesPerView: 4,
        spaceBetween: '0.5%',
      },
      300: {
        slidesPerView: 1,
      }
    }    
  });
});