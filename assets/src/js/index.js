$(document).ready(function() {

  //mobile navigation
  $('.heder-button__menu').click(function(){
    $(this).toggleClass('open');
    $('.heder-menu').toggleClass('open');
    $('.overlley').toggleClass('d-block');
  });
});

//slider

$(document).ready(function(){
  $('.block-bilder__slider__list').slick({
    dots: true,
    slidesToShow: 1,
    nextArrow: '<div class="swiper-button-next"><img src="./img/arrow-left.png" alt="arrow-left"></div>',
    prevArrow: '<div class="swiper-button-prev"><img src="./img/arrow-right.png" alt="arrow-right"></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 3,
          nextArrow: false,
          prevArrow: false,
        }
      }
    ]
  });
});