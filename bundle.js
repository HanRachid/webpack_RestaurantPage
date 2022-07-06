/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTTtBQUNsQztBQUNBO0FBQ0EsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmMEM7O0FBRUE7QUFDUztBQUNmOztBQUVwQztBQUNBLGFBQWEsNENBQUk7QUFDakIsc0JBQXNCLDRDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDRDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUk7QUFDVixNQUFNLGlEQUFVOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkNBQUk7O0FBRVYsTUFBTSx1REFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyQ0FBSTtBQUNWLE1BQU0saURBQVU7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyQ0FBSTs7QUFFVixNQUFNLHVEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFPO0FBQ2IsTUFBTSxpREFBVTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFPOztBQUViLE1BQU0saURBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja19yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2tfcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdChlbGVtZW50KSB7XG4gIGNvbnN0IGJsb2NrdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja2RldXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBibG9ja3Ryb2lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmxvY2t1bi5jbGFzc05hbWUgPSBcImJsb2sgdW5cIjtcbiAgYmxvY2t1bi50ZXh0Q29udGVudCA9IFwiY2FsbCBtZSBvbiBmYWNlYm9va1wiO1xuICBibG9ja2RldXguY2xhc3NOYW1lID0gXCJibG9rIGRldXhcIjtcbiAgYmxvY2tkZXV4LnRleHRDb250ZW50ID0gXCJjYWxsIG1lIG9uIGluc3RhZ3JhbVwiO1xuICBibG9ja3Ryb2lzLmNsYXNzTmFtZSA9IFwiYmxvayB0cm9pc1wiO1xuICBibG9ja3Ryb2lzLnRleHRDb250ZW50ID0gXCJjYWxsIG1lIG9uIHR3aXRldXJcIjtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChibG9ja3VuKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChibG9ja2RldXgpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGJsb2NrdHJvaXMpO1xufVxuXG5mdW5jdGlvbiBjb250YWN0cmVtb3ZlKGUpIHtcbiAgY29uc3QgY29udGFjdEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxva1wiKTtcbiAgY29udGFjdEFsbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbnRhY3QsIGNvbnRhY3RyZW1vdmUgfTtcbiIsImZ1bmN0aW9uIGluaXQoZWxlbWVudCkge1xuICBjb25zdCBob21ldGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWV0ZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcbiAgaG9tZXRleHQuY2xhc3NOYW1lID0gXCJsb3JlbVwiO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGhvbWV0ZXh0KTtcbn1cblxuZnVuY3Rpb24gaW5pdHJlbW92ZShlbGVtZW50KSB7XG4gIGNvbnN0IGxvcmVtdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9yZW1cIik7XG4gIGVsZW1lbnQucmVtb3ZlQ2hpbGQobG9yZW10ZXh0KTtcbn1cbmV4cG9ydCB7IGluaXQsIGluaXRyZW1vdmUgfTtcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL3VzdGVuc2lsLnBuZ1wiO1xuZnVuY3Rpb24gbWVudShlbGVtZW50KSB7XG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gSWNvbjtcbiAgbXlJY29uLmNsYXNzTmFtZSA9IFwiaW1halwiO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG59XG5mdW5jdGlvbiBtZW51cmVtb3ZlKGUpIHtcbiAgY29uc3QgbWVudUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1halwiKTtcbiAgZS5yZW1vdmVDaGlsZChtZW51QWxsKTtcbn1cbmV4cG9ydCB7IG1lbnUsIG1lbnVyZW1vdmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IG1lbnUsIG1lbnVyZW1vdmUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmltcG9ydCB7IGluaXQsIGluaXRyZW1vdmUgfSBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgeyBjb250YWN0LCBjb250YWN0cmVtb3ZlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IEljb20gZnJvbSBcIi4vYmFja2dyb3VuZC5qcGdcIjtcblxuY29uc3QgbXlJY29tID0gbmV3IEltYWdlKCk7XG5teUljb20uc3JjID0gSWNvbTtcbmxldCBzcmNpbWcgPSBcInVybChcIiArIEljb20gKyBcIilcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc3JjaW1nO1xubGV0IGlzTWVudSA9IGZhbHNlO1xubGV0IGlzQ29udGFjdCA9IGZhbHNlO1xubGV0IGlzSG9tZSA9IHRydWU7XG5cbi8vcXVlcnkgc2VsZWN0b3JzXG5jb25zb2xlLmxvZyhcInRlc3RcIik7XG5jb25zb2xlLmxvZyhJY29tKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib21lXCIpO1xuY29uc3QgbWVudXUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnVcIik7XG5jb25zdCBjb250YWN0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQ29udGFjdFwiKTtcbmNvbnN0IGxlZnRyZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0cmVjdGFuZ2xlXCIpO1xuY29uc3QgcmlnaHRyZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGNsYXNzXCIpO1xuXG5pbml0KGxlZnRyZWN0KTtcbm1lbnV1LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICghaXNNZW51KSB7XG4gICAgaWYgKGlzSG9tZSkge1xuICAgICAgbWVudShyaWdodHJlY3QpO1xuICAgICAgaW5pdHJlbW92ZShsZWZ0cmVjdCk7XG5cbiAgICAgIGlzTWVudSA9IHRydWU7XG4gICAgICBpc0hvbWUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzQ29udGFjdCkge1xuICAgICAgbWVudShyaWdodHJlY3QpO1xuXG4gICAgICBjb250YWN0cmVtb3ZlKHJpZ2h0cmVjdCk7XG4gICAgICBpc01lbnUgPSB0cnVlO1xuICAgICAgaXNDb250YWN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoIWlzSG9tZSkge1xuICAgIGlmIChpc01lbnUpIHtcbiAgICAgIGluaXQobGVmdHJlY3QpO1xuICAgICAgbWVudXJlbW92ZShyaWdodHJlY3QpO1xuXG4gICAgICBpc0hvbWUgPSB0cnVlO1xuICAgICAgaXNNZW51ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0NvbnRhY3QpIHtcbiAgICAgIGluaXQobGVmdHJlY3QpO1xuXG4gICAgICBjb250YWN0cmVtb3ZlKHJpZ2h0cmVjdCk7XG4gICAgICBpc0hvbWUgPSB0cnVlO1xuICAgICAgaXNDb250YWN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuY29udGFjdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKCFpc0NvbnRhY3QpIHtcbiAgICBpZiAoaXNNZW51KSB7XG4gICAgICBjb250YWN0KHJpZ2h0cmVjdCk7XG4gICAgICBtZW51cmVtb3ZlKHJpZ2h0cmVjdCk7XG5cbiAgICAgIGlzQ29udGFjdCA9IHRydWU7XG4gICAgICBpc01lbnUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzSG9tZSkge1xuICAgICAgY29udGFjdChyaWdodHJlY3QpO1xuXG4gICAgICBpbml0cmVtb3ZlKGxlZnRyZWN0KTtcbiAgICAgIGlzQ29udGFjdCA9IHRydWU7XG4gICAgICBpc0hvbWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9