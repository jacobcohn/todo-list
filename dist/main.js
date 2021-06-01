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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom),\n/* harmony export */   \"displayError\": () => (/* binding */ displayError)\n/* harmony export */ });\nconst dom = (() => {\n    const initiate = () => {\n        // display home and all of its tasks\n        projects.displayAllProjects();\n    };\n\n    const addProject = () => {\n        projects.switchAddProjectElements();\n    };\n\n    const cancelAddProject = () => {\n        projects.switchAddProjectElements();\n    };\n\n    const submitNewProject = () => {\n        projects.switchAddProjectElements();\n        projects.displayNewProject();\n        projects.fixAddProjectInput();\n    };\n\n    const deleteProject = (projectName) => {\n        projects.removeProjectFromDisplay(projectName);\n    };\n\n    return {initiate, addProject, cancelAddProject, submitNewProject, deleteProject};\n})();\n\nconst projects = (() => {\n    const switchAddProjectElements = () => {\n        const addProjectBtnDiv = document.querySelector('#addProjectBtnDiv');\n        const addProjectFormDiv = document.querySelector('#addProjectFormDiv');\n        addProjectBtnDiv.classList.toggle('displayDefault');\n        addProjectBtnDiv.classList.toggle('displayNone');\n        addProjectFormDiv.classList.toggle('displayDefault');\n        addProjectFormDiv.classList.toggle('displayNone');\n    };\n\n    const displayAProject = (projectName) => {\n        const allProjectsContainer = document.querySelector('#allProjectsContainer');\n\n        // create projectDiv\n        const projectDiv = document.createElement('div');\n        projectDiv.id = projectName + ' projectDiv';\n        projectDiv.classList.toggle('projectDiv');\n        allProjectsContainer.appendChild(projectDiv);\n\n        // create projectBtn\n        const projectBtn = document.createElement('button');\n        projectBtn.id = projectName + ' projectBtn';\n        projectBtn.classList.toggle('projectBtn');\n        projectBtn.textContent = projectName;\n        projectDiv.appendChild(projectBtn);\n\n        // create projectDeleteIcon\n        const projectDeleteIcon = document.createElement('i');\n        projectDeleteIcon.id = projectName + ' projectDeleteIcon';\n        projectDeleteIcon.classList.toggle('fas');\n        projectDeleteIcon.classList.toggle('fa-trash');\n        projectDeleteIcon.classList.toggle('projectDeleteIcon');\n        projectDiv.appendChild(projectDeleteIcon);\n    };\n\n    const displayNewProject = () => {\n        const projectsArray = JSON.parse(localStorage.getItem('projects'));\n        const newProjectName = projectsArray[projectsArray.length - 1].name;\n        displayAProject(newProjectName);\n    };\n\n    const displayAllProjects = () => {\n        const projectsArray = JSON.parse(localStorage.getItem('projects'));\n        const projectNamesArray = projectsArray.map(element => element.name);\n        projectNamesArray.forEach(projectName => {\n            if (projectName == 'Home') return;\n            displayAProject(projectName);\n        });\n    };\n\n    const removeProjectFromDisplay = (projectName) => {\n        const projectDiv = document.getElementById(projectName + ' projectDiv');\n        projectDiv.remove();\n    };\n\n    const fixAddProjectInput = () => {\n        const addProjectInput = document.getElementById('addProjectInput');\n        addProjectInput.value = '';\n    };\n\n    return {switchAddProjectElements, displayNewProject, displayAllProjects, removeProjectFromDisplay, fixAddProjectInput};\n})();\n\nconst tasks = (() => {\n\n\n    return {};\n})();\n\nconst displayError = (() => {\n    const errorMessage = (message) => {\n        console.log(message);\n    };\n\n    return {errorMessage}\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/errors.js":
/*!***********************!*\
  !*** ./src/errors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errors\": () => (/* binding */ errors)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst errors = (() => {\n    const isSubmitProjectError = () => {\n        return projects.checkSubmitProjectInput();\n    }\n\n    return {isSubmitProjectError};\n})();\n\nconst projects = (() => {\n    const checkSubmitProjectInput = () => {\n        const inputValue = document.getElementById('addProjectInput').value;\n        if (inputValue == '' || inputValue == null) {\n            _dom__WEBPACK_IMPORTED_MODULE_0__.displayError.errorMessage('Project Name is Required');\n            return true;\n        };\n        const projectsArray = JSON.parse(localStorage.getItem('projects'));\n        const projectNamesArray = projectsArray.map(project => project.name);\n        if (projectNamesArray.some(projectName => projectName == inputValue)) {  \n            _dom__WEBPACK_IMPORTED_MODULE_0__.displayError.errorMessage('Two Projects Cannot Have The Same Name')  \n            return true;\n        };\n        return false;\n    }\n\n    return {checkSubmitProjectInput};\n})();\n\nconst tasks = (() => {\n    return {};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/errors.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => (/* binding */ events)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ \"./src/errors.js\");\n\n\n\n\n/* \nthings that I need to do:\n- form validation (not the same name and not nothing)\n*/\n\n\nconst events = (() => {\n    const initiate = () => {\n        initialProjectEvents();\n        initialTaskEvents();\n    };\n\n    const initialProjectEvents = () => {\n        projects.selectProject();\n        projects.deleteProject();\n        projects.addProject();\n        projects.cancelAddProject();\n        projects.submitNewProject();\n    };\n\n    const initialTaskEvents = () => {\n\n    };\n\n    const submitNewProject = () => {\n        projects.addEventListenersToProject();\n    };\n\n    return {initiate, submitNewProject};\n})();\n\nconst projects = (() => {\n    const selectProject = () => {\n        const allProjects = Array.from(document.querySelectorAll('.projectBtn'));\n        allProjects.forEach(element => {\n            element.addEventListener('click', e => {\n                // need to do something here\n                console.log(e.target);\n            });\n        });\n    };\n\n    const deleteProject = () => {\n        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));\n        allProjectDeleteIcons.forEach(element => {\n            deleteProjectEventListener(element);\n        });\n    };\n\n    const deleteProjectEventListener = (projectDeleteIcon) => {\n        projectDeleteIcon.addEventListener('click', e => {\n            const projectName = e.target.id.replace(' projectDeleteIcon', '');\n            _logic__WEBPACK_IMPORTED_MODULE_0__.logic.deleteProject(projectName);\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.deleteProject(projectName);\n        });\n    };\n\n    const addProject = () => {\n        const addProjectBtn = document.querySelector('#addProjectBtn');\n        addProjectBtn.addEventListener('click', () => {\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.addProject();\n        });\n    };\n\n    const cancelAddProject = () => {\n        const cancelAddProjectBtn = document.querySelector('#cancelAddProjectBtn');\n        cancelAddProjectBtn.addEventListener('click', () => {\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.cancelAddProject();\n        });\n    };\n\n    const submitNewProject = () => {\n        const submitNewProjectBtn = document.querySelector('#submitNewProjectBtn');\n        submitNewProjectBtn.addEventListener('click', e => {\n            e.preventDefault();\n            if (_errors__WEBPACK_IMPORTED_MODULE_2__.errors.isSubmitProjectError()) return;\n            _logic__WEBPACK_IMPORTED_MODULE_0__.logic.submitNewProject();\n            _dom__WEBPACK_IMPORTED_MODULE_1__.dom.submitNewProject();\n            events.submitNewProject();\n        });\n    };\n\n    const addEventListenersToProject = () => {\n        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));\n        const newProjectDeleteIcon = allProjectDeleteIcons[allProjectDeleteIcons.length - 1];\n        deleteProjectEventListener(newProjectDeleteIcon);\n    };\n\n    return {selectProject, deleteProject, addProject, cancelAddProject, submitNewProject, addEventListenersToProject}\n})();\n\nconst tasks = (() => {\n\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\n\nconst main = (() => {\n    const initiate = () => {\n        _logic__WEBPACK_IMPORTED_MODULE_0__.logic.initiate();\n        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.initiate();\n        _events__WEBPACK_IMPORTED_MODULE_2__.events.initiate();\n    };\n\n    return {initiate};\n})();\n\nmain.initiate();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logic\": () => (/* binding */ logic)\n/* harmony export */ });\nconst logic = (() => {\n    const initiate = () => {\n        projects.checkArray();\n        tasks.checkArray();\n    };\n\n    const submitNewProject = () => {\n        projects.addProjectToArray(projects.createNewProject(projects.getInputValue()));\n    };\n\n    const deleteProject = (projectName) => {\n        projects.removeProjectFromArray(projectName);\n    };\n\n    return {initiate, submitNewProject, deleteProject};\n})();\n\nconst projects = (() => {\n    const checkArray = () => {\n        let projectsArray = JSON.parse(localStorage.getItem('projects'));\n        if (projectsArray == null) {\n            projectsArray = [{\n                name: 'Home',\n                tasks: [],\n            }];\n        };\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    };\n\n    const getInputValue = () => {\n        const inputValue = document.querySelector('#addProjectInput').value;\n        return inputValue;\n    };\n\n    const createNewProject = (name) => {\n        const tasks = [];\n        return {name, tasks}\n    };\n\n    const addProjectToArray = (newProject) => {\n        const projectsArray = JSON.parse(localStorage.getItem('projects'));\n        projectsArray.push(newProject);\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    };\n\n    const removeProjectFromArray = (projectName) => {\n        const projectsArray = JSON.parse(localStorage.getItem('projects'));\n        const projectNamesArray = projectsArray.map(projectObject => projectObject.name);\n        const index = projectNamesArray.indexOf(projectName);\n        projectsArray.splice(index, 1);\n        localStorage.setItem('projects', JSON.stringify(projectsArray));\n    };\n\n    return {checkArray, getInputValue, createNewProject, addProjectToArray, removeProjectFromArray};\n})();\n\nconst tasks = (() => {\n    const checkArray = () => {\n        let tasksArray = JSON.parse(localStorage.getItem('tasks'));\n        if (tasksArray == null) {\n            tasksArray = [];\n        };\n        localStorage.setItem('tasks', JSON.stringify(tasksArray));\n    };\n\n    return {checkArray};\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/logic.js?");

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