import 'slick-carousel';

// Sliders
$('.clients__slider').slick({
  slidesToShow: 5,
  prevArrow: $('.clients__nav-prev'),
  nextArrow: $('.clients__nav-next'),
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.pl-banner').slick({
  arrows: false,
  dots: true,
  dotsClass: 'pl-banner__dots'
});

$('.pdp__gallery-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdp__gallery-nav'
});

$('.pdp__gallery-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdp__gallery-for',
  dots: false,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true
});

// Events
$('.nav__item-dropdown').on('click', function (e) {
  if ($(window).width() < 992) {
    e.preventDefault();
    $(this).toggleClass('active').find('.nav__dropdown').slideToggle();
  }
});

$('.calc__nav-item').on('click', function () {
  $('.calc__nav-item.active').removeClass('active');
  $(this).addClass('active');
  if ($('.calc__nav-item.active').prev().length) {
    $('.calc-move__prev.disable').removeClass('disable');
  } else {
    $('.calc-move__prev').addClass('disable');
  }
  if ($('.calc__nav-item.active').next().length) {
    $('.calc-move__next.disable').removeClass('disable');
  } else {
    $('.calc-move__next').addClass('disable');
  }
});

$('.calc-option').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active').siblings('.active').removeClass('active');
});

$('.calc-move__item').on('click', function () {
  if (!$(this).hasClass('disable')) {
    if (
      $(this).hasClass('calc-move__prev') &&
      $('.calc__nav-item.active').prev().length
    ) {
      $('.calc__nav-item.active')
        .removeClass('active')
        .prev()
        .addClass('active');
    } else if (
      $(this).hasClass('calc-move__next') &&
      $('.calc__nav-item.active').next().length
    ) {
      $('.calc__nav-item.active')
        .removeClass('active')
        .next()
        .addClass('active');
    }
    if ($('.calc__nav-item.active').prev().length) {
      $('.calc-move__prev.disable').removeClass('disable');
    } else {
      $('.calc-move__prev').addClass('disable');
    }
    if ($('.calc__nav-item.active').next().length) {
      $('.calc-move__next.disable').removeClass('disable');
    } else {
      $('.calc-move__next').addClass('disable');
    }
  }
});

$('.sidebar-cats__toggler').on('click', function (e) {
  e.preventDefault();
  $(this).siblings('.sidebar-cats__nav').slideToggle();
  $(this).toggleClass('sidebar-cats__toggler_collapse');
});

$('.pdp__tabs-toggler').on('click', function (e) {
  e.preventDefault();
  $(this).addClass('active').siblings('.active').removeClass('active');
  $('.pdp__tab.active')
    .slideToggle(function () {
      $(this).removeClass('active');
    })
    .siblings()
    .slideToggle()
    .addClass('active');
});

$('.burger').on('click', toggleMobileNav);
$('.burger-overlay').on('click', toggleMobileNav);

function toggleMobileNav(e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hide');
  $('.burger').toggleClass('active');
  $('.burger-overlay').toggleClass('active');
  $('.nav').toggleClass('nav_open');
}

// Range
$('.calc-six__range-value').text($('.range-slider__input').val());
// Range
$('.calc-six__range-value').text($('.range-slider__input').val());

// Update the current slider value (each time you drag the slider handle)
$('.range-slider__input').on('input', function () {
  $('.calc-six__range-value').text($(this).val());
});
