/*$(window).scroll(function(){
  if ($(window).scrollTop() >= 80) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  };
}); 
*/
$(function(){
  $("#menu-trigger").click(function(){
    $(".header").toggleClass('mobimenu');
    mobiMenu();
  });
});

function sizeContent() {
  var windowWidth = $(window).width();
  if (windowWidth > 767) {
    $(".header").removeClass('mobimenu');
    $(".menu > li" ).find( "ul" ).removeAttr("style");
  };
};
$(document).ready(sizeContent);
$(window).resize(sizeContent);

function mobiMenu() {
  $(".mobimenu .menu > li" ).find( "ul" ).parent("li").addClass("color" );
  $(".mobimenu .menu li.color > a").append('<span class="arrow"></span>');
  $('.mobimenu .menu li.color > a .arrow').closest('li').removeClass("open" );
  $('.mobimenu .menu li.color > a .arrow').click(function(e) {
    e.preventDefault();
    $(this).closest('li').toggleClass("open" ).siblings().removeClass("open" );
    $(this).closest('.menu').siblings().find('li').removeClass("open" );
    $(this).closest('li').siblings().find('> ul').slideUp(300);
    $(this).closest('.menu').siblings().find('li > ul').slideUp(300);
    $(this).closest('li').find('> ul').slideToggle(300);
  })
};


$(document).ready(function () {
  mobiMenu();
  $('[data-fancybox]').fancybox();  
});