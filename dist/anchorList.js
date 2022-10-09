/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/anchorList.scss":
/*!*****************************!*\
  !*** ./src/anchorList.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ (function(module) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ (function(module) {

module.exports = require("jquery");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anchorFun": function() { return /* binding */ anchorFun; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anchorList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchorList.scss */ "./src/anchorList.scss");





var AnchorFun = /*#__PURE__*/function () {
  function AnchorFun() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnchorFun);

    this.$header = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.com-header');
    this.$anchorList = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.category-list');
    this.$anchorContent = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.anchor-content-list');
    this.anchorLinkEle = 'a[href^="#"]';
    this.scrollTop = 0;
    this.anchorFunInit();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnchorFun, [{
    key: "anchorFunInit",
    value: function anchorFunInit() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('load', function () {
        _this.setAnchorToTheTop();

        _this.HandleAnchorEvents();

        _this.scrollFun();
      });
    }
  }, {
    key: "srollAnimate",
    value: function srollAnimate(hashId) {
      this.scrollTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()(hashId).offset().top - (!this.$header.length ? 0 : this.$header.height()) - (!this.$header.length ? 0 : this.$header.position().top) - 40;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
        scrollTop: this.scrollTop
      }, 100);
    }
  }, {
    key: "setAnchorToTheTop",
    value: function setAnchorToTheTop(hashId) {
      if (hashId) {
        this.srollAnimate(hashId);
      } else {
        var id = window.location.hash;

        if (id && jquery__WEBPACK_IMPORTED_MODULE_2___default()(id).length) {
          this.srollAnimate(id);
        }
      }
    }
  }, {
    key: "HandleAnchorEvents",
    value: function HandleAnchorEvents() {
      var _this2 = this;

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.anchorLinkEle).click(function (el) {
        _this2.setAnchorToTheTop(jquery__WEBPACK_IMPORTED_MODULE_2___default()(el.currentTarget).attr('href'));
      });
    }
  }, {
    key: "clearAchorActive",
    value: function clearAchorActive(anchorTitleArr) {
      var _this3 = this;

      anchorTitleArr.each(function (index, el) {
        if (index !== _this3.activeAchorIndex) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("a[href='".concat(jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).attr('href'), "']")).removeClass('active');
        }
      });
    }
  }, {
    key: "setAnchorActive",
    value: function setAnchorActive() {
      var _this4 = this;

      if (!this.$anchorList.find(this.anchorLinkEle).length) {
        return;
      }

      var headerHeight = !this.$header.length ? 1 : this.$header.outerHeight();
      var headerPositionTop = !this.$header.length ? 1 : this.$header.position().top;
      var winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var anchorTitleArr = this.$anchorList.find('a[href^="#"]');
      var active = false;
      anchorTitleArr.each(function (index, el) {
        var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).attr('href');
        var anchorTitleTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()(id).offset().top - winScrollTop - headerPositionTop - headerHeight;

        if (anchorTitleTop < 40 && anchorTitleTop > 0) {
          active = true;
          _this4.activeAchorIndex = index;
          _this4.activeAchorId = id;
          jquery__WEBPACK_IMPORTED_MODULE_2___default()("a[href='".concat(_this4.activeAchorId, "']")).addClass('active');

          _this4.clearAchorActive(anchorTitleArr);
        }
      });

      if (!active && !this.activeAchorIndex && winScrollTop) {
        this.$anchorList.find(this.anchorLinkEle).first().addClass('active');
      }

      setTimeout(function () {
        if (typeof winScrollTop === 'undefined') {
          _this4.activeAchorIndex = null;

          _this4.clearAchorActive(anchorTitleArr);

          _this4.$anchorList.find(_this4.anchorLinkEle).first().addClass('active');
        }
      }, 301);
    }
  }, {
    key: "scrollFun",
    value: function scrollFun() {
      var _this5 = this;

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on('load scroll', function (el) {
        _this5.isPositionTop = false;

        _this5.scrollBottom();

        if (el.type === 'load') {
          setTimeout(function () {
            _this5.setAnchorToTheTop();
          }, 0);
        }
      });
    }
  }, {
    key: "scrollBottom",
    value: function scrollBottom() {
      if (!this.isMobile) {
        var headerHeight = !this.$header.length ? 0 : this.$header.outerHeight();
        var productHeight = this.$anchorContent.outerHeight();
        var headerPositionTop = !this.$header.length ? 0 : this.$header.position().top;
        var winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var productListOffsetTop = this.$anchorContent.offset().top - winScrollTop;
        this.isPositionTop = productListOffsetTop < headerHeight + headerPositionTop + 50 && productHeight + productListOffsetTop > headerHeight + headerPositionTop + 50;
        this.$anchorList.parent().toggleClass('active-top', this.isPositionTop);
        this.$anchorContent.parent().toggleClass('active-top', this.isPositionTop);
        var scroll = productHeight + this.$anchorContent.offset().top - (winScrollTop + headerHeight + headerPositionTop);
        var $dropdownContent = this.$anchorList.find('.dropdown-content')[0];
        var dropdownContentHeight = $dropdownContent !== undefined ? $dropdownContent.clientHeight + headerHeight + headerPositionTop + 15 : headerHeight + headerPositionTop + 15;
        var isBottomForMovetop = false;

        if (document.body.clientHeight - headerHeight - headerPositionTop + 15 < dropdownContentHeight) {
          isBottomForMovetop = true;
        }

        this.$anchorList.parent().toggleClass('bottom', isBottomForMovetop);
        this.isScrollFooter = scroll < 0;
        this.$anchorList.parent().toggleClass('active-bottom', this.isScrollFooter);
        this.$anchorContent.parent().toggleClass('active-bottom', this.isScrollFooter);
        this.setAnchorActive();
      }
    }
  }]);

  return AnchorFun;
}();

var anchorFun = new AnchorFun();

}();
exports.anchorFun = __webpack_exports__.anchorFun;
Object.defineProperty(exports, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=anchorList.js.map