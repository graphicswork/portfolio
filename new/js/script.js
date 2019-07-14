$(document).ready(function() {
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

  $(".menu a ").click(function() {
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

  // for portfolio
  size_li = $(".portfolio > article").size();
  x = 4;
  $('.portfolio > article:lt(' + x + ')').show();
  $('#loadMore').click(function() {
      x = (x + 4 <= size_li) ? x + 4 : size_li;
      $('.portfolio > article:lt(' + x + ')').show('slow');
      $('#showLess').show();
      $('#viewall').show();
      if (x == size_li) {
          $('#loadMore').hide();
      }
  });
  $('#showLess').click(function() {
      x = (x - 4 < 0) ? 3 : x - 4;
      $('.portfolio > article').not(':lt(' + x + ')').hide('slow');
      $('#loadMore').show();
      $('#showLess').show();
      $('#viewall').show();
      if (x == 4) {
          $('#showLess').hide();
          $('#viewall').hide();
      }
  });

});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 80) {
      $('.header').addClass('fixed');
  } else {
      $('.header').removeClass('fixed');
  };
});


$(function() {
  $("#menu-trigger").click(function() {
      $(".header").toggleClass('mobimenu');
    //  mobiMenu();
  });
});

function sizeContent() {
  var windowWidth = $(window).width();
  if (windowWidth > 1023) {
      $(".header").removeClass('mobimenu');
      $(".menu > li").find("ul").removeAttr("style");
  };
};
$(document).ready(sizeContent);
$(window).resize(sizeContent);
/*
function mobiMenu() {
  $(".mobimenu .menu > li").find("ul").parent("li").addClass("color");
  $(".mobimenu .menu li.color > a").append('<span class="arrow"></span>');
  $('.mobimenu .menu li.color > a .arrow').closest('li').removeClass("open");
  $('.mobimenu .menu li.color > a .arrow').click(function(e) {
      e.preventDefault();
      $(this).closest('li').toggleClass("open").siblings().removeClass("open");
      $(this).closest('.menu').siblings().find('li').removeClass("open");
      $(this).closest('li').siblings().find('> ul').slideUp(300);
      $(this).closest('.menu').siblings().find('li > ul').slideUp(300);
      $(this).closest('li').find('> ul').slideToggle(300);
  })
}; */
$(document).ready(function() {
 // mobiMenu();
  $('[data-fancybox]').fancybox();

});