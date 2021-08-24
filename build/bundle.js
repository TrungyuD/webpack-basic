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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _hello = __webpack_require__(/*! ./libs/hello */ \"./src/libs/hello.js\");\n\nvar _sum = __webpack_require__(/*! ./libs/sum */ \"./src/libs/sum.js\");\n\n__webpack_require__(/*! ./libs/other */ \"./src/libs/other.js\");\n\nconsole.log('Duy');\nconsole.log((0, _sum.sum)(1, 2));\nconsole.log(fasdfas);\n(0, _hello.sayHello)();\n\n//# sourceURL=webpack://testjs/./src/index.js?");

/***/ }),

/***/ "./src/libs/hello.js":
/*!***************************!*\
  !*** ./src/libs/hello.js ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nTypeError: /home/sotatek/projects/personal/webpack/webpack-basic/src/libs/hello.js: Cannot read property 'bindings' of null\\n    at Scope.moveBindingTo (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/scope/index.js:944:13)\\n    at BlockScoping.updateScopeInfo (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:364:17)\\n    at BlockScoping.run (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:330:12)\\n    at PluginPass.BlockStatementSwitchStatementProgram (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:70:24)\\n    at newFn (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/visitors.js:171:21)\\n    at NodePath._call (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:53:20)\\n    at NodePath.call (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:40:17)\\n    at NodePath.visit (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:90:31)\\n    at TraversalContext.visitQueue (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/context.js:99:16)\\n    at TraversalContext.visitSingle (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/context.js:73:19)\");\n\n//# sourceURL=webpack://testjs/./src/libs/hello.js?");

/***/ }),

/***/ "./src/libs/other.js":
/*!***************************!*\
  !*** ./src/libs/other.js ***!
  \***************************/
/***/ (() => {

"use strict";
eval("\n\n//# sourceURL=webpack://testjs/./src/libs/other.js?");

/***/ }),

/***/ "./src/libs/sum.js":
/*!*************************!*\
  !*** ./src/libs/sum.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nTypeError: /home/sotatek/projects/personal/webpack/webpack-basic/src/libs/sum.js: Cannot read property 'bindings' of null\\n    at Scope.moveBindingTo (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/scope/index.js:944:13)\\n    at BlockScoping.updateScopeInfo (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:364:17)\\n    at BlockScoping.run (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:330:12)\\n    at PluginPass.BlockStatementSwitchStatementProgram (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:70:24)\\n    at newFn (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/visitors.js:171:21)\\n    at NodePath._call (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:53:20)\\n    at NodePath.call (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:40:17)\\n    at NodePath.visit (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/path/context.js:90:31)\\n    at TraversalContext.visitQueue (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/context.js:99:16)\\n    at TraversalContext.visitSingle (/home/sotatek/projects/personal/webpack/webpack-basic/node_modules/@babel/traverse/lib/context.js:73:19)\");\n\n//# sourceURL=webpack://testjs/./src/libs/sum.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;