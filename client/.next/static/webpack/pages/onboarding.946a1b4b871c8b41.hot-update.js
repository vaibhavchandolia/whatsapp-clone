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

/***/ "./src/pages/onboarding.jsx":
/*!**********************************!*\
  !*** ./src/pages/onboarding.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction onboarding() {\n    _s();\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"/default_avatar.png\");\n    const onboardUserHandler = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-2xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create your profile\"\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center mt-5 gap-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"Display name\",\n                                state: name,\n                                setState: setName,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"About\",\n                                state: about,\n                                setState: setAbout,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex items-centre justify-center gap-7 bg-search-input-container-background p-5 rounded-lg\",\n                                    on: true,\n                                    children: \"Create Profile\"\n                                }, void 0, false, {\n                                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            type: \"xl\",\n                            image: image,\n                            setImage: setImage\n                        }, void 0, false, {\n                            fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/pages/onboarding.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n_s(onboarding, \"G08GwN6vrO6HCuYHp8xSNgXjQII=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ0Y7QUFDWTtBQUMzQjtBQUNTO0FBR3hDLFNBQVNNLGFBQWE7O0lBRXBCLE1BQU0sQ0FBQyxFQUFDQyxTQUFRLEVBQUMsQ0FBQyxHQUFHTCx1RUFBZ0JBO0lBQ3JDLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQ0UsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVQyxJQUFJLEtBQUk7SUFDbkQsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUyxxQkFBcUIsVUFBWSxDQUFDO0lBRXhDLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2IsbURBQUtBO3dCQUNKYyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxRQUFRO3dCQUNSQyxPQUFPOzs7Ozs7a0NBRVQsOERBQUNDO3dCQUFLTCxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDTTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2YsZ0VBQUtBO2dDQUFDTyxNQUFLO2dDQUFlZSxPQUFPZjtnQ0FBTWdCLFVBQVVmO2dDQUFTZ0IsS0FBSzs7Ozs7OzBDQUNoRSw4REFBQ3hCLGdFQUFLQTtnQ0FBQ08sTUFBSztnQ0FBUWUsT0FBT2I7Z0NBQU9jLFVBQVViO2dDQUFVYyxLQUFLOzs7Ozs7MENBQzNELDhEQUFDVjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1U7b0NBQU9WLFdBQVU7b0NBQ2hCVyxFQUFFOzhDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHVCw4REFBQ1o7a0NBQ0MsNEVBQUNmLGlFQUFNQTs0QkFBQzRCLE1BQUs7NEJBQUtoQixPQUFPQTs0QkFBT0MsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEO0dBbENTUDs7UUFFY0osbUVBQWdCQTs7O0FBa0N2QywrREFBZUksVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3g/ODI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhclwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gb25ib2FyZGluZygpIHtcblxuICBjb25zdCBbe3VzZXJJbmZvfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKClcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUodXNlckluZm8/Lm5hbWUgfHwgXCJcIilcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiL2RlZmF1bHRfYXZhdGFyLnBuZ1wiKSAgXG4gIFxuICBjb25zdCBvbmJvYXJkVXNlckhhbmRsZXIgPSBhc3luYyAoKSA9PiB7fVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtc2NyZWVuIHctc2NyZWVuIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCI+XG4gICAgICA8SW1hZ2UgXG4gICAgICAgIHNyYz1cIi93aGF0c2FwcC5naWZcIlxuICAgICAgICBhbHQ9XCJ3aGF0c2FwcFwiXG4gICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+V2hhdHNhcHA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGgyPkNyZWF0ZSB5b3VyIHByb2ZpbGU8L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBtdC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgZ2FwLTZcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJEaXNwbGF5IG5hbWVcIiBzdGF0ZT17bmFtZX0gc2V0U3RhdGU9e3NldE5hbWV9IGxhYmVsLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJBYm91dFwiIHN0YXRlPXthYm91dH0gc2V0U3RhdGU9e3NldEFib3V0fSBsYWJlbCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRyZSBqdXN0aWZ5LWNlbnRlciBnYXAtNyBiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgcC01IHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgb24+Q3JlYXRlIFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBdmF0YXIgdHlwZT1cInhsXCIgaW1hZ2U9e2ltYWdlfSBzZXRJbWFnZT17c2V0SW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uYm9hcmRpbmc7XG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiSW5wdXQiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwib25ib2FyZGluZyIsInVzZXJJbmZvIiwibmFtZSIsInNldE5hbWUiLCJhYm91dCIsInNldEFib3V0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm9uYm9hcmRVc2VySGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImgyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxhYmVsIiwiYnV0dG9uIiwib24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});