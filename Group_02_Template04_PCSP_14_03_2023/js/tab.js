$(document).ready(function () {
  $('.tab-bar li:first-child').addClass('active');
  $('.panel').hide();
  $('.panel:first-child').show();

  $('.tab-bar li').click(function () {
    $('.tab-bar li').removeClass('active');
    $(this).addClass('active');
    $('.panel').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  })
})
