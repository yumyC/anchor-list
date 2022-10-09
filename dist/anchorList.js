/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"anchorFun\": function() { return /* binding */ anchorFun; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _anchorList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchorList.scss */ \"./src/anchorList.scss\");\n\n\n\nclass AnchorFun {\n  constructor() {\n    this.$header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.com-header');\n    this.$anchorList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.category-list');\n    this.$anchorContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.anchor-content-list');\n    this.anchorLinkEle = 'a[href^=\"#\"]';\n    this.scrollTop = 0;\n    this.anchorFunInit();\n  }\n\n  anchorFunInit() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {\n      this.setAnchorToTheTop();\n      this.HandleAnchorEvents();\n      this.scrollFun();\n    });\n  }\n\n  srollAnimate(hashId) {\n    this.scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(hashId).offset().top - (!this.$header.length ? 0 : this.$header.height()) - (!this.$header.length ? 0 : this.$header.position().top) - 40;\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n      scrollTop: this.scrollTop\n    }, 100);\n  }\n\n  setAnchorToTheTop(hashId) {\n    if (hashId) {\n      this.srollAnimate(hashId);\n    } else {\n      const id = window.location.hash;\n\n      if (id && jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).length) {\n        this.srollAnimate(id);\n      }\n    }\n  }\n\n  HandleAnchorEvents() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.anchorLinkEle).click(el => {\n      this.setAnchorToTheTop(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el.currentTarget).attr('href'));\n    });\n  }\n\n  clearAchorActive(anchorTitleArr) {\n    anchorTitleArr.each((index, el) => {\n      if (index !== this.activeAchorIndex) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`a[href='${jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('href')}']`).removeClass('active');\n      }\n    });\n  }\n\n  setAnchorActive() {\n    if (!this.$anchorList.find(this.anchorLinkEle).length) {\n      return;\n    }\n\n    const headerHeight = !this.$header.length ? 1 : this.$header.outerHeight();\n    const headerPositionTop = !this.$header.length ? 1 : this.$header.position().top;\n    const winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n    const anchorTitleArr = this.$anchorList.find('a[href^=\"#\"]');\n    let active = false;\n    anchorTitleArr.each((index, el) => {\n      const id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('href');\n      const anchorTitleTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top - winScrollTop - headerPositionTop - headerHeight;\n\n      if (anchorTitleTop < 40 && anchorTitleTop > 0) {\n        active = true;\n        this.activeAchorIndex = index;\n        this.activeAchorId = id;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`a[href='${this.activeAchorId}']`).addClass('active');\n        this.clearAchorActive(anchorTitleArr);\n      }\n    });\n\n    if (!active && !this.activeAchorIndex && winScrollTop) {\n      this.$anchorList.find(this.anchorLinkEle).first().addClass('active');\n    }\n\n    setTimeout(() => {\n      if (typeof winScrollTop === 'undefined') {\n        this.activeAchorIndex = null;\n        this.clearAchorActive(anchorTitleArr);\n        this.$anchorList.find(this.anchorLinkEle).first().addClass('active');\n      }\n    }, 301);\n  }\n\n  scrollFun() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load scroll', el => {\n      this.isPositionTop = false;\n      this.scrollBottom();\n\n      if (el.type === 'load') {\n        setTimeout(() => {\n          this.setAnchorToTheTop();\n        }, 0);\n      }\n    });\n  }\n\n  scrollBottom() {\n    if (!this.isMobile) {\n      const headerHeight = !this.$header.length ? 0 : this.$header.outerHeight();\n      const productHeight = this.$anchorContent.outerHeight();\n      const headerPositionTop = !this.$header.length ? 0 : this.$header.position().top;\n      let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n      const productListOffsetTop = this.$anchorContent.offset().top - winScrollTop;\n      this.isPositionTop = productListOffsetTop < headerHeight + headerPositionTop + 50 && productHeight + productListOffsetTop > headerHeight + headerPositionTop + 50;\n      this.$anchorList.parent().toggleClass('active-top', this.isPositionTop);\n      this.$anchorContent.parent().toggleClass('active-top', this.isPositionTop);\n      const scroll = productHeight + this.$anchorContent.offset().top - (winScrollTop + headerHeight + headerPositionTop);\n      const $dropdownContent = this.$anchorList.find('.dropdown-content')[0];\n      const dropdownContentHeight = $dropdownContent !== undefined ? $dropdownContent.clientHeight + headerHeight + headerPositionTop + 15 : headerHeight + headerPositionTop + 15;\n      let isBottomForMovetop = false;\n\n      if (document.body.clientHeight - headerHeight - headerPositionTop + 15 < dropdownContentHeight) {\n        isBottomForMovetop = true;\n      }\n\n      this.$anchorList.parent().toggleClass('bottom', isBottomForMovetop);\n      this.isScrollFooter = scroll < 0;\n      this.$anchorList.parent().toggleClass('active-bottom', this.isScrollFooter);\n      this.$anchorContent.parent().toggleClass('active-bottom', this.isScrollFooter);\n      this.setAnchorActive();\n    }\n  }\n\n}\n\nconst anchorFun = new AnchorFun();\n\n\n//# sourceURL=webpack://anchor-list/./src/index.js?");

/***/ }),

/***/ "./src/anchorList.scss":
/*!*****************************!*\
  !*** ./src/anchorList.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://anchor-list/./src/anchorList.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	exports.anchorFun = __webpack_exports__.anchorFun;
/******/ 	Object.defineProperty(exports, "__esModule", { value: true });
/******/ 	
/******/ })()
;