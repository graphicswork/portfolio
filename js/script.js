$(function() {
  $("#menu-trigger").click(function() {
      $(".leftbar").toggleClass('mobimenu');
  });
});

function sizeContent() {
  var windowWidth = $(window).width();
  if (windowWidth > 767) {
      $(".leftbar").removeClass('mobimenu');
      $(".menu > li").find("ul").removeAttr("style");
  }
};
$(document).ready(sizeContent);
$(window).resize(sizeContent);

$(document).ready(function() {
  //$("[data-fancybox]").fancybox({clickSlide : false});
  $("[data-fancybox]").fancybox();

  $(function() {
      $("#menu-trigger").click(function() {
          $(".leftbar").toggleClass('mobimenu');
      });
  });

  function sizeContent() {
      var windowWidth = $(window).width();
      if (windowWidth > 767) {
          $(".leftbar").removeClass('mobimenu');
          $(".menu > li").find("ul").removeAttr("style");
      }
  };
  $(document).ready(sizeContent);
  $(window).resize(sizeContent);

  //$("[data-fancybox]").fancybox({clickSlide : false});
  $("[data-fancybox]").fancybox();   

});
