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
  if ($(window).scrollTop() >= 100) {
      $('.header').addClass('fixed');
      $('.scrollup').addClass('up');
  } else {
      $('.header').removeClass('fixed');
      $('.scrollup').removeClass('up');
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

$(document).ready(function() {
 // mobiMenu();
  $('[data-fancybox]').fancybox();
  $.scrollIt({
    upKey:38,
    downKey:40,
    easing:"linear",
    scrollTime:600,
    activeClass:"active",
    onPageChange:null,
    topOffset:-54
  });
});