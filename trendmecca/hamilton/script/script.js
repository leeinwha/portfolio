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
 
 
     
     
    
     
 
 });
 
     
 
 
 
 
 
 