$(document).ready(function() {
  $(".center-slider").slick({
    centerMode: true,
    arrows: true,
    centerPadding: "120px",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    prevArrow: "<div class='arrow leftarrowapp'></div>",
    nextArrow: "<div class='arrow rightarrowapp'></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
