$(document).ready(function() {
  /* Push the body and the nav over by 285px over */
  $('.fa-bars').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);
  });
  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);
  });
});
