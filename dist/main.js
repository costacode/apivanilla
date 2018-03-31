/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/apiCall.js":
/*!***********************************!*\
  !*** ./src/components/apiCall.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\t// create a request variable and assign a new XMLHttpRequest object to it.\n\tvar request = new XMLHttpRequest();\n\n\t// Open a new connection, using the GET request on the URL endpoint\n\trequest.open(\"GET\", \"https://ghibliapi.herokuapp.com/films\", true);\n\n\trequest.onload = function () {\n\t\t// Begin accessing JSON data here\n\t\tvar data = JSON.parse(this.responseText);\n\n\t\tif (request.status >= 200 && request.status < 400) {\n\t\t\tdata.forEach(function (movie) {\n\t\t\t\t// console.log(movie.title);\n\t\t\t\t// console.log(\"movie description: \" + movie.description);\n\t\t\t\t// create a div with a card class\n\t\t\t\tvar card = document.createElement(\"div\");\n\t\t\t\tcard.setAttribute(\"class\", \"card\");\n\n\t\t\t\t// Create an h1 and set the text content to the film's title\n\t\t\t\tvar title = document.createElement(\"h1\");\n\t\t\t\ttitle.textContent = movie.title;\n\n\t\t\t\t// Create a p and set the text content to the film's description\n\t\t\t\tvar description = document.createElement(\"p\");\n\n\t\t\t\t// Limit chars\n\t\t\t\tmovie.description = movie.description.substring(0, 300);\n\t\t\t\tdescription.textContent = movie.description + \"...\";\n\n\t\t\t\t// all chars\n\t\t\t\t// description.textContent = movie.description;\n\n\t\t\t\t// Append the cards to the container element\n\t\t\t\tvar container = document.querySelector(\".container\");\n\t\t\t\tcontainer.appendChild(card);\n\t\t\t\tcard.appendChild(title);\n\t\t\t\tcard.appendChild(description);\n\t\t\t});\n\t\t\tvar loader = document.querySelector(\".loader\");\n\t\t\tloader.classList.add(\"hide\");\n\t\t} else {\n\t\t\t// console.log(\"error\");\n\t\t\tvar errorMessage = document.createElement(\"div\");\n\t\t\terrorMessage.setAttribute(\"class\", \"error\");\n\t\t\terrorMessage.textContent = \"Nope, it's not working\";\n\t\t\tcontainer.appendChild(errorMessage);\n\t\t}\n\t};\n\n\t// Send request\n\trequest.send();\n};\n\n//# sourceURL=webpack:///./src/components/apiCall.js?");

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\t// create and append logo\n\tvar app = document.getElementById(\"root\");\n\n\tvar logo = document.createElement(\"img\");\n\tlogo.src = \"img/logo.png\";\n\n\tvar logoWrap = document.createElement(\"div\");\n\tlogoWrap.setAttribute(\"class\", \"logo-wrap\");\n\tlogoWrap.appendChild(logo);\n\n\tvar header = document.createElement(\"header\");\n\theader.setAttribute(\"class\", \"header\");\n\theader.textContent = \"An exercise on retrieving data from an API using vanilla JavaScript\";\n\n\tvar container = document.createElement(\"div\");\n\tcontainer.setAttribute(\"class\", \"container\");\n\n\tapp.appendChild(header);\n\tapp.appendChild(container);\n\tcontainer.appendChild(logoWrap);\n};\n\n//# sourceURL=webpack:///./src/components/logo.js?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.png\";\n\n//# sourceURL=webpack:///./src/img/logo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _logo = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _style = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _logo3 = __webpack_require__(/*! ./components/logo */ \"./src/components/logo.js\");\n\nvar _logo4 = _interopRequireDefault(_logo3);\n\nvar _apiCall = __webpack_require__(/*! ./components/apiCall */ \"./src/components/apiCall.js\");\n\nvar _apiCall2 = _interopRequireDefault(_apiCall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _logo4.default)();\n(0, _apiCall2.default)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });