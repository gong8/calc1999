"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _probability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./probability */ \"(app-pages-browser)/./app/probability.ts\");\n/* harmony import */ var _expected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expected */ \"(app-pages-browser)/./app/expected.ts\");\n/* harmony import */ var _confidence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confidence */ \"(app-pages-browser)/./app/confidence.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZPFGWTBB.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [pity, setPity] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [pulls, setPulls] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [chance, setChance] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [prob, setProb] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [expect, setExpect] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [conf, setConf] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProb((0,_probability__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pity, pulls));\n        setExpect((0,_expected__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pity));\n        setConf((0,_confidence__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pity, chance));\n    }, [\n        pity,\n        pulls,\n        chance\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            margin: \"2em\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    children: \"Reverse: 1999 Pity Calculator\"\n                }, void 0, false, {\n                    fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                    gridTemplateColumns: \"0.5fr 2fr\",\n                    width: \"80%\",\n                    marginTop: \"2.5em\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Current Pity:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Input, {\n                                onChange: (ev)=>setPity(+ev.target.value),\n                                placeholder: \"input accumulated pity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Number of pulls:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Input, {\n                                onChange: (ev)=>setPulls(+ev.target.value),\n                                placeholder: \"input number of pulls\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Is there a 50/50?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toggle, {\n                                onChange: (ev)=>setPulls(+ev.target.value),\n                                placeholder: \"input number of pulls\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Probability of pulling:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: \"\".concat((prob * 100).toFixed(2), \"%\")\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Expected Pulls:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: \"\".concat(expect.toFixed(1))\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                    gridTemplateColumns: \"0.5fr 2fr\",\n                    width: \"80%\",\n                    marginTop: \"2.5em\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Amount of pulls for probabiity:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Input, {\n                                onChange: (ev)=>setChance(+ev.target.value),\n                                placeholder: \"input probability to see how many pulls you need (between 0 and 1)\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                noOfLines: 1,\n                                children: \"Pulls needed for probability:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.GridItem, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                children: conf\n                            }, void 0, false, {\n                                fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gong/Programming/JavaScript/React/calc1999/app/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PT9Z5BfqMEl7FHPUEd3qzXaFEtQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzhCO0FBQ1M7QUFDTjtBQUNJO0FBR3FFO0FBQzFFO0FBRWpCLFNBQVNZOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsMkNBQWMsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwyQ0FBYyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR25CLDJDQUFjLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsTUFBTUMsUUFBUSxHQUFHckIsMkNBQWMsQ0FBQztJQUN2QyxNQUFNLENBQUNzQixRQUFRQyxVQUFVLEdBQUd2QiwyQ0FBYyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ3dCLE1BQU1DLFFBQVEsR0FBR3pCLDJDQUFjLENBQUM7SUFFdkNXLGdEQUFTQSxDQUFDO1FBQ1JVLFFBQVFwQix3REFBV0EsQ0FBQ1ksTUFBTUc7UUFDMUJPLFVBQVVyQixxREFBUUEsQ0FBQ1c7UUFDbkJZLFFBQVF0Qix1REFBVUEsQ0FBQ1UsTUFBTUs7SUFDM0IsR0FBRztRQUFDTDtRQUFNRztRQUFPRTtLQUFPO0lBQ3hCLHFCQUNFLDhEQUFDZCw0REFBY0E7a0JBQ2IsNEVBQUNHLGlEQUFHQTtZQUFDbUIsUUFBUTs7OEJBQ1gsOERBQUNyQixxREFBT0E7OEJBQUM7Ozs7Ozs4QkFHVCw4REFBQ0ksa0RBQUlBO29CQUFDa0IscUJBQXFCO29CQUFhQyxPQUFPO29CQUFPQyxXQUFXOztzQ0FDL0QsOERBQUNuQixzREFBUUE7NEJBQUNvQixTQUFTOzRCQUFRQyxZQUFZO3NDQUNyQyw0RUFBQ3ZCLG1EQUFJQTtnQ0FBQ3dCLFdBQVc7MENBQUc7Ozs7Ozs7Ozs7O3NDQUd0Qiw4REFBQ3RCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBRXJDLDRFQUFDekIsb0RBQUtBO2dDQUFDMkIsVUFBVSxDQUFDQyxLQUFPcEIsUUFBUSxDQUFDb0IsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQyxhQUFhOzs7Ozs7Ozs7OztzQ0FHbkUsOERBQUMzQixzREFBUUE7NEJBQUNvQixTQUFTOzRCQUFRQyxZQUFZO3NDQUNyQyw0RUFBQ3ZCLG1EQUFJQTtnQ0FBQ3dCLFdBQVc7MENBQUc7Ozs7Ozs7Ozs7O3NDQUd0Qiw4REFBQ3RCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBQ3JDLDRFQUFDekIsb0RBQUtBO2dDQUFDMkIsVUFBVSxDQUFDQyxLQUFPakIsU0FBUyxDQUFDaUIsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQyxhQUFhOzs7Ozs7Ozs7OztzQ0FHcEUsOERBQUMzQixzREFBUUE7NEJBQUNvQixTQUFTOzRCQUFRQyxZQUFZO3NDQUNyQyw0RUFBQ3ZCLG1EQUFJQTtnQ0FBQ3dCLFdBQVc7MENBQUc7Ozs7Ozs7Ozs7O3NDQUd0Qiw4REFBQ3RCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBQ3JDLDRFQUFDTztnQ0FBT0wsVUFBVSxDQUFDQyxLQUFPakIsU0FBUyxDQUFDaUIsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUFHQyxhQUFhOzs7Ozs7Ozs7OztzQ0FNckUsOERBQUMzQixzREFBUUE7NEJBQUNvQixTQUFTOzRCQUFRQyxZQUFZO3NDQUNyQyw0RUFBQ3ZCLG1EQUFJQTtnQ0FBQ3dCLFdBQVc7MENBQUc7Ozs7Ozs7Ozs7O3NDQUd0Qiw4REFBQ3RCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBQ3JDLDRFQUFDdkIsbURBQUlBOzBDQUFFLEdBQTJCLE9BQXhCLENBQUNZLE9BQU8sR0FBRSxFQUFHbUIsT0FBTyxDQUFDLElBQUc7Ozs7Ozs7Ozs7O3NDQUdwQyw4REFBQzdCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBQ3JDLDRFQUFDdkIsbURBQUlBO2dDQUFDd0IsV0FBVzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBR3RCLDhEQUFDdEIsc0RBQVFBOzRCQUFDb0IsU0FBUzs0QkFBUUMsWUFBWTtzQ0FDckMsNEVBQUN2QixtREFBSUE7MENBQUUsR0FBcUIsT0FBbEJjLE9BQU9pQixPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU03Qiw4REFBQzlCLGtEQUFJQTtvQkFBQ2tCLHFCQUFxQjtvQkFBYUMsT0FBTztvQkFBT0MsV0FBVzs7c0NBQy9ELDhEQUFDbkIsc0RBQVFBOzRCQUFDb0IsU0FBUzs0QkFBUUMsWUFBWTtzQ0FDckMsNEVBQUN2QixtREFBSUE7Z0NBQUN3QixXQUFXOzBDQUFHOzs7Ozs7Ozs7OztzQ0FHdEIsOERBQUN0QixzREFBUUE7NEJBQUNvQixTQUFTOzRCQUFRQyxZQUFZO3NDQUNyQyw0RUFBQ3pCLG9EQUFLQTtnQ0FBQzJCLFVBQVUsQ0FBQ0MsS0FBT2YsVUFBVSxDQUFDZSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUdDLGFBQWE7Ozs7Ozs7Ozs7O3NDQUVyRSw4REFBQzNCLHNEQUFRQTs0QkFBQ29CLFNBQVM7NEJBQVFDLFlBQVk7c0NBQ3JDLDRFQUFDdkIsbURBQUlBO2dDQUFDd0IsV0FBVzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBR3RCLDhEQUFDdEIsc0RBQVFBOzRCQUFDb0IsU0FBUzs0QkFBUUMsWUFBWTtzQ0FDckMsNEVBQUN2QixtREFBSUE7MENBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQjtHQXhGd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHByb2JhYmlsaXR5IGZyb20gJy4vcHJvYmFiaWxpdHknXG5pbXBvcnQgZXhwZWN0ZWQgZnJvbSAnLi9leHBlY3RlZCdcbmltcG9ydCBjb25maWRlbmNlIGZyb20gJy4vY29uZmlkZW5jZSdcblxuXG5pbXBvcnQge0NoYWtyYVByb3ZpZGVyLCBIZWFkaW5nLCBJbnB1dCwgVlN0YWNrLCBCb3gsIEhTdGFjaywgVGV4dCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwaXR5LCBzZXRQaXR5XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbcHVsbHMsIHNldFB1bGxzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbY2hhbmNlLCBzZXRDaGFuY2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcm9iLCBzZXRQcm9iXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbZXhwZWN0LCBzZXRFeHBlY3RdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb25mLCBzZXRDb25mXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvYihwcm9iYWJpbGl0eShwaXR5LCBwdWxscykpO1xuICAgIHNldEV4cGVjdChleHBlY3RlZChwaXR5KSk7XG4gICAgc2V0Q29uZihjb25maWRlbmNlKHBpdHksIGNoYW5jZSkpO1xuICB9LCBbcGl0eSwgcHVsbHMsIGNoYW5jZV0pO1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxCb3ggbWFyZ2luPXtcIjJlbVwifT5cbiAgICAgICAgPEhlYWRpbmc+XG4gICAgICAgICAgUmV2ZXJzZTogMTk5OSBQaXR5IENhbGN1bGF0b3JcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8R3JpZCBncmlkVGVtcGxhdGVDb2x1bW5zPXsnMC41ZnIgMmZyJ30gd2lkdGg9e1wiODAlXCJ9IG1hcmdpblRvcD17XCIyLjVlbVwifT5cbiAgICAgICAgICA8R3JpZEl0ZW0gZGlzcGxheT17XCJmbGV4XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgPFRleHQgbm9PZkxpbmVzPXsxfT5DdXJyZW50IFBpdHk6PC9UZXh0PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW0gZGlzcGxheT17XCJmbGV4XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgey8qdHlwZSBudW1iZXIgb25seSovfVxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZXYpID0+IHNldFBpdHkoK2V2LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPXtcImlucHV0IGFjY3VtdWxhdGVkIHBpdHlcIn0+PC9JbnB1dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtIGRpc3BsYXk9e1wiZmxleFwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxUZXh0IG5vT2ZMaW5lcz17MX0+TnVtYmVyIG9mIHB1bGxzOjwvVGV4dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtIGRpc3BsYXk9e1wiZmxleFwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGV2KSA9PiBzZXRQdWxscygrZXYudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9e1wiaW5wdXQgbnVtYmVyIG9mIHB1bGxzXCJ9PjwvSW5wdXQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbSBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8VGV4dCBub09mTGluZXM9ezF9PklzIHRoZXJlIGEgNTAvNTA/PC9UZXh0PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW0gZGlzcGxheT17XCJmbGV4XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgPFRvZ2dsZSBvbkNoYW5nZT17KGV2KSA9PiBzZXRQdWxscygrZXYudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9e1wiaW5wdXQgbnVtYmVyIG9mIHB1bGxzXCJ9PjwvVG9nZ2xlPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cblxuXG5cbiAgICAgICAgICA8R3JpZEl0ZW0gZGlzcGxheT17XCJmbGV4XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgPFRleHQgbm9PZkxpbmVzPXsxfT5Qcm9iYWJpbGl0eSBvZiBwdWxsaW5nOjwvVGV4dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtIGRpc3BsYXk9e1wiZmxleFwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxUZXh0PntgJHsocHJvYiAqIDEwMCkudG9GaXhlZCgyKX0lYH08L1RleHQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbSBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8VGV4dCBub09mTGluZXM9ezF9PkV4cGVjdGVkIFB1bGxzOjwvVGV4dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtIGRpc3BsYXk9e1wiZmxleFwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxUZXh0PntgJHtleHBlY3QudG9GaXhlZCgxKX1gfTwvVGV4dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGdyaWRUZW1wbGF0ZUNvbHVtbnM9eycwLjVmciAyZnInfSB3aWR0aD17XCI4MCVcIn0gbWFyZ2luVG9wPXtcIjIuNWVtXCJ9PlxuICAgICAgICAgIDxHcmlkSXRlbSBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8VGV4dCBub09mTGluZXM9ezF9PkFtb3VudCBvZiBwdWxscyBmb3IgcHJvYmFiaWl0eTo8L1RleHQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbSBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhldikgPT4gc2V0Q2hhbmNlKCtldi50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj17XCJpbnB1dCBwcm9iYWJpbGl0eSB0byBzZWUgaG93IG1hbnkgcHVsbHMgeW91IG5lZWQgKGJldHdlZW4gMCBhbmQgMSlcIn0+PC9JbnB1dD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgICA8VGV4dCBub09mTGluZXM9ezF9PlB1bGxzIG5lZWRlZCBmb3IgcHJvYmFiaWxpdHk6PC9UZXh0PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW0gZGlzcGxheT17XCJmbGV4XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgPFRleHQ+e2NvbmZ9PC9UZXh0PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cblxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvYmFiaWxpdHkiLCJleHBlY3RlZCIsImNvbmZpZGVuY2UiLCJDaGFrcmFQcm92aWRlciIsIkhlYWRpbmciLCJJbnB1dCIsIkJveCIsIlRleHQiLCJHcmlkIiwiR3JpZEl0ZW0iLCJ1c2VFZmZlY3QiLCJIb21lIiwicGl0eSIsInNldFBpdHkiLCJ1c2VTdGF0ZSIsInB1bGxzIiwic2V0UHVsbHMiLCJjaGFuY2UiLCJzZXRDaGFuY2UiLCJwcm9iIiwic2V0UHJvYiIsImV4cGVjdCIsInNldEV4cGVjdCIsImNvbmYiLCJzZXRDb25mIiwibWFyZ2luIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIndpZHRoIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJub09mTGluZXMiLCJvbkNoYW5nZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIlRvZ2dsZSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});