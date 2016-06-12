$( document ).ready(function() {
  $('.menu-wrap').click(function() {
    $('body').toggleClass('nav-open');
  });

  $('.menu-cover').click(function() {
    $('body').removeClass('nav-open');
  });
});
