"use strict";
(() => {
var exports = {};
exports.id = 618;
exports.ids = [618];
exports.modules = {

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

/***/ 907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ getRedirectValue)
/* harmony export */ });
/* harmony import */ var _clients_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);

const config = {
    api: {
        externalResolver: true
    }
};
function getRedirectValue(req, res) {
    try {
        _clients_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].routingTable.findFirst */ .Z.routingTable.findFirst({
            where: {
                code: req.query.shortId
            }
        }).then((route)=>{
            if (route !== null) {
                res.status(200).json({
                    route: route.full_url
                });
            } else {
                res.status(200).json({
                    route: "http://" + "short.yugnar.com/"
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    } finally{
        _clients_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].$disconnect */ .Z.$disconnect();
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(907));
module.exports = __webpack_exports__;

})();