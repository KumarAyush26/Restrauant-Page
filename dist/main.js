/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadMenuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenuPage */ \"./src/loadMenuPage.js\");\n/* harmony import */ var _loadContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadContactPage */ \"./src/loadContactPage.js\");\n\r\n\r\n\r\n\r\nfunction setActiveTab(tabId) {\r\n  document.querySelectorAll('nav button').forEach(btn => {\r\n    btn.classList.remove('active-tab');\r\n  });\r\n  const activeBtn = document.getElementById(tabId);\r\n  if (activeBtn) activeBtn.classList.add('active-tab');\r\n}\r\n\r\nfunction addTabListeners() {\r\n  document.getElementById('home-tab').addEventListener('click', () => {\r\n    setActiveTab('home-tab');\r\n    (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  document.getElementById('menu-tab').addEventListener('click', () => {\r\n    setActiveTab('menu-tab');\r\n    (0,_loadMenuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  document.getElementById('about-tab').addEventListener('click', () => {\r\n    setActiveTab('about-tab');\r\n    (0,_loadContactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  setActiveTab('home-tab');\r\n  (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  addTabListeners();\r\n});\n\n//# sourceURL=webpack://restrauant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadContactPage.js":
/*!********************************!*\
  !*** ./src/loadContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n\r\n  const contactDiv = document.createElement('div');\r\n  contactDiv.className = 'contact-page';\r\n\r\n  const headline = document.createElement('h2');\r\n  headline.textContent = 'Contact Us';\r\n\r\n  const phone = document.createElement('p');\r\n  phone.textContent = 'Phone: (123) 456-7890';\r\n\r\n  const email = document.createElement('p');\r\n  email.textContent = 'Email: info@gourmethaven.com';\r\n\r\n  const address = document.createElement('p');\r\n  address.textContent = '123 Main Street, Food City, Country';\r\n\r\n  contactDiv.appendChild(headline);\r\n  contactDiv.appendChild(phone);\r\n  contactDiv.appendChild(email);\r\n  contactDiv.appendChild(address);\r\n  content.appendChild(contactDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restrauant-page/./src/loadContactPage.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n\r\n  const headline = document.createElement('h1');\r\n  headline.textContent = 'Welcome to Gourmet Haven!';\r\n\r\n  const image = document.createElement('img');\r\n  image.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836';\r\n  image.alt = 'Restaurant Interior';\r\n  image.style.maxWidth = '400px';\r\n  image.style.width = '100%';\r\n  image.style.borderRadius = '8px';\r\n  image.style.margin = '20px 0';\r\n\r\n  const description = document.createElement('p');\r\n  description.textContent = 'Experience the finest dining with a blend of classic and modern cuisine. Our chefs use only the freshest ingredients to create mouth-watering dishes in a cozy, elegant atmosphere. Whether you\\'re here for a family dinner, a romantic evening, or a business lunch, Gourmet Haven is your perfect destination.';\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(image);\r\n  content.appendChild(description);\r\n}\r\n\n\n//# sourceURL=webpack://restrauant-page/./src/loadHomePage.js?");

/***/ }),

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n\r\n  const menuDiv = document.createElement('div');\r\n  menuDiv.className = 'menu-page';\r\n\r\n  const headline = document.createElement('h2');\r\n  headline.textContent = 'Our Menu';\r\n\r\n  const menuList = document.createElement('ul');\r\n  const items = [\r\n    { name: 'Classic Burger', desc: 'Juicy beef patty, cheddar, lettuce, tomato, and our special sauce.' },\r\n    { name: 'Caesar Salad', desc: 'Crisp romaine, parmesan, croutons, and creamy Caesar dressing.' },\r\n    { name: 'Grilled Salmon', desc: 'Fresh salmon fillet with lemon butter sauce and seasonal veggies.' },\r\n    { name: 'Chocolate Lava Cake', desc: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.' }\r\n  ];\r\n  items.forEach(item => {\r\n    const li = document.createElement('li');\r\n    li.innerHTML = `<strong>${item.name}</strong>: ${item.desc}`;\r\n    menuList.appendChild(li);\r\n  });\r\n\r\n  menuDiv.appendChild(headline);\r\n  menuDiv.appendChild(menuList);\r\n  content.appendChild(menuDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restrauant-page/./src/loadMenuPage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;