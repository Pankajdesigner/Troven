// header fix
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".sticky-top").addClass("scrolling");
    } else {
        $(".sticky-top").removeClass("scrolling");
    }
});

// loader
$(document).ready(function(){
    $(function() {         
        // $(".trovenloader").fadeOut("slow");           
        $(".trovenloader").animate({
            opacity: '0.8',
            height: '0vh'   
        }, 500);
      
    });
}); 


// menu toggle
$(document).ready(function(){
  $(".navbar-toggler").click(function() {        
    $(this).toggleClass("active");  
  });
}); 

 
// smooth scroll
const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: true,
    smoothTouch: false,
});

lenis.on('scroll', ScrollTrigger.update);



// footer animation
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0)  
  const tnf = gsap.timeline({
    scrollTrigger: {
      scrub: 1, 
      trigger: "footer",
      start: "top 100%",
      endTrigger: "footer",
      end: "bottom 100%"
    },
  }); 
  
  tnf.from("footer", {
    y: -95
  });

 

   
 
 
 
   



 

  
 

   

