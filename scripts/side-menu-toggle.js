$( document ).ready(function() {
  // $(".nav").hide();
  $('.burger-wrap').click(function() {
    $('body').toggleClass('nav-open');
    // $(".nav").show();
  });

  $('.menu-cover').click(function() {
    $('body').removeClass('nav-open');
    $(".nav").hide();
  });
});
