/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "../node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

 // Sliders

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.clients__slider').slick({
  slidesToShow: 5,
  prevArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.clients__nav-prev'),
  nextArrow: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.clients__nav-next'),
  infinite: true,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pl-banner').slick({
  arrows: false,
  dots: true,
  dotsClass: 'pl-banner__dots'
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__gallery-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pdp__gallery-nav'
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__gallery-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.pdp__gallery-for',
  dots: false,
  arrows: false,
  // centerMode: true,
  focusOnSelect: true
}); // Events

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.nav__item-dropdown').on('click', function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() < 992) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('active').find('.nav__dropdown').slideToggle();
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.calc-option', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active').siblings('.active').removeClass('active');
  calcPrice();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.sidebar-cats__toggler').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).siblings('.sidebar-cats__nav').slideToggle();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('sidebar-cats__toggler_collapse');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__tabs-toggler').on('click', function (e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active').siblings('.active').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.pdp__tab.active').slideToggle(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('active');
  }).siblings().slideToggle().addClass('active');
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.burger').on('click', toggleMobileNav);
jquery__WEBPACK_IMPORTED_MODULE_1___default()('.burger-overlay').on('click', toggleMobileNav);

function toggleMobileNav(e) {
  e.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').toggleClass('overflow-hide');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.burger').toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.burger-overlay').toggleClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.nav').toggleClass('nav_open');
} // Range


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-six__range-value').text(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.range-slider__input').val()); // Range

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-six__range-value').text(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.range-slider__input').val()); // Update the current slider value (each time you drag the slider handle)

jquery__WEBPACK_IMPORTED_MODULE_1___default()('.range-slider__input').on('input', function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-six__range-value').text(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val());
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.calc-one .select__item', function () {
  var temp = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-one select').val();
  var tempName = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).text();

  if (temp) {
    fetch(location.href + '?templateId=' + temp).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(data, 'text/html');
      document.querySelector('.calc__info').remove();
      document.querySelector('.calc__nav').insertAdjacentElement('afterend', doc.querySelector('.calc__info'));
      initSelects();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-select__size .select__value').text(tempName);
      moveStep('next');
    });
  }
});

if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc').length && location.hash.includes('step')) {
  var step = parseInt(location.hash.match(/\d/)[0]);

  if (step && step <= jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item').length) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item:nth-child(' + step + ')').addClass('active');
    console.log('a.active ~ *');

    for (var i = 1; i < step; i++) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item:nth-child(' + i + ')').addClass('pass');
    }

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active').removeClass('active').hide();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step:nth-child(' + step + ')').addClass('active').show();
  }
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.calc-move__next', function (e) {
  e.preventDefault();

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active .calc-option').length) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active .calc-option.active').length) {
      moveStep('next');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active .calc-text').addClass('calc-text_error');
    }
  } else {
    moveStep('next');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.calc-move__prev', function (e) {
  e.preventDefault();
  moveStep('prev');
});

function moveStep(to) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-text_error').removeClass('calc-text_error');
  console.log('movestep', to);

  if (to == 'next') {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').next().length) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active').slideToggle().removeClass('active').next().slideToggle().addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-move__prev.disable').removeClass('disable');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').removeClass('active').addClass('pass').next().addClass('active');

      if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').next().length) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-move__next').addClass('disable');
      }
    }
  } else if (to == 'prev') {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').prev().length) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__step.active').slideToggle().removeClass('active').prev().slideToggle().addClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-move__next.disable').removeClass('disable');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').removeClass('active').prev().addClass('active').removeClass('pass');

      if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc__nav-item.active').prev().length) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-move__prev').addClass('disable');
      }
    }
  } // $('.calc-move__item').on('click', function () {
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

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.calc-five__select .select__item', function () {
  calcPrice();
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('input', '.range-slider__input', function () {
  console.log(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val());
  calcPrice();
});

function calcPrice() {
  var price = 0;
  var coef = 1;
  var singlePrice = 0;
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-option.active').each(function (i, el) {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('price')) {
      price += jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('price');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('coef')) {
      coef *= jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('coef');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('single-price')) {
      singlePrice += jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('single-price');
    }

    console.log('coefbefore', jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).data('coef'));
    console.log('coef', coef);
  });
  console.log('A', price, coef);
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-five__select').each(function (i, el) {
    price += parseFloat(jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).find('select').val());

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).find('select')[0].selectedOptions[0]).data('coef')) {
      coef *= jquery__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).find('select')[0].selectedOptions[0]).data('coef');
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).find('select')[0].selectedOptions[0]).data('single-price')) {
      singlePrice += jquery__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).find('select')[0].selectedOptions[0]).data('single-price');
    }
  });
  console.log('B', price, coef);
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-six__price-value').text(parseInt(price * coef * parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.range-slider__input').val()) + singlePrice));
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.calc-six__range-value').text(parseInt(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.range-slider__input').val()));
} // $('.calc-one .select__items').on('click', function (e) {
//   console.log($('.calc-one select').val());
// });

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.initSelects = function () {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "select": */

  x = document.getElementsByClassName('select');
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement('DIV');
    a.classList.add('select__value');
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */

    b = document.createElement('DIV');
    b.classList.add('select__items');
    b.classList.add('select__items_hide');

    for (j = 0; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement('DIV');
      c.classList.add('select__item');
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener('click', function (e) {
        /* When an item is clicked, update the original select box,
          and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        sl = s.length;
        h = this.parentNode.previousSibling;

        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('select__item_selected');
            yl = y.length;

            for (k = 0; k < yl; k++) {
              y[k].classList.remove('select__item_selected');
            }

            this.classList.add('select__item_selected');
            break;
          }
        }

        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select__items_hide');
      this.classList.toggle('select__value_active');
    });
  }
};

initSelects();

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName('select__items');
  y = document.getElementsByClassName('select__value');
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select__value_active');
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select__items_hide');
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */


document.addEventListener('click', closeAllSelect);

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map