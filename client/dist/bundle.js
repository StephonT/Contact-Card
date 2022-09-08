/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ (() => {

eval("const form = document.getElementById(\"formToggle\");\nconsole.log(form);\n\nconst toggleForm = () => {\n  if (form.style.display === \"none\") {\n    form.style.display = \"block\";\n  } else {\n    form.style.display = \"none\";\n  }\n}\n\nconst newContactButton = document.getElementById(\"new-contact\");\n\nnewContactButton.addEventListener('click', event => {\n toggleForm()\n})\n\n\n//# sourceURL=webpack://client/./src/js/form.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit */ \"./src/js/submit.js\");\n/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_submit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _images_bear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/bear.png */ \"./src/images/bear.png\");\n/* harmony import */ var _images_dog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/dog.png */ \"./src/images/dog.png\");\n/* harmony import */ var _images_tready_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/tready.png */ \"./src/images/tready.png\");\n//entry point\r\n\r\n//import the form and submit logic in index.js so that it will be included in the bundle.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n    document.getElementById('logo').src = _images_logo_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    document.getElementById('bearThumbnail').src = _images_bear_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    document.getElementById('dogThumbnail').src = _images_dog_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    document.getElementById('treadyThumbnail').src = _images_tready_png__WEBPACK_IMPORTED_MODULE_5__;\r\n  });\n\n//# sourceURL=webpack://client/./src/js/index.js?");

/***/ }),

/***/ "./src/js/submit.js":
/*!**************************!*\
  !*** ./src/js/submit.js ***!
  \**************************/
/***/ (() => {

eval("const submitButton = document.getElementById(\"submit-button\");\nsubmitButton.disabled = true;\n\n\n//# sourceURL=webpack://client/./src/js/submit.js?");

/***/ }),

/***/ "./src/images/bear.png":
/*!*****************************!*\
  !*** ./src/images/bear.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cc2e6387ee1c015764f1.png\";\n\n//# sourceURL=webpack://client/./src/images/bear.png?");

/***/ }),

/***/ "./src/images/dog.png":
/*!****************************!*\
  !*** ./src/images/dog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"531de3a4f9b7be0fae21.png\";\n\n//# sourceURL=webpack://client/./src/images/dog.png?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"18ff534a628ccc595e12.png\";\n\n//# sourceURL=webpack://client/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/tready.png":
/*!*******************************!*\
  !*** ./src/images/tready.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c8923808bd819da00cc1.png\";\n\n//# sourceURL=webpack://client/./src/images/tready.png?");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;