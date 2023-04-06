$(document).ready(function () {
  $('nav a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    }
  });
  
  $('.menu-trigger').click(function () {
    var leftVal = 0;
    if($(this).hasClass('active')){
      leftVal = -100 + "%";
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }

    $('nav').stop().animate({
      left: leftVal
    }, 300);
  })
})
