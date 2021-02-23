import "slick-carousel";


// Sliders 
$(".clients__slider").slick({
  slidesToShow: 5,
  prevArrow: $(".clients__nav-prev"),
  nextArrow: $(".clients__nav-next"),
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
})

$(".pl-banner").slick({
  arrows: false,
  dots: true,
  dotsClass: "pl-banner__dots"
})

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

$(".nav__item-dropdown").on("click", function (e) {
  if ($(window).width() < 992) {
    e.preventDefault();
    $(this).toggleClass("active").find('.nav__dropdown').slideToggle();
  }
})

// Events
$(".sidebar-cats__toggler").on("click", function (e) {
  e.preventDefault();
  $(this).siblings(".sidebar-cats__nav").slideToggle();
  $(this).toggleClass("sidebar-cats__toggler_collapse");
})

$(".pdp__tabs-toggler").on("click", function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings(".active").removeClass('active');
  $('.pdp__tab.active').slideToggle(function () {
    $(this).removeClass('active')
  }).siblings().slideToggle().addClass('active');
})

$(".burger").on("click", toggleMobileNav);
$(".burger-overlay").on("click", toggleMobileNav);



function toggleMobileNav(e) {
  e.preventDefault();
  $("body").toggleClass('overflow-hide');
  $(".burger").toggleClass("active");
  $(".burger-overlay").toggleClass("active");
  $(".nav").toggleClass("nav_open");
}