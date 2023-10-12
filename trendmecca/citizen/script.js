$(document).ready(function() {
    new Swiper ('.section2_swiper', {
        loop: true,
        slidesPerView: 3,
		centeredSlides: true,
        slidesOfsetBefore: 0,
        spaceBetween: '10%',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },            
        breakpoints: {
            1025: {
                slidesPerView: 1,                
            },
        },        
    });
    
    new Swiper ('.section3_swiper', {
        loop: true,
        slidesPerView: 5,
		centeredSlides: true,
        slidesOfsetBefore: 0,
        spaceBetween: '10%',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1025: {
                slidesPerView: 1,                
            },
        },
    });

    new Swiper ('.section4_swiper', {
        loop: true,
        slidesPerView: 3,
		centeredSlides: true,
        slidesOfsetBefore: 0,
        spaceBetween: '10%',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },        
    });
    new Swiper ('.section4_swiper_m', {
        loop: true,
        slidesPerView: 1,
		centeredSlides: true,
        slidesOfsetBefore: 0,
        spaceBetween: '10%',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },        
    });
    
    new Swiper ('.section6_swiper', {
        loop: true,
        slidesPerView: 3,
		centeredSlides: true,
        slidesOfsetBefore: 0,
        spaceBetween: '10%',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },        
    });

});

    





