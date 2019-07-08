  $(document).ready(function(){
    $("body").addClass('home');
    var typed = new Typed(".element", {
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      //smartBackspace:false,
      loop: true,
      showCursor: true,
      strings: ["Designing Logo", "Creating Layouts"]
    });
    
    $(".menu a ").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 600);
    return false;
  });
  /*  $('.testmonials').owlCarousel({
      items:1,
      loop:true,
      margin:0,
      nav:true,
      autoplay:true,
      smartSpeed:1000,
      autoplayTimeout:9000,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        }
      }
    }); */    
  });