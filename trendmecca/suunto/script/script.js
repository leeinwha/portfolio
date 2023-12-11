$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
    let panels = gsap.utils.toArray(".panel");
    
    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", 
            pin: true, 
            pinSpacing: false
            
        });
    });
    
    ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
                let panelStarts = tops.map(st => st.start), 
                    snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
            },
            duration: 0.5
        }
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",         
            start: "top 50%", 
            end: "top 50%", 
            scrub: 0.5,         
            onLeave: function(){
                console.log('end');
            }
        }
    })   
        .to('.sec2_obj1', {duration: 0.5,  opacity: 1, y: -100})    
        .to('.sec2_obj2', {duration: 0.5, opacity: 1, y: -100})
        .to('.sec2_obj3', {duration: 0.5, opacity: 1, y: -100})
        
    $(".sec4_obj1").mouseenter(function(){
        $('.sec4_obj1').addClass('on')
    });
    $(".sec4_obj1").mouseleave(function(){
        $('.sec4_obj1').removeClass('on')
    });
    $(".sec4_obj2").mouseenter(function(){
        $('.sec4_obj2').addClass('on')
    });
    $(".sec4_obj2").mouseleave(function(){
        $('.sec4_obj2').removeClass('on')
    });
    $(".sec4_obj3").mouseenter(function(){
        $('.sec4_obj3').addClass('on')
    });
    $(".sec4_obj3").mouseleave(function(){
        $('.sec4_obj3').removeClass('on')
    });
    $(".sec4_obj4").mouseenter(function(){
        $('.sec4_obj4').addClass('on')
    });
    $(".sec4_obj4").mouseleave(function(){
        $('.sec4_obj4').removeClass('on')
    });    

    new Swiper ('.slide_swiper', {
        loop: true,        
        speed:800,
        autoplay: {
            delay: 2000,
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

    new Swiper ('.fade_swiper', {
        loop: true,        
        speed:800,
        centeredSlides : true,
        effect : 'fade',
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
    });

    new Swiper ('.section7_swiper', {
        loop: true,        
        speed:800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1025: {
                slidesPerView: 2,                
            },
            300: {
                slidesPerView: 1,                
            },
        },                
    });

    $('#yearend_list a').click(function(e) {
		e.preventDefault();
		var curLink = $(this);
		var scrollPoint = $(curLink.attr('href')).position().top;
		$('body,html').animate({ scrollTop: scrollPoint }, 750); 
	});

    $(document).bind("scroll", onScroll);
    
    //smoothscroll
    $('#yearend_list a[href^="#"]').click(function (e) {
        e.preventDefault();        
        $('#yearend_list a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).bind("scroll", onScroll);
        });
    });    
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#yearend_list a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top + 0 <= scrollPos && refElement.position().top + 0 + refElement.height() > scrollPos) {
                $('#yearend_list a').removeClass("active");
                currLink.addClass("active");
            }else{
                currLink.removeClass("active");
            }
        });
    }

});