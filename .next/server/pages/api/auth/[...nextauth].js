"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import FacebookProvider from \"next-auth/providers/facebook\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        // FacebookProvider({\n        //   clientId: process.env.FACEBOOK_CLIENT_ID,\n        //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,\n        // }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"email\",\n                    placeholder: \"jsmith@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const payload = {\n                    email: credentials.email,\n                    password: credentials.password\n                };\n                // const res = await fetch(\n                //   \"https://cloudcoders.azurewebsites.net/api/tokens\",\n                //   {\n                //     method: \"POST\",\n                //     body: JSON.stringify(payload),\n                //     headers: {\n                //       \"Content-Type\": \"application/json\",\n                //     },\n                //   }\n                // );\n                // const user = await res.json();\n                // if (!res.ok) {\n                //   throw new Error(user.message);\n                // }\n                // // If no error and we have user data, return it\n                // if (res.ok && user) {\n                //   return user;\n                // }\n                return {\n                    id: 12,\n                    name: \"vinicius\",\n                    email: credentials.email,\n                    image: \"https://avatars.githubusercontent.com/u/123?s=60&v=4\"\n                };\n                // Return null if user data could not be retrieved\n                return null;\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    callbacks: {\n        async jwt ({ token , user , account  }) {\n            if (account && user) {\n                return {\n                    ...token,\n                    userId: user.id,\n                    accessToken: user.token,\n                    refreshToken: user.refreshToken\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user.token = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            session.user.accessTokenExpires = token.accessTokenExpires;\n            session.user.id = token.userId;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDbEUsK0RBQStEO0FBQ1A7QUFFeEQsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3RCRyxXQUFXO1FBQ1RELGlFQUFjQSxDQUFDO1lBQ2JFLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0EscUJBQXFCO1FBQ3JCLDhDQUE4QztRQUM5QyxzREFBc0Q7UUFDdEQsTUFBTTtRQUNOUixzRUFBbUJBLENBQUM7WUFDbEJTLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFnQixFQUFFTyxHQUFRLEVBQUU7Z0JBQzFDLE1BQU1DLFVBQVU7b0JBQ2RQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQ3hCSSxVQUFVTCxZQUFZSyxRQUFRO2dCQUNoQztnQkFFQSwyQkFBMkI7Z0JBQzNCLHdEQUF3RDtnQkFDeEQsTUFBTTtnQkFDTixzQkFBc0I7Z0JBQ3RCLHFDQUFxQztnQkFDckMsaUJBQWlCO2dCQUNqQiw0Q0FBNEM7Z0JBQzVDLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2dCQUVMLGlDQUFpQztnQkFDakMsaUJBQWlCO2dCQUNqQixtQ0FBbUM7Z0JBQ25DLElBQUk7Z0JBQ0osa0RBQWtEO2dCQUNsRCx3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsSUFBSTtnQkFDSixPQUFPO29CQUNMSSxJQUFJO29CQUNKQyxNQUFNO29CQUNOVCxPQUFPRCxZQUFZQyxLQUFLO29CQUN4QlUsT0FBTztnQkFDVDtnQkFDQSxrREFBa0Q7Z0JBQ2xELE9BQU8sSUFBSTtZQUNiO1FBQ0Y7S0FFRDtJQUNEQyxRQUFRakIsUUFBUUMsR0FBRyxDQUFDaUIsVUFBVTtJQUM5QkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBTyxFQUFFO1lBQ3ZDLElBQUlBLFdBQVdELE1BQU07Z0JBQ25CLE9BQU87b0JBQ0wsR0FBR0QsS0FBSztvQkFDUkcsUUFBUUYsS0FBS1IsRUFBRTtvQkFDZlcsYUFBYUgsS0FBS0QsS0FBSztvQkFDdkJLLGNBQWNKLEtBQUtJLFlBQVk7Z0JBQ2pDO1lBQ0YsQ0FBQztZQUVELE9BQU9MO1FBQ1Q7UUFDQSxNQUFNTSxTQUFRLEVBQUVBLFFBQU8sRUFBRU4sTUFBSyxFQUFPLEVBQUU7WUFDckNNLFFBQVFMLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxNQUFNSSxXQUFXO1lBQ3RDRSxRQUFRTCxJQUFJLENBQUNJLFlBQVksR0FBR0wsTUFBTUssWUFBWTtZQUM5Q0MsUUFBUUwsSUFBSSxDQUFDTSxrQkFBa0IsR0FBR1AsTUFBTU8sa0JBQWtCO1lBQzFERCxRQUFRTCxJQUFJLENBQUNSLEVBQUUsR0FBR08sTUFBTUcsTUFBTTtZQUM5QixPQUFPRztRQUNUO0lBQ0Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG4vLyBpbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSBhcyBhbnkpLFxuICAgIC8vIEZhY2Vib29rUHJvdmlkZXIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCxcbiAgICAvLyB9KSxcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgbGFiZWw6IFwiZW1haWxcIixcbiAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwianNtaXRoQGV4YW1wbGUuY29tXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55LCByZXE6IGFueSkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIC8vICAgXCJodHRwczovL2Nsb3VkY29kZXJzLmF6dXJld2Vic2l0ZXMubmV0L2FwaS90b2tlbnNcIixcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIC8vIGlmICghcmVzLm9rKSB7XG4gICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKHVzZXIubWVzc2FnZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gSWYgbm8gZXJyb3IgYW5kIHdlIGhhdmUgdXNlciBkYXRhLCByZXR1cm4gaXRcbiAgICAgICAgLy8gaWYgKHJlcy5vayAmJiB1c2VyKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgbmFtZTogXCJ2aW5pY2l1c1wiLFxuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTIzP3M9NjAmdj00XCIsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFJldHVybiBudWxsIGlmIHVzZXIgZGF0YSBjb3VsZCBub3QgYmUgcmV0cmlldmVkXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9IGFzIGFueSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9OiBhbnkpIHtcbiAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi50b2tlbixcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgYWNjZXNzVG9rZW46IHVzZXIudG9rZW4sXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiB1c2VyLnJlZnJlc2hUb2tlbixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH06IGFueSkge1xuICAgICAgc2Vzc2lvbi51c2VyLnRva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICBzZXNzaW9uLnVzZXIucmVmcmVzaFRva2VuID0gdG9rZW4ucmVmcmVzaFRva2VuO1xuICAgICAgc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuRXhwaXJlcyA9IHRva2VuLmFjY2Vzc1Rva2VuRXhwaXJlcztcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnVzZXJJZDtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInBheWxvYWQiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInNlY3JldCIsIkpXVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwidXNlcklkIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJzZXNzaW9uIiwiYWNjZXNzVG9rZW5FeHBpcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();