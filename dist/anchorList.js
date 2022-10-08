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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n\n__webpack_require__(/*! ./anchorList.scss */ \"./src/anchorList.scss\");\n\nclass AnchorFun {\n  constructor() {\n    this.$header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.com-header');\n    this.$anchorList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.category-list');\n    this.$anchorContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.anchor-content-list');\n    this.anchorLinkEle = 'a[href^=\"#\"]';\n    this.scrollTop = 0;\n    this.anchorFunInit();\n  }\n\n  anchorFunInit() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {\n      this.setAnchorToTheTop();\n      this.HandleAnchorEvents();\n      this.scrollFun();\n    });\n  }\n\n  srollAnimate(hashId) {\n    this.scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(hashId).offset().top - (!this.$header.length ? 0 : this.$header.height()) - (!this.$header.length ? 0 : this.$header.position().top) - 40;\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({\n      scrollTop: this.scrollTop\n    }, 100);\n  }\n\n  setAnchorToTheTop(hashId) {\n    if (hashId) {\n      this.srollAnimate(hashId);\n    } else {\n      const id = window.location.hash;\n\n      if (id && jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).length) {\n        this.srollAnimate(id);\n      }\n    }\n  }\n\n  HandleAnchorEvents() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.anchorLinkEle).click(el => {\n      this.setAnchorToTheTop(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el.currentTarget).attr('href'));\n    });\n  }\n\n  clearAchorActive(anchorTitleArr) {\n    anchorTitleArr.each((index, el) => {\n      if (index !== this.activeAchorIndex) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`a[href='${jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('href')}']`).removeClass('active');\n      }\n    });\n  }\n\n  setAnchorActive() {\n    if (!this.$anchorList.find(this.anchorLinkEle).length) {\n      return;\n    }\n\n    const headerHeight = !this.$header.length ? 1 : this.$header.outerHeight();\n    const headerPositionTop = !this.$header.length ? 1 : this.$header.position().top;\n    const winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n    const anchorTitleArr = this.$anchorList.find('a[href^=\"#\"]');\n    let active = false;\n    anchorTitleArr.each((index, el) => {\n      const id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('href');\n      const anchorTitleTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(id).offset().top - winScrollTop - headerPositionTop - headerHeight;\n\n      if (anchorTitleTop < 40 && anchorTitleTop > 0) {\n        active = true;\n        this.activeAchorIndex = index;\n        this.activeAchorId = id;\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`a[href='${this.activeAchorId}']`).addClass('active');\n        this.clearAchorActive(anchorTitleArr);\n      }\n    });\n\n    if (!active && !this.activeAchorIndex && winScrollTop) {\n      this.$anchorList.find(this.anchorLinkEle).first().addClass('active');\n    }\n\n    setTimeout(() => {\n      if (typeof winScrollTop === 'undefined') {\n        this.activeAchorIndex = null;\n        this.clearAchorActive(anchorTitleArr);\n        this.$anchorList.find(this.anchorLinkEle).first().addClass('active');\n      }\n    }, 301);\n  }\n\n  scrollFun() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load scroll', el => {\n      this.isPositionTop = false;\n      this.scrollBottom();\n\n      if (el.type === 'load') {\n        setTimeout(() => {\n          this.setAnchorToTheTop();\n        }, 0);\n      }\n    });\n  }\n\n  scrollBottom() {\n    if (!this.isMobile) {\n      const headerHeight = !this.$header.length ? 0 : this.$header.outerHeight();\n      const productHeight = this.$anchorContent.outerHeight();\n      const headerPositionTop = !this.$header.length ? 0 : this.$header.position().top;\n      let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n      const productListOffsetTop = this.$anchorContent.offset().top - winScrollTop;\n      this.isPositionTop = productListOffsetTop < headerHeight + headerPositionTop + 50 && productHeight + productListOffsetTop > headerHeight + headerPositionTop + 50;\n      this.$anchorList.parent().toggleClass('active-top', this.isPositionTop);\n      this.$anchorContent.parent().toggleClass('active-top', this.isPositionTop);\n      const scroll = productHeight + this.$anchorContent.offset().top - (winScrollTop + headerHeight + headerPositionTop);\n      const $dropdownContent = this.$anchorList.find('.dropdown-content')[0];\n      const dropdownContentHeight = $dropdownContent !== undefined ? $dropdownContent.clientHeight + headerHeight + headerPositionTop + 15 : headerHeight + headerPositionTop + 15;\n      let isBottomForMovetop = false;\n\n      if (document.body.clientHeight - headerHeight - headerPositionTop + 15 < dropdownContentHeight) {\n        isBottomForMovetop = true;\n      }\n\n      this.$anchorList.parent().toggleClass('bottom', isBottomForMovetop);\n      this.isScrollFooter = scroll < 0;\n      this.$anchorList.parent().toggleClass('active-bottom', this.isScrollFooter);\n      this.$anchorContent.parent().toggleClass('active-bottom', this.isScrollFooter);\n      this.setAnchorActive();\n    }\n  }\n\n}\n\nconst anchorFun = new AnchorFun();\n/* harmony default export */ __webpack_exports__[\"default\"] = (anchorFun);\n\n//# sourceURL=webpack://anchorList/./src/index.js?");

/***/ }),

/***/ "./src/anchorList.scss":
/*!*****************************!*\
  !*** ./src/anchorList.scss ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1665219664061\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://anchorList/./src/anchorList.scss?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"anchorList": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkanchorList"] = self["webpackChunkanchorList"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_mini-css-extract-plugin_dist_hmr_hotM-e3e60e"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;