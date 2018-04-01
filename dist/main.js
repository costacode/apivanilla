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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\t// create a request variable and assign a new XMLHttpRequest object to it.\n\tvar request = new XMLHttpRequest();\n\n\t// Open a new connection, using the GET request on the URL endpoint\n\trequest.open(\"GET\",\n\t// \"https://ghibliapi.herokuapp.com/films\",\n\t\"http://api.tvmaze.com/shows\", true);\n\n\trequest.onload = function () {\n\t\t// Begin accessing JSON data here\n\t\tvar data = JSON.parse(this.responseText);\n\n\t\tif (request.status >= 200 && request.status < 400) {\n\t\t\tdata.forEach(function (show) {\n\t\t\t\t// console.log(movie.title);\n\t\t\t\t// console.log(\"movie description: \" + movie.description);\n\t\t\t\t// create a div with a card class\n\t\t\t\tvar card = document.createElement(\"div\");\n\t\t\t\tcard.setAttribute(\"class\", \"card\");\n\n\t\t\t\t// Create an h1 and set the text content to the film's title\n\t\t\t\tvar title = document.createElement(\"h1\");\n\t\t\t\ttitle.textContent = show.name;\n\n\t\t\t\t// Create a p and set the text content to the film's description\n\t\t\t\tvar description = document.createElement(\"p\");\n\n\t\t\t\t// Limit chars\n\t\t\t\t// show.summary = show.summary.substring(0, 300);\n\t\t\t\t// description.textContent = `${show.summary}...`;\n\n\t\t\t\t// all chars\n\t\t\t\tdescription.textContent = show.summary.replace(/<\\/?[^>]+>/gi, \"\");\n\n\t\t\t\t// image\n\t\t\t\tvar imageShow = document.createElement(\"img\");\n\t\t\t\timageShow.src = show.image.medium;\n\n\t\t\t\tvar infoShow = document.createElement(\"div\");\n\t\t\t\tinfoShow.setAttribute(\"class\", \"info-show\");\n\n\t\t\t\t// Append the cards to the container element\n\t\t\t\tvar container = document.querySelector(\".container\");\n\t\t\t\tcontainer.appendChild(card);\n\t\t\t\tcard.appendChild(imageShow);\n\t\t\t\tcard.appendChild(infoShow);\n\t\t\t\tinfoShow.appendChild(title);\n\t\t\t\tinfoShow.appendChild(description);\n\t\t\t});\n\t\t\tvar loader = document.querySelector(\".loader\");\n\t\t\tloader.classList.add(\"hide\");\n\t\t} else {\n\t\t\t// console.log(\"error\");\n\t\t\tvar errorMessage = document.createElement(\"div\");\n\t\t\terrorMessage.setAttribute(\"class\", \"error\");\n\t\t\terrorMessage.textContent = \"Nope, it's not working\";\n\t\t\tcontainer.appendChild(errorMessage);\n\t\t}\n\t};\n\n\t// Send request\n\trequest.send();\n};\n\n//# sourceURL=webpack:///./src/components/apiCall.js?");

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = hero;\nfunction hero() {\n\t// create and append logo\n\tvar app = document.getElementById(\"root\");\n\n\tvar logo = document.createElement(\"img\");\n\tlogo.src = \"img/tvm_api.png\";\n\n\tvar intro = document.createElement(\"p\");\n\tintro.setAttribute(\"class\", \"intro\");\n\tintro.textContent = \"Simple web app that connects the TVMaze API, retrieves the data with JavaScript, and displays it on the front end.\";\n\n\tvar logoWrap = document.createElement(\"div\");\n\tlogoWrap.setAttribute(\"class\", \"logo-wrap\");\n\n\t// logoWrap.appendChild(logo);\n\t// logoWrap.appendChild(intro);\n\n\tvar header = document.createElement(\"header\");\n\theader.setAttribute(\"class\", \"header\");\n\t// header.textContent =\n\t// \t\"An exercise on retrieving data from an API using vanilla JavaScript\";\n\n\tvar container = document.createElement(\"div\");\n\tcontainer.setAttribute(\"class\", \"container\");\n\n\t// app.appendChild(header);\n\theader.appendChild(logo);\n\theader.appendChild(intro);\n\n\tapp.appendChild(header);\n\tapp.appendChild(container);\n}\n\n//# sourceURL=webpack:///./src/components/hero.js?");

/***/ }),

/***/ "./src/img/tvm_api.png":
/*!*****************************!*\
  !*** ./src/img/tvm_api.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/tvm_api.png\";\n\n//# sourceURL=webpack:///./src/img/tvm_api.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _tvm_api = __webpack_require__(/*! ./img/tvm_api.png */ \"./src/img/tvm_api.png\");\n\nvar _tvm_api2 = _interopRequireDefault(_tvm_api);\n\nvar _style = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _hero = __webpack_require__(/*! ./components/hero */ \"./src/components/hero.js\");\n\nvar _hero2 = _interopRequireDefault(_hero);\n\nvar _apiCall = __webpack_require__(/*! ./components/apiCall */ \"./src/components/apiCall.js\");\n\nvar _apiCall2 = _interopRequireDefault(_apiCall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _hero2.default)();\n(0, _apiCall2.default)();\n\n//# sourceURL=webpack:///./src/index.js?");

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