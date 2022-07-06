/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "contactremove": () => (/* binding */ contactremove)
/* harmony export */ });
function contact(element) {
  const blockun = document.createElement("div");
  const blockdeux = document.createElement("div");
  const blocktrois = document.createElement("div");
  blockun.className = "blok un";
  blockun.textContent = "call me on facebook";
  blockdeux.className = "blok deux";
  blockdeux.textContent = "call me on instagram";
  blocktrois.className = "blok trois";
  blocktrois.textContent = "call me on twiteur";
  element.appendChild(blockun);
  element.appendChild(blockdeux);
  element.appendChild(blocktrois);
}

function contactremove(e) {
  const contactAll = document.querySelectorAll(".blok");
  contactAll.forEach((element) => {
    e.removeChild(element);
  });
}




/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "initremove": () => (/* binding */ initremove)
/* harmony export */ });
function init(element) {
  const hometext = document.createElement("div");
  hometext.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  hometext.className = "lorem";
  element.appendChild(hometext);
}

function initremove(element) {
  const loremtext = document.querySelector(".lorem");
  element.removeChild(loremtext);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menuremove": () => (/* binding */ menuremove)
/* harmony export */ });
/* harmony import */ var _ustensil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ustensil.png */ "./src/ustensil.png");

function menu(element) {
  const myIcon = new Image();
  myIcon.src = _ustensil_png__WEBPACK_IMPORTED_MODULE_0__;
  myIcon.className = "imaj";
  element.appendChild(myIcon);
}
function menuremove(e) {
  const menuAll = document.querySelector(".imaj");
  e.removeChild(menuAll);
}



/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28f7b775a45f076da777.jpg";

/***/ }),

/***/ "./src/ustensil.png":
/*!**************************!*\
  !*** ./src/ustensil.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "396e40137f7c8dd929cd.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.jpg */ "./src/background.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const myIcom = new Image();
myIcom.src = _background_jpg__WEBPACK_IMPORTED_MODULE_3__;
let srcimg = "url(" + _background_jpg__WEBPACK_IMPORTED_MODULE_3__ + ")";
document.body.style.backgroundImage = srcimg;
let isMenu = false;
let isContact = false;
let isHome = true;

//query selectors
console.log("test");
console.log(_background_jpg__WEBPACK_IMPORTED_MODULE_3__);
const content = document.querySelector("#content");
const home = document.querySelector(".Home");
const menuu = document.querySelector(".Menu");
const contacte = document.querySelector(".Contact");
const leftrect = document.querySelector(".leftrectangle");
const rightrect = document.querySelector(".rightclass");

(0,_init__WEBPACK_IMPORTED_MODULE_1__.init)(leftrect);
menuu.addEventListener("click", () => {
  if (!isMenu) {
    if (isHome) {
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)(rightrect);
      (0,_init__WEBPACK_IMPORTED_MODULE_1__.initremove)(leftrect);

      isMenu = true;
      isHome = false;
    }
    if (isContact) {
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menu)(rightrect);

      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactremove)(rightrect);
      isMenu = true;
      isContact = false;
    }
  }
});

home.addEventListener("click", () => {
  if (!isHome) {
    if (isMenu) {
      (0,_init__WEBPACK_IMPORTED_MODULE_1__.init)(leftrect);
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuremove)(rightrect);

      isHome = true;
      isMenu = false;
    }
    if (isContact) {
      (0,_init__WEBPACK_IMPORTED_MODULE_1__.init)(leftrect);

      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactremove)(rightrect);
      isHome = true;
      isContact = false;
    }
  }
});

