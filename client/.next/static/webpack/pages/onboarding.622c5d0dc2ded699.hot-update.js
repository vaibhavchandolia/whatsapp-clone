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

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _PhotoLibrary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoLibrary */ \"./src/components/common/PhotoLibrary.jsx\");\n/* harmony import */ var _PhotoPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [grabPhoto, setGrabPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showPhotoLibrary, setShowPhotoLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n        setIsContextMenuVisible(true);\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createElement(\"img\");\n        reader.onload = function(event) {\n            data.src = event.target.result;\n            data.setAttribute(\"data--src\", event.target.result);\n        };\n        reader.readAsDataURL(file);\n        setTimeout(()=>{\n            setImage(data.src);\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-10 w-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full \",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full \",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        onClick: (e)=>showContextMenu(e),\n                        id: \"context-opener\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background absolute h-60 w-60 top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2\\n            \".concat(hover ? \"visible\" : \"hidden\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"change\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 77\n                                            }, this),\n                                            \" Profile Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full \",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this),\n            \" \",\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            sPhotoLibrary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoLibrary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setImage: setImage,\n                hidePhotoLibrary: setShowPhotoLibrary\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                lineNumber: 100,\n                columnNumber: 23\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhotoPicker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"/home/vaibhav/nextProjects/nextjs-whatsapp-clone-starter/client/src/components/common/Avatar.jsx\",\n                lineNumber: 102,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"/D/8p4uMV7IoJoupGymwKFtxmDU=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxJQUFNNUMsU0FBUyxLQUFLO3dCQUNsQzZDLFNBQVNqQyxDQUFBQSxJQUFHRCxnQkFBZ0JDO3dCQUM1QmtDLElBQUc7OzBDQUVILDhEQUFDUDtnQ0FBSUMsV0FBVyxnS0FDaUIsT0FBN0J6QyxRQUFRLFlBQVksUUFBUTs7a0RBQzlCLDhEQUFDUixvREFBUUE7d0NBQUNpRCxXQUFVO3dDQUNwQk0sSUFBRzt3Q0FDSEQsU0FBU2pDLENBQUFBLElBQUdELGdCQUFnQkM7Ozs7OztrREFDNUIsOERBQUNtQzt3Q0FBS0YsU0FBU2pDLENBQUFBLElBQUdELGdCQUFnQkM7d0NBQUlrQyxJQUFHOzs0Q0FBaUI7MERBQU0sOERBQUNFOzs7Ozs0Q0FBSzs7Ozs7Ozs7Ozs7OzswQ0FFeEUsOERBQUNUO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDcEQsbURBQUtBO29DQUFDK0MsS0FBS3RDO29DQUFPNEMsS0FBSTtvQ0FBU0QsV0FBVTtvQ0FBZ0JFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS2hFO1lBQ0p6QyxzQ0FDQSw4REFBQ1Qsb0RBQVdBO2dCQUNaeUQsU0FBU2pDO2dCQUNUa0MsWUFBWS9DO2dCQUNaZ0QsZ0JBQWdCakQ7Ozs7OztZQUVqQmtELCtCQUFpQiw4REFBQzNELHFEQUFZQTtnQkFBQ0ssVUFBVUE7Z0JBQ3hDdUQsa0JBQWtCM0M7Ozs7OztZQUNuQkgsMkJBQWEsOERBQUNiLG9EQUFXQTtnQkFBQzRELFVBQVU1Qjs7Ozs7Ozs7QUFHekM7R0FqR1MvQjtLQUFBQTtBQW1HVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2FtZXJhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4vQ29udGV4dE1lbnVcIjtcbmltcG9ydCBQaG90b0xpYnJhcnkgZnJvbSBcIi4vUGhvdG9MaWJyYXJ5XCI7XG5pbXBvcnQgUGhvdG9QaWNrZXIgZnJvbSBcIi4vUGhvdG9QaWNrZXJcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLCBpbWFnZSwgc2V0SW1hZ2V9KSB7XG5cbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzQ29udGV4dE1lbnVWaXNpYmxlLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbnRleHRNZW51Q29yZGluYXRlcywgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzXSA9IHVzZVN0YXRlKHt4OjAsIHk6MH0pXG4gIGNvbnN0IFtncmFiUGhvdG8sIHNldEdyYWJQaG90b10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3dQaG90b0xpYnJhcnksIHNldFNob3dQaG90b0xpYnJhcnldID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldENvbnRleHRNZW51Q29yZGluYXRlcyh7eDogZS5wYWdlWCwgeTogZS5wYWdlWX0pXG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcbiAgICB7bmFtZTpcIlRha2UgUGhvdG9cIiwgY2FsbGJhY2s6ICgpID0+IHt9fSxcbiAgICB7bmFtZTpcIkNob29zZSBGcm9tIExpYnJhcnlcIiwgY2FsbGJhY2s6ICgpID0+IHt9fSxcbiAgICB7bmFtZTpcIlVwbG9hZCBQaG90b1wiLCBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgc2V0R3JhYlBob3RvKHRydWUpXG4gICAgfX0sXG4gICAge25hbWU6XCJSZW1vdmUgUGhvdG9cIiwgXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBzZXRJbWFnZShcIi9kZWZhdWx0X2F2YXRhci5wbmdcIilcbiAgICB9fVxuICBdXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGdyYWJQaG90byl7XG4gICAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1waWNrZXJcIilcbiAgICAgIGRhdGEuY2xpY2soKVxuICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0R3JhYlBob3RvKGZhbHNlKVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2dyYWJQaG90b10pXG5cbiAgY29uc3QgcGhvdG9QaWNrZXJDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICBjb25zdCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHJlYWRlci5vbmxvYWQ9ZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZGF0YS5zcmM9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgIGRhdGEuc2V0QXR0cmlidXRlKFwiZGF0YS0tc3JjXCIsIGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJbWFnZShkYXRhLnNyYylcbiAgICB9LCAxMDApXG4gIH1cblxuICByZXR1cm4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHt0eXBlID09PSBcInNtXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgXCIgZmlsbC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt0eXBlID09PSBcImxnXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgXCIgZmlsbC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt0eXBlID09PSBcInhsXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKT0+IHNldEhvdmVyKHRydWUpfSBcbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cbiAgICAgICAgICBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9XG4gICAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHotMTAgYmctcGhvdG9waWNrZXItb3ZlcmxheS1iYWNrZ3JvdW5kIGFic29sdXRlIGgtNjAgdy02MCB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGp1c3RpZnktY2VudGVyIGZsZXgtY29sIHRleHQtY2VudGVyIGdhcC0yXG4gICAgICAgICAgICAke2hvdmVyID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifWB9PlxuICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgXG4gICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCIgXG4gICAgICAgICAgICBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9Lz5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKX0gaWQ9XCJjb250ZXh0LW9wZW5lclwiPmNoYW5nZTxiciAvPiBQcm9maWxlIFBob3RvPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIFwiIGZpbGwvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICBcbiAgICA8L2Rpdj4ge1xuICAgICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgKFxuICAgICAgPENvbnRleHRNZW51IFxuICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfSBcbiAgICAgIGNvcmRpbmF0ZXM9e2NvbnRleHRNZW51Q29yZGluYXRlc31cbiAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51VmlzaWJsZX0vPlxuICAgICl9XG4gICAge3NQaG90b0xpYnJhcnkgJiYgPFBob3RvTGlicmFyeSBzZXRJbWFnZT17c2V0SW1hZ2V9IFxuICAgICAgaGlkZVBob3RvTGlicmFyeT17c2V0U2hvd1Bob3RvTGlicmFyeX0gLz59XG4gICAge2dyYWJQaG90byAmJiA8UGhvdG9QaWNrZXIgb25DaGFuZ2U9e3Bob3RvUGlja2VyQ2hhbmdlfSAvPn1cbiAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYUNhbWVyYSIsIkNvbnRleHRNZW51IiwiUGhvdG9MaWJyYXJ5IiwiUGhvdG9QaWNrZXIiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhvdmVyIiwic2V0SG92ZXIiLCJpc0NvbnRleHRNZW51VmlzaWJsZSIsInNldElzQ29udGV4dE1lbnVWaXNpYmxlIiwiY29udGV4dE1lbnVDb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzIiwieCIsInkiLCJncmFiUGhvdG8iLCJzZXRHcmFiUGhvdG8iLCJzaG93UGhvdG9MaWJyYXJ5Iiwic2V0U2hvd1Bob3RvTGlicmFyeSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWNrIiwiYm9keSIsIm9uZm9jdXMiLCJzZXRUaW1lb3V0IiwicGhvdG9QaWNrZXJDaGFuZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsImV2ZW50Iiwic3JjIiwicmVzdWx0Iiwic2V0QXR0cmlidXRlIiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsInNldENvbnRleHRNZW51Iiwic1Bob3RvTGlicmFyeSIsImhpZGVQaG90b0xpYnJhcnkiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});