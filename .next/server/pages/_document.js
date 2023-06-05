"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ MyDocument)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
var document_default = /*#__PURE__*/__webpack_require__.n(next_document);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/pages/_document.js



class MyDocument extends (document_default()) {
    static async getInitialProps(ctx) {
        const sheet = new external_styled_components_.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ jsx_runtime.jsx(App, {
                                ...props
                            }))
                });
            const initialProps = await document_default().getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
            lang: "en-GB",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(next_document.Head, {
                    children: /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_document&absolutePagePath=private-next-pages%2F_document.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,859], () => (__webpack_exec__(275)));
module.exports = __webpack_exports__;

})();