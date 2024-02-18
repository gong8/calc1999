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

/***/ "(app-pages-browser)/./app/probability.ts":
/*!****************************!*\
  !*** ./app/probability.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ probability; }\n/* harmony export */ });\nfunction singleChance(pull) {\n    if (pull >= 70) return 1;\n    return 0.015 + Math.max(0, (pull - 60) * 0.025);\n}\nfunction probability(pity, pulls, is5050) {\n    if (pulls >= 70) return is5050 ? probability(0, pulls - 1, false) + 0.5 : 1;\n    if (pulls <= 0) return 0;\n    let chance = singleChance(pity + 1);\n    if (is5050) {\n        const yes = chance * (0.5 + 0.5 * probability(0, pulls - 1, false));\n        const no = (1 - chance) * probability(pity + 1, pulls - 1, true);\n        return yes + no;\n    } else {\n        const yes = chance * 1;\n        const no = (1 - chance) * probability(pity + 1, pulls - 1, false);\n        return yes + no;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9iYWJpbGl0eS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsYUFBYUMsSUFBWTtJQUNoQyxJQUFJQSxRQUFRLElBQUksT0FBTztJQUN2QixPQUFPLFFBQVFDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHLENBQUNGLE9BQU8sRUFBQyxJQUFLO0FBQzNDO0FBRWUsU0FBU0csWUFBWUMsSUFBWSxFQUFFQyxLQUFhLEVBQUVDLE1BQWU7SUFDOUUsSUFBSUQsU0FBUyxJQUFJLE9BQU9DLFNBQVNILFlBQVksR0FBR0UsUUFBUSxHQUFHLFNBQVMsTUFBTTtJQUMxRSxJQUFJQSxTQUFTLEdBQUcsT0FBTztJQUN2QixJQUFJRSxTQUFpQlIsYUFBYUssT0FBTztJQUN6QyxJQUFJRSxRQUFRO1FBQ1YsTUFBTUUsTUFBTUQsU0FBVSxPQUFNLE1BQU1KLFlBQVksR0FBR0UsUUFBUSxHQUFHLE1BQUs7UUFDakUsTUFBTUksS0FBSyxDQUFDLElBQUlGLE1BQUssSUFBS0osWUFBWUMsT0FBTyxHQUFHQyxRQUFRLEdBQUc7UUFDM0QsT0FBT0csTUFBTUM7SUFDZixPQUFPO1FBQ0wsTUFBTUQsTUFBTUQsU0FBUztRQUNyQixNQUFNRSxLQUFLLENBQUMsSUFBSUYsTUFBSyxJQUFLSixZQUFZQyxPQUFPLEdBQUdDLFFBQVEsR0FBRztRQUMzRCxPQUFPRyxNQUFNQztJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2JhYmlsaXR5LnRzPzEzODQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2luZ2xlQ2hhbmNlKHB1bGw6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwdWxsID49IDcwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDAuMDE1ICsgTWF0aC5tYXgoMCwgKHB1bGwgLSA2MCkgKiAwLjAyNSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2JhYmlsaXR5KHBpdHk6IG51bWJlciwgcHVsbHM6IG51bWJlciwgaXM1MDUwOiBib29sZWFuKTogbnVtYmVyIHtcbiAgaWYgKHB1bGxzID49IDcwKSByZXR1cm4gaXM1MDUwID8gcHJvYmFiaWxpdHkoMCwgcHVsbHMgLSAxLCBmYWxzZSkgKyAwLjUgOiAxO1xuICBpZiAocHVsbHMgPD0gMCkgcmV0dXJuIDA7XG4gIGxldCBjaGFuY2U6IG51bWJlciA9IHNpbmdsZUNoYW5jZShwaXR5ICsgMSk7XG4gIGlmIChpczUwNTApIHtcbiAgICBjb25zdCB5ZXMgPSBjaGFuY2UgKiAoMC41ICsgMC41ICogcHJvYmFiaWxpdHkoMCwgcHVsbHMgLSAxLCBmYWxzZSkpO1xuICAgIGNvbnN0IG5vID0gKDEgLSBjaGFuY2UpICogcHJvYmFiaWxpdHkocGl0eSArIDEsIHB1bGxzIC0gMSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHllcyArIG5vO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHllcyA9IGNoYW5jZSAqIDE7XG4gICAgY29uc3Qgbm8gPSAoMSAtIGNoYW5jZSkgKiBwcm9iYWJpbGl0eShwaXR5ICsgMSwgcHVsbHMgLSAxLCBmYWxzZSk7XG4gICAgcmV0dXJuIHllcyArIG5vO1xuICB9XG59Il0sIm5hbWVzIjpbInNpbmdsZUNoYW5jZSIsInB1bGwiLCJNYXRoIiwibWF4IiwicHJvYmFiaWxpdHkiLCJwaXR5IiwicHVsbHMiLCJpczUwNTAiLCJjaGFuY2UiLCJ5ZXMiLCJubyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/probability.ts\n"));

/***/ })

});