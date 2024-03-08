$(document).ready(function() {
  new Swiper ('.brand_magazine_swiper',{
      loop: true,
      slidesPerView: 1,
      centeredSlides : true,
      slidesOffsetBefore: 0,
      spaceBetween: '15%',        
      speed: 1000,
      effect : 'coverflow',
      autoplaySpeed: 3000,
      autoplay: true,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows : false
      },
      scrollbar: {
          el: '.brand_magazine_swiper .swiper-scrollbar',
      },        
  });
});