contacte.addEventListener("click", () => {
  if (!isContact) {
    if (isMenu) {
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(rightrect);
      (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuremove)(rightrect);

      isContact = true;
      isMenu = false;
    }
    if (isHome) {
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(rightrect);

      (0,_init__WEBPACK_IMPORTED_MODULE_1__.initremove)(leftrect);
      isContact = true;
      isHome = false;
    }
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk07QUFDbEM7QUFDQTtBQUNBLGVBQWUsMENBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1g1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YwQzs7QUFFQTtBQUNTO0FBQ2Y7QUFDSDs7QUFFakM7QUFDQSxhQUFhLDRDQUFJO0FBQ2pCLHNCQUFzQiw0Q0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSw0Q0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFJO0FBQ1YsTUFBTSxpREFBVTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJDQUFJOztBQUVWLE1BQU0sdURBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUk7QUFDVixNQUFNLGlEQUFVOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUk7O0FBRVYsTUFBTSx1REFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBTztBQUNiLE1BQU0saURBQVU7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBTzs7QUFFYixNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGNvbnRhY3QoZWxlbWVudCkge1xuICBjb25zdCBibG9ja3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2tkZXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmxvY2t0cm9pcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2NrdW4uY2xhc3NOYW1lID0gXCJibG9rIHVuXCI7XG4gIGJsb2NrdW4udGV4dENvbnRlbnQgPSBcImNhbGwgbWUgb24gZmFjZWJvb2tcIjtcbiAgYmxvY2tkZXV4LmNsYXNzTmFtZSA9IFwiYmxvayBkZXV4XCI7XG4gIGJsb2NrZGV1eC50ZXh0Q29udGVudCA9IFwiY2FsbCBtZSBvbiBpbnN0YWdyYW1cIjtcbiAgYmxvY2t0cm9pcy5jbGFzc05hbWUgPSBcImJsb2sgdHJvaXNcIjtcbiAgYmxvY2t0cm9pcy50ZXh0Q29udGVudCA9IFwiY2FsbCBtZSBvbiB0d2l0ZXVyXCI7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxvY2t1bik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxvY2tkZXV4KTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChibG9ja3Ryb2lzKTtcbn1cblxuZnVuY3Rpb24gY29udGFjdHJlbW92ZShlKSB7XG4gIGNvbnN0IGNvbnRhY3RBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2tcIik7XG4gIGNvbnRhY3RBbGwuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjb250YWN0LCBjb250YWN0cmVtb3ZlIH07XG4iLCJmdW5jdGlvbiBpbml0KGVsZW1lbnQpIHtcbiAgY29uc3QgaG9tZXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21ldGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XG4gIGhvbWV0ZXh0LmNsYXNzTmFtZSA9IFwibG9yZW1cIjtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21ldGV4dCk7XG59XG5cbmZ1bmN0aW9uIGluaXRyZW1vdmUoZWxlbWVudCkge1xuICBjb25zdCBsb3JlbXRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvcmVtXCIpO1xuICBlbGVtZW50LnJlbW92ZUNoaWxkKGxvcmVtdGV4dCk7XG59XG5leHBvcnQgeyBpbml0LCBpbml0cmVtb3ZlIH07XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi91c3RlbnNpbC5wbmdcIjtcbmZ1bmN0aW9uIG1lbnUoZWxlbWVudCkge1xuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLnNyYyA9IEljb247XG4gIG15SWNvbi5jbGFzc05hbWUgPSBcImltYWpcIjtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xufVxuZnVuY3Rpb24gbWVudXJlbW92ZShlKSB7XG4gIGNvbnN0IG1lbnVBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWpcIik7XG4gIGUucmVtb3ZlQ2hpbGQobWVudUFsbCk7XG59XG5leHBvcnQgeyBtZW51LCBtZW51cmVtb3ZlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBtZW51LCBtZW51cmVtb3ZlIH0gZnJvbSBcIi4vbWVudVwiO1xuXG5pbXBvcnQgeyBpbml0LCBpbml0cmVtb3ZlIH0gZnJvbSBcIi4vaW5pdFwiO1xuaW1wb3J0IHsgY29udGFjdCwgY29udGFjdHJlbW92ZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBJY29tIGZyb20gXCIuL2JhY2tncm91bmQuanBnXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBteUljb20gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbS5zcmMgPSBJY29tO1xubGV0IHNyY2ltZyA9IFwidXJsKFwiICsgSWNvbSArIFwiKVwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzcmNpbWc7XG5sZXQgaXNNZW51ID0gZmFsc2U7XG5sZXQgaXNDb250YWN0ID0gZmFsc2U7XG5sZXQgaXNIb21lID0gdHJ1ZTtcblxuLy9xdWVyeSBzZWxlY3RvcnNcbmNvbnNvbGUubG9nKFwidGVzdFwiKTtcbmNvbnNvbGUubG9nKEljb20pO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWVcIik7XG5jb25zdCBtZW51dSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTWVudVwiKTtcbmNvbnN0IGNvbnRhY3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Db250YWN0XCIpO1xuY29uc3QgbGVmdHJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRyZWN0YW5nbGVcIik7XG5jb25zdCByaWdodHJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0Y2xhc3NcIik7XG5cbmluaXQobGVmdHJlY3QpO1xubWVudXUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKCFpc01lbnUpIHtcbiAgICBpZiAoaXNIb21lKSB7XG4gICAgICBtZW51KHJpZ2h0cmVjdCk7XG4gICAgICBpbml0cmVtb3ZlKGxlZnRyZWN0KTtcblxuICAgICAgaXNNZW51ID0gdHJ1ZTtcbiAgICAgIGlzSG9tZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNDb250YWN0KSB7XG4gICAgICBtZW51KHJpZ2h0cmVjdCk7XG5cbiAgICAgIGNvbnRhY3RyZW1vdmUocmlnaHRyZWN0KTtcbiAgICAgIGlzTWVudSA9IHRydWU7XG4gICAgICBpc0NvbnRhY3QgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICghaXNIb21lKSB7XG4gICAgaWYgKGlzTWVudSkge1xuICAgICAgaW5pdChsZWZ0cmVjdCk7XG4gICAgICBtZW51cmVtb3ZlKHJpZ2h0cmVjdCk7XG5cbiAgICAgIGlzSG9tZSA9IHRydWU7XG4gICAgICBpc01lbnUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQ29udGFjdCkge1xuICAgICAgaW5pdChsZWZ0cmVjdCk7XG5cbiAgICAgIGNvbnRhY3RyZW1vdmUocmlnaHRyZWN0KTtcbiAgICAgIGlzSG9tZSA9IHRydWU7XG4gICAgICBpc0NvbnRhY3QgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jb250YWN0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoIWlzQ29udGFjdCkge1xuICAgIGlmIChpc01lbnUpIHtcbiAgICAgIGNvbnRhY3QocmlnaHRyZWN0KTtcbiAgICAgIG1lbnVyZW1vdmUocmlnaHRyZWN0KTtcblxuICAgICAgaXNDb250YWN0ID0gdHJ1ZTtcbiAgICAgIGlzTWVudSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNIb21lKSB7XG4gICAgICBjb250YWN0KHJpZ2h0cmVjdCk7XG5cbiAgICAgIGluaXRyZW1vdmUobGVmdHJlY3QpO1xuICAgICAgaXNDb250YWN0ID0gdHJ1ZTtcbiAgICAgIGlzSG9tZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=