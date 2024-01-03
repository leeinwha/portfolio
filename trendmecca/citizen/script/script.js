$(document).ready(function() {
  
  new Swiper ('.section2_swiper', {
    loop: true,
    speed: 800,
    spaceBetween: '5%',
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
    }
  });

  new Swiper ('.section3_swiper', {
    loop: true,
    speed: 1000,    
    autoplay: {
      delay: 1300,
      disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 5,
        spaceBetween: '5%',
      },
      300: {
        slidesPerView: 1,
        spaceBetween: '40%',
      },
    }
  });

  new Swiper ('.section4_swiper', {
    loop:true,
    speed: 1200,
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: '10%'
      },
      300: {
        slidesPerView:1
      }
    }
  });

  new Swiper ('.section6_swiper', {
    loop:true,
    speed: 1200,
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: '10%'
      },
      300: {
        slidesPerView:1
      }
    }
  });

});