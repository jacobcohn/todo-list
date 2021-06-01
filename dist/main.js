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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nconst dom = (() => {\n    const initiate = () => {\n        // display home and all of its tasks\n        // display all projects on sidebar\n    };\n\n    const addProject = () => {\n        projects.switchAddProject();\n    };\n\n    const cancelAddProject = () => {\n        projects.switchAddProject();\n    }\n\n    return {initiate, addProject, cancelAddProject};\n})();\n\nconst projects = (() => {\n    const addProjectBtnDiv = document.querySelector('#addProjectBtnDiv');\n    const addProjectFormDiv = document.querySelector('#addProjectFormDiv');\n\n    const switchAddProject = () => {\n        addProjectBtnDiv.classList.toggle('displayDefault');\n        addProjectBtnDiv.classList.toggle('displayNone');\n        addProjectFormDiv.classList.toggle('displayDefault');\n        addProjectFormDiv.classList.toggle('displayNone');\n    };\n\n    return {switchAddProject};\n})();\n\nconst tasks = (() => {\n\n\n    return {};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst main = (() => {\n    const initiate = () => {\n        _logic__WEBPACK_IMPORTED_MODULE_0__.logic.initiate();\n        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.initiate();\n    };\n\n    const eventlisteners = () => {\n        projectEvents();\n        taskEvents();\n    };\n\n    // projectEvents (helping with navigation)\n    const projectEvents = () => {\n        selectProject();\n        deleteProject();\n        addProject();\n        cancelAddProject();\n        submitNewProject();\n    };\n\n    const selectProject = () => {\n        const allProjects = Array.from(document.querySelectorAll('.projectBtn'));\n        allProjects.forEach(element => {\n            element.addEventListener('click', e => {\n                // need to do something here\n                console.log(e.target);\n            });\n        });\n    };\n\n    const deleteProject = () => {\n        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));\n        allProjectDeleteIcons.forEach(element => {\n            element.addEventListener('click', e => {\n                // need to do something here\n                console.log(e.target);\n            });\n        });\n    };\n\n    const addProject = () => {\n        const addProjectBtn = document.querySelector('#addProjectBtn');\n        addProjectBtn.addEventListener('click', () => {\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.addProject();\n        });\n    };\n\n    const cancelAddProject = () => {\n        const cancelAddProjectBtn = document.querySelector('#cancelAddProjectBtn');\n        cancelAddProjectBtn.addEventListener('click', () => {\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.cancelAddProject();\n        });\n    };\n\n    const submitNewProject = () => {\n        const submitNewProjectBtn = document.querySelector('#submitNewProjectBtn');\n        submitNewProjectBtn.addEventListener('click', () => {\n            // need to do something here\n            console.log(submitNewProjectBtn);\n        });\n    };\n\n    // taskEvents\n    const taskEvents = () => {\n\n    };\n\n    return {initiate, eventlisteners};\n})();\n\nmain.initiate();\nmain.eventlisteners();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logic\": () => (/* binding */ logic)\n/* harmony export */ });\nconst logic = (() => {\n    const initiate = () => {\n        projects.checkArray();\n        tasks.checkArray();\n    };\n\n    return {initiate};\n})();\n\nconst projects = (() => {\n    const checkArray = () => {\n        let projectsArray = JSON.parse(localStorage.getItem('projects'));\n        if (projectsArray == null) {\n            projectsArray = [{\n                name: 'Home',\n                tasks: [],\n            }];\n        };\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    };\n\n    return {checkArray};\n})();\n\nconst tasks = (() => {\n    const checkArray = () => {\n        let tasksArray = JSON.parse(localStorage.getItem('tasks'));\n        if (tasksArray == null) {\n            tasksArray = [];\n        };\n        localStorage.setItem('tasks', JSON.stringify(tasksArray));\n    };\n\n    return {checkArray};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic.js?");

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