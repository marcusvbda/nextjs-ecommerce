"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/middleware */ \"(middleware)/./node_modules/next-auth/middleware.js\");\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);\n\n// import { NextResponse } from \"next/server\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__.withAuth)(function middleware(req) {\n// console.log(req);\n// return NextResponse.next();\n// if (\n//   req.nextUrl.pathname === \"/admin-dashboard\" &&\n//   req.nextauth.token?.role !== \"admin\"\n// ) {\n//   return new NextResponse(\"You are not authorized!\");\n// }\n}, {\n    callbacks: {\n        authorized: (params)=>{\n            console.log(params);\n            return true;\n            let { token  } = params;\n            return !!token;\n        }\n    }\n}));\nconst config = {\n    // matcher solution for public, api, assets and _next exclusion\n    matcher: \"/((?!api|static|.*\\\\..*|_next).*)\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBQ2hELDhDQUE4QztBQUU5QyxpRUFBZUEsOERBQVFBLENBQ3JCLFNBQVNDLFdBQVdDLEdBQUcsRUFBRTtBQUN2QixvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLE9BQU87QUFDUCxtREFBbUQ7QUFDbkQseUNBQXlDO0FBQ3pDLE1BQU07QUFDTix3REFBd0Q7QUFDeEQsSUFBSTtBQUNOLEdBQ0E7SUFDRUMsV0FBVztRQUNUQyxZQUFZLENBQUNDLFNBQVc7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixPQUFPLElBQUk7WUFDWCxJQUFJLEVBQUVHLE1BQUssRUFBRSxHQUFHSDtZQUNoQixPQUFPLENBQUMsQ0FBQ0c7UUFDWDtJQUNGO0FBQ0YsSUFDQTtBQUVLLE1BQU1DLFNBQVM7SUFDcEIsK0RBQStEO0lBQy9EQyxTQUFTO0FBQ1gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aEF1dGggfSBmcm9tIFwibmV4dC1hdXRoL21pZGRsZXdhcmVcIjtcbi8vIGltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChcbiAgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXEpO1xuICAgIC8vIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIC8vIGlmIChcbiAgICAvLyAgIHJlcS5uZXh0VXJsLnBhdGhuYW1lID09PSBcIi9hZG1pbi1kYXNoYm9hcmRcIiAmJlxuICAgIC8vICAgcmVxLm5leHRhdXRoLnRva2VuPy5yb2xlICE9PSBcImFkbWluXCJcbiAgICAvLyApIHtcbiAgICAvLyAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCFcIik7XG4gICAgLy8gfVxuICB9LFxuICB7XG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICBhdXRob3JpemVkOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBsZXQgeyB0b2tlbiB9ID0gcGFyYW1zO1xuICAgICAgICByZXR1cm4gISF0b2tlbjtcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gbWF0Y2hlciBzb2x1dGlvbiBmb3IgcHVibGljLCBhcGksIGFzc2V0cyBhbmQgX25leHQgZXhjbHVzaW9uXG4gIG1hdGNoZXI6IFwiLygoPyFhcGl8c3RhdGljfC4qXFxcXC4uKnxfbmV4dCkuKilcIixcbn07XG4iXSwibmFtZXMiOlsid2l0aEF1dGgiLCJtaWRkbGV3YXJlIiwicmVxIiwiY2FsbGJhY2tzIiwiYXV0aG9yaXplZCIsInBhcmFtcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});