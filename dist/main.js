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
eval("\n\nvar _logo = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Use namespace to prevent pollution of the global namespace\nvar apifilms = apifilms || {};\n\n// Define application root object.\napifilms.app = function () {\n\tif (typeof document !== \"undefined\") {\n\t\tvar app = document.getElementById(\"root\");\n\t\tvar logo = document.createElement(\"img\");\n\t\tlogo.src = \"img/logo.png\";\n\n\t\tvar container = document.createElement(\"div\");\n\t\tcontainer.setAttribute(\"class\", \"container\");\n\n\t\tapp.appendChild(logo);\n\t\tapp.appendChild(container);\n\t}\n\n\t// create a request variable and assign a new XMLHttpRequest object to it.\n\t//var XMLHttpRequest = require(\"xmlhttprequest\").XMLHttpRequest;\n\trequest = new XMLHttpRequest();\n\n\t// Open a new connection, using the GET request on the URL endpoint\n\trequest.open(\"GET\", \"https://ghibliapi.herokuapp.com/films\", true);\n\n\trequest.onload = function () {\n\t\t// Begin accessing JSON data here\n\t\tvar data = JSON.parse(this.responseText);\n\n\t\tif (request.status >= 200 && request.status < 400) {\n\t\t\tdata.forEach(function (movie) {\n\t\t\t\tconsole.log(movie.title);\n\t\t\t\t// console.log(\"movie description: \" + movie.description);\n\t\t\t});\n\t\t} else {\n\t\t\tconsole.log(\"error\");\n\t\t}\n\t};\n\n\t// Send request\n\trequest.send();\n}();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });