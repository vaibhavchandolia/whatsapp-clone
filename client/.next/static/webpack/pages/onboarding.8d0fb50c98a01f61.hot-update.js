"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/CapturePhoto.jsx":
/*!************************************************!*\
  !*** ./src/components/common/CapturePhoto.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\n\n\nfunction CapturePhoto(param) {\n    let { hide , setImage  } = param;\n    const videoRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex item-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                    onClick: ()=>{\n                        hide(false);\n                        console.log(\"hello\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoClose, {\n                        className: \"h-10 w-10 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"video\",\n                        width: \"400\",\n                        autoPlay: true,\n                        ref: videoRef\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n        lineNumber: 9,\n        columnNumber: 10\n    }, this);\n}\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ0M7QUFHdkMsU0FBU0csYUFBYSxLQUFnQixFQUFFO1FBQWxCLEVBQUNDLEtBQUksRUFBRUMsU0FBUSxFQUFDLEdBQWhCO0lBRXBCLE1BQU1DLFdBQVdMLHlDQUFNQTtJQUV2QixxQkFBTyw4REFBQ007UUFBSUMsV0FBVTtrQkFDcEIsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTtvQkFDWEMsU0FBUyxJQUFNO3dCQUNiTCxLQUFLLEtBQUs7d0JBQ1ZNLFFBQVFDLEdBQUcsQ0FBQztvQkFBUTs4QkFDdEIsNEVBQUNULG9EQUFPQTt3QkFBQ00sV0FBVTs7Ozs7Ozs7Ozs7OEJBRXJCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0k7d0JBQU1DLElBQUc7d0JBQVFDLE9BQU07d0JBQU1DLFFBQVE7d0JBQUNDLEtBQUtWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0tBakJTSDtBQW1CVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeD9kMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SW9DbG9zZX0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xuXG5cbmZ1bmN0aW9uIENhcHR1cmVQaG90byh7aGlkZSwgc2V0SW1hZ2V9KSB7XG5cbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWZcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTQvNiB3LTIvNiB0b3AtMS80IGxlZnQtMS8zIGJnLWdyYXktOTAwIGdhcC0zIHJvdW5kZWQtbGcgcHQtMiBmbGV4IGl0ZW0tY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwci0yIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktZW5kXCIgXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgXG4gICAgICAgICAgaGlkZShmYWxzZSkgXG4gICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKX19PlxuICAgICAgICA8SW9DbG9zZSBjbGFzc05hbWU9XCJoLTEwIHctMTAgY3Vyc29yLXBvaW50ZXJcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb1wiIHdpZHRoPVwiNDAwXCIgYXV0b1BsYXkgcmVmPXt2aWRlb1JlZn0+PC92aWRlbz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcHR1cmVQaG90bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJDYXB0dXJlUGhvdG8iLCJoaWRlIiwic2V0SW1hZ2UiLCJ2aWRlb1JlZiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwidmlkZW8iLCJpZCIsIndpZHRoIiwiYXV0b1BsYXkiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});