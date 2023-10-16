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


// pricing plan open
$(document).ready(function(){
    $(function() {                        
      $(".right-q li").click(function() {   
        $('li').removeClass("active");   
        $(this).addClass("active");       
      });
    });
}); 

$(document).ready(function(){
  // Show the first div by default
  $('#div1').show();

  // Set up click event handlers for toggle buttons
  $('.right-q li').on('click', function(){
      var target = $(this).data('target');
      $('.toggle-div').not('#' + target).hide(); // Hide other divs
      $('#' + target).toggle(); // Toggle the visibility of the target div
  });
});

$(function() {                       //run when the DOM is ready
  $(".see-more").click(function() {  //use a class, since your ID gets mangled
    $('.plan-card').toggleClass("open");      //add the class to the clicked element
  });
});

// why choose us
$(document).ready(function(){
    $(function() {                        
      $(".card-choose").hover(function() {   
        $('.card-choose').removeClass("active");     
        $(this).addClass("active");     
      });
    });
}); 

// side tab
$(document).ready(function(){
    $(function() {                        
      $(".create").click(function() {        
        $(this).addClass("active");  
        $('.tab1').addClass("active");  
        $('.tab2, .tab3, .shortlist, .assess').removeClass("active");  
      });

      $(".assess").click(function() {        
        $(this).addClass("active");  
        $('.tab2').addClass("active");  
        $('.tab1, .tab3, .create, .shortlist').removeClass("active");  
      });

      $(".shortlist").click(function() {        
        $(this).addClass("active");  
        $('.tab3').addClass("active");  
        $('.tab1, .tab2, .create, .assess').removeClass("active");  
      });
    });
}); 

const swiper = new Swiper('.swiper', {
    // Optional parameters 
    loop: true,
    delay:100,
    autoplay:true,   
    speed:1500,
    effect: 'creative',
    creativeEffect: {
        prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -900], 
        },
        next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
        },
    },
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

   
  });



const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: true,
    smoothTouch: false,
   
  });


lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0)

gsap.ticker.lagSmoothing(0)
  
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1, 
      trigger: ".skills-toven",
      start: "top 100%",
      endTrigger: ".about-us",
      end: "bottom ",
    },
  }); 
  

  tl.from(".list-row.one li", {
    x: 0
  });

  const td = gsap.timeline({
    scrollTrigger: {
      scrub: 1, 
      trigger: ".skills-toven",
      start: "top 100%",
      endTrigger: ".about-us",
      end: "bottom ",
    },
  }); 
  
  td.from(".list-row.two li", {
    x: -100
  });


  const th = gsap.timeline({
    scrollTrigger: {
      scrub: 1, 
      trigger: ".slider-swipe",
      start: "bottom 50%",
      endTrigger: ".about-us",
      end: "bottom",
    },
  }); 

  
   
 

   

let sections = gsap.utils.toArray(".card-wp-troven");

sections.forEach((section) => {
  // scoped selector - select elements inside this section.
  let q = gsap.utils.selector(section)
  let tsd = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "sine.out"
    },
    scrollTrigger: {
      trigger: section,
      fastScrollEnd: true,
      // markers: true,
      start: "top bottom",
      end: "top 80%", // fastScrollEnd triggers as we leave the section so make sure you have an end position set low down enough to see the impact.
      toggleActions: "play none none reverse",
    }
  });
  tsd.from(q('.troven-card'), {
    scale: 0.8, 
  })
  .from(q('.content'), {
    y: 0, 
  },'<50%')
});



const tna = gsap.timeline({
    scrollTrigger: {
      scrub: 2, 
      trigger: ".troven-number",
      start: "bottom 95%",
      endTrigger: ".slider-swipe",
      end: "top 100%",
    },
  }); 
  
  tna.from(".troven-number .number-first", {
    x: -60
  });


  const tnb = gsap.timeline({
    scrollTrigger: {
      scrub: 2, 
      trigger: ".troven-number",
      start: "bottom 100%",
      endTrigger: ".slider-swipe",
      end: "top 100%",
    },
  }); 
  
  tnb.from(".troven-number .number-sec", {
    x: -60, 
  }); 


  const tnc = gsap.timeline({
    scrollTrigger: {
      scrub: 2, 
      trigger: ".troven-number",
      start: "bottom 100%",
      endTrigger: ".slider-swipe",
      end: "top 100%"
    },
  }); 
  
  tnc.from(".troven-number .number-third", {
    x: 60,
  });


  const tnd = gsap.timeline({
    scrollTrigger: {
      scrub: 2, 
      trigger: ".troven-number",
      start: "bottom 95%",
      endTrigger: ".slider-swipe",
      end: "top 100%"
    },
  }); 
  
  tnd.from(".troven-number .number-last", {
    x: 70
  });


  const tns = gsap.timeline({
    scrollTrigger: {
      scrub: 1, 
      trigger: ".slider-swipe",
      start: "top 100%",
      endTrigger: ".skills-toven",
      end: "top 100%"
    },
  }); 
  
  tns.from(".slider-swipe", {
    y: 95,
    scale: 0.8,
  });


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


let logo = gsap.utils.toArray(".logo-row li");

logo.forEach((section) => {
  // scoped selector - select elements inside this section.
  let q = gsap.utils.selector(section)
  let sd = gsap.timeline({
    delay: 1,

    defaults: {
      duration: 2, 
    },
    scrollTrigger: {
        scrub: 1, 
      trigger: '.logo-wp-list',
      fastScrollEnd: true,
      // markers: true,
      start: "top bottom",
      end: "top 80%", // fastScrollEnd triggers as we leave the section so make sure you have an end position set low down enough to see the impact.
      toggleActions: "play none none reverse",
    }
  });
  sd.from(q('img'), {
    scale: 0.8, 
  })  

  
});

 

   
 
 
 
   



 

  
 

   

