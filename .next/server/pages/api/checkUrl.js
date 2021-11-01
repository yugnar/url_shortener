"use strict";
(() => {
var exports = {};
exports.id = 113;
exports.ids = [113];
exports.modules = {

/***/ 611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ client)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./clients/client.js

let prisma = new client_namespaceObject.PrismaClient();
/* harmony default export */ const client = (prisma);


/***/ }),

/***/ 891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ getPathDefinition)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611);
/* harmony import */ var _clients_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_0__]);
nanoid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const config = {
    api: {
        externalResolver: true
    }
};
function getPathDefinition(req, res) {
    try {
        _clients_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].routingTable.findFirst */ .Z.routingTable.findFirst({
            where: {
                full_url: req.query.queryUrl
            }
        }).then((route)=>{
            if (route !== null) {
                //Code already exists in Database, return code to client.
                res.status(200).json({
                    route: route.code
                });
            } else {
                //URL not registered yet, register URL in DB.
                const shortenedUrl = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(6);
                _clients_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].routingTable.create */ .Z.routingTable.create({
                    data: {
                        code: shortenedUrl,
                        full_url: req.query.queryUrl
                    }
                }).then((newRoute)=>{
                    res.status(200).json({
                        route: newRoute.code
                    });
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    } finally{
        _clients_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].$disconnect */ .Z.$disconnect();
    }
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(891));
module.exports = __webpack_exports__;

})();