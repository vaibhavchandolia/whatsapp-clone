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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ \"./node_modules/@firebase/util/dist/index.esm2017.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CapturePhoto(param) {\n    let { hide , setImage  } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let stream;\n        const startCamera = async ()=>{\n            stream = await navigator.mediaDevices.getUserMedia({\n                video: true,\n                audio: false\n            });\n        };\n    }, []);\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.getContext(\"2d\").drawImage(videoRef.current, 0, 0, 300, 150);\n        setImage(canvas.toDataURL(\"image/jpeg\"));\n        hide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg pt-2 flex item-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pr-2 cursor-pointer flex items-end justify-end\",\n                    onClick: ()=>{\n                        hide(false);\n                        console.log(\"hello\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {\n                        className: \"h-10 w-10 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"video\",\n                        width: \"400\",\n                        autoPlay: true,\n                        ref: videoRef\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: capturePhoto,\n                    className: \"h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10\"\n                }, void 0, false, {\n                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/CapturePhoto.jsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_s(CapturePhoto, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = CapturePhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CapturePhoto);\nvar _c;\n$RefreshReg$(_c, \"CapturePhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDVTtBQUNWO0FBR3ZDLFNBQVNLLGFBQWEsS0FBZ0IsRUFBRTtRQUFsQixFQUFDQyxLQUFJLEVBQUVDLFNBQVEsRUFBQyxHQUFoQjs7SUFFcEIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUU1QkQsZ0RBQVNBLENBQUMsSUFBSztRQUNiLElBQUlPO1FBQ0osTUFBTUMsY0FBYyxVQUFZO1lBQzlCRCxTQUFTLE1BQU1FLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUNqREMsT0FBTyxJQUFJO2dCQUNYQyxPQUFPLEtBQUs7WUFDZDtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csVUFBVSxDQUFDLE1BQU1DLFNBQVMsQ0FBQ2IsU0FBU2MsT0FBTyxFQUFDLEdBQUUsR0FBRSxLQUFJO1FBQzNEZixTQUFTVSxPQUFPTSxTQUFTLENBQUM7UUFDMUJqQixLQUFLLEtBQUs7SUFDWjtJQUVBLHFCQUFPLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDcEIsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTtvQkFDWEMsU0FBUyxJQUFNO3dCQUNicEIsS0FBSyxLQUFLO3dCQUNWcUIsUUFBUUMsR0FBRyxDQUFDO29CQUFROzhCQUN0Qiw0RUFBQ3hCLG9EQUFPQTt3QkFBQ3FCLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVyQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNYO3dCQUFNZSxJQUFHO3dCQUFRQyxPQUFNO3dCQUFNQyxRQUFRO3dCQUFDQyxLQUFLeEI7Ozs7Ozs7Ozs7OzhCQUU5Qyw4REFBQ3lCO29CQUNDUCxTQUFTVjtvQkFDVFMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEI7R0FyQ1NwQjtLQUFBQTtBQXVDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ2FwdHVyZVBob3RvLmpzeD9kMjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIkBmaXJlYmFzZS91dGlsXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SW9DbG9zZX0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xuXG5cbmZ1bmN0aW9uIENhcHR1cmVQaG90byh7aGlkZSwgc2V0SW1hZ2V9KSB7XG5cbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgbGV0IHN0cmVhbVxuICAgIGNvbnN0IHN0YXJ0Q2FtZXJhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICB2aWRlbzogdHJ1ZSxcbiAgICAgICAgYXVkaW86IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgY2FwdHVyZVBob3RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh2aWRlb1JlZi5jdXJyZW50LDAsMCwzMDAsMTUwKVxuICAgIHNldEltYWdlKGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpKVxuICAgIGhpZGUoZmFsc2UpXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTQvNiB3LTIvNiB0b3AtMS80IGxlZnQtMS8zIGJnLWdyYXktOTAwIGdhcC0zIHJvdW5kZWQtbGcgcHQtMiBmbGV4IGl0ZW0tY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbCBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHItMiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZFwiIFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IFxuICAgICAgICAgIGhpZGUoZmFsc2UpIFxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIil9fT5cbiAgICAgICAgPElvQ2xvc2UgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIGN1cnNvci1wb2ludGVyXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiB3aWR0aD1cIjQwMFwiIGF1dG9QbGF5IHJlZj17dmlkZW9SZWZ9PjwvdmlkZW8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIG9uQ2xpY2s9e2NhcHR1cmVQaG90b31cbiAgICAgICAgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciBib3JkZXItOCBib3JkZXItdGVhbC1saWdodCBwLTIgbWItMTBcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0dXJlUGhvdG87XG4iXSwibmFtZXMiOlsiYXN5bmMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIklvQ2xvc2UiLCJDYXB0dXJlUGhvdG8iLCJoaWRlIiwic2V0SW1hZ2UiLCJ2aWRlb1JlZiIsInN0cmVhbSIsInN0YXJ0Q2FtZXJhIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJhdWRpbyIsImNhcHR1cmVQaG90byIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJjdXJyZW50IiwidG9EYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIndpZHRoIiwiYXV0b1BsYXkiLCJyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/CapturePhoto.jsx\n"));

/***/ })

});