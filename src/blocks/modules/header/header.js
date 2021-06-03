import 'slick-carousel';
import $ from 'jquery';

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

$(document).on('click', '.calc-option', function (e) {
  e.preventDefault();
  $(this).addClass('active').siblings('.active').removeClass('active');
  calcPrice();
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

$(document).on('click', '.calc-one .select__item', function () {
  let temp = $('.calc-one select').val();
  let tempName = $(this).text();
  if (temp) {
    fetch(location.href + '?templateId=' + temp)
      .then(response => {
        return response.text();
      })
      .then(data => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, 'text/html');

        document.querySelector('.calc__info').remove();

        document
          .querySelector('.calc__nav')
          .insertAdjacentElement('afterend', doc.querySelector('.calc__info'));

        initSelects();
        $('.calc-select__size .select__value').text(tempName);

        moveStep('next');
      });
  }
});

if ($('.calc').length && location.hash.includes('step')) {
  let step = parseInt(location.hash.match(/\d/)[0]);
  if (step && step <= $('.calc__nav-item').length) {
    $('.calc__nav-item.active').removeClass('active');
    $('.calc__nav-item:nth-child(' + step + ')').addClass('active');
    console.log('a.active ~ *');
    for (let i = 1; i < step; i++) {
      $('.calc__nav-item:nth-child(' + i + ')').addClass('pass');
    }
    $('.calc__step.active').removeClass('active').hide();
    $('.calc__step:nth-child(' + step + ')')
      .addClass('active')
      .show();
  }
}

$(document).on('click', '.calc-move__next', function (e) {
  e.preventDefault();
  if ($('.calc__step.active .calc-option').length) {
    if ($('.calc__step.active .calc-option.active').length) {
      moveStep('next');
    } else {
      $('.calc__step.active .calc-text').addClass('calc-text_error');
    }
  } else {
    moveStep('next');
  }
});

$(document).on('click', '.calc-move__prev', function (e) {
  e.preventDefault();
  moveStep('prev');
});

function moveStep(to) {
  $('.calc-text_error').removeClass('calc-text_error');
  console.log('movestep', to);
  if (to == 'next') {
    if ($('.calc__nav-item.active').next().length) {
      $('.calc__step.active')
        .slideToggle()
        .removeClass('active')
        .next()
        .slideToggle()
        .addClass('active');
      $('.calc-move__prev.disable').removeClass('disable');
      $('.calc__nav-item.active')
        .removeClass('active')
        .addClass('pass')
        .next()
        .addClass('active');
      if (!$('.calc__nav-item.active').next().length) {
        $('.calc-move__next').addClass('disable');
      }
    }
  } else if (to == 'prev') {
    if ($('.calc__nav-item.active').prev().length) {
      $('.calc__step.active')
        .slideToggle()
        .removeClass('active')
        .prev()
        .slideToggle()
        .addClass('active');
      $('.calc-move__next.disable').removeClass('disable');
      $('.calc__nav-item.active')
        .removeClass('active')
        .prev()
        .addClass('active')
        .removeClass('pass');
      if (!$('.calc__nav-item.active').prev().length) {
        $('.calc-move__prev').addClass('disable');
      }
    }
  }

  // $('.calc-move__item').on('click', function () {
  //   if (!$(this).hasClass('disable')) {
  //     if (
  //       $(this).hasClass('calc-move__prev') &&
  //       $('.calc__nav-item.active').prev().length
  //     ) {
  //       $('.calc__nav-item.active')
  //         .removeClass('active')
  //         .prev()
  //         .addClass('active');
  //     } else if (
  //       $(this).hasClass('calc-move__next') &&
  //       $('.calc__nav-item.active').next().length
  //     ) {
  //       $('.calc__nav-item.active')
  //         .removeClass('active')
  //         .next()
  //         .addClass('active');
  //     }
  //     if ($('.calc__nav-item.active').prev().length) {
  //       $('.calc-move__prev.disable').removeClass('disable');
  //     } else {
  //       $('.calc-move__prev').addClass('disable');
  //     }
  //     if ($('.calc__nav-item.active').next().length) {
  //       $('.calc-move__next.disable').removeClass('disable');
  //     } else {
  //       $('.calc-move__next').addClass('disable');
  //     }
  //   }
  // });
}

$(document).on('click', '.calc-five__select .select__item', function () {
  calcPrice();
});

$(document).on('input', '.range-slider__input', function () {
  console.log($(this).val());
  calcPrice();
});

function calcPrice() {
  let price = 0;
  let coef = 1;
  let singlePrice = 0;
  $('.calc-option.active').each((i, el) => {
    if ($(el).data('price')) {
      price += $(el).data('price');
    }
    if ($(el).data('coef')) {
      coef *= $(el).data('coef');
    }
    if ($(el).data('single-price')) {
      singlePrice += $(el).data('single-price');
    }
    console.log('coefbefore', $(el).data('coef'));
    console.log('coef', coef);
  });

  console.log('A', price, coef);

  $('.calc-five__select').each((i, el) => {
    price += parseFloat($(el).find('select').val());
    if ($($(el).find('select')[0].selectedOptions[0]).data('coef')) {
      coef *= $($(el).find('select')[0].selectedOptions[0]).data('coef');
    }
    if ($($(el).find('select')[0].selectedOptions[0]).data('single-price')) {
      singlePrice += $($(el).find('select')[0].selectedOptions[0]).data(
        'single-price'
      );
    }
  });

  console.log('B', price, coef);

  $('.calc-six__price-value').text(
    parseInt(
      price * coef * parseInt($('.range-slider__input').val()) + singlePrice
    )
  );

  $('.calc-six__range-value').text(parseInt($('.range-slider__input').val()));
}

// $('.calc-one .select__items').on('click', function (e) {
//   console.log($('.calc-one select').val());
// });
