$(document).ready(function () {
  $('.product-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.slider-blk').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
});


$('.slick-arrow').html('');
$('.slick-prev').append(`<img src="img/category/img_arrow_prev.png" alt="previous">`);
$('.slick-next').append(`<img src="img/category/img_arrow_next.png" alt="next">`);
$('.slick-dots li button').html("");
})
