$(document).ready(function() {
  /* Push the .menu by 285px over */
  $('.fa-bars').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);
  });
  /* Then push it back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);
  });
});
