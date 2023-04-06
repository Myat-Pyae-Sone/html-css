$(document).ready(function () {
  $('.acc-blk .acc:nth-child(2) .acc-head').addClass('active');
  $('.acc-blk .acc:nth-child(2) .acc-content').slideDown();
  $('.acc-head').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.acc-content').slideUp();
      $(this).removeClass('active');
    }
    else {
      $('.acc-content').slideUp();
      $('.acc-head').removeClass('active');
      $(this).siblings('.acc-content').slideToggle();
      $(this).toggleClass('active');
    }
  });
});





