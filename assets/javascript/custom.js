$(document).ready(function () {

  // $(document).on('mouseenter', '.icon-box', function () {
  //   $(this).find(".desc-Info").toggleClass("is-open");
  // });


  $('.faq-list > li > .faq-answer').hide();

  $('.faq-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".faq-answer").slideUp();
    } else {
      $(".faq-list > li.active .faq-answer").slideUp();
      $(".faq-list > li.active").removeClass("active");
      $(this).addClass("active").find(".faq-answer").slideDown();
    }
    return false;
  });

  $('.portfolio-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1
        }
      }
    ]
  });




  $('.testimonial-carousel').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});

