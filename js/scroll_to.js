$(function() { 
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $($(this).attr('href')),
      offset = 100;

    if(target.length ){
      $('html, body').animate({
        scrollTop: target.offset().top - offset
      }, 1000);
    }
  });
});