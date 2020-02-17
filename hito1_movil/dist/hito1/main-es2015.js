(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar> </app-navbar>\n<mat-card class=\"container\">\n  <router-outlet></router-outlet>\n</mat-card>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/misc/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/misc/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span> <b>Angular:</b> 8.2.14 </span>\n        <div class=\"cookies\" *ngIf=\"cookieVisibility\">\n          <span>\n            Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web.\n            Si continúa utilizando este sitio asumiremos que está de acuerdo.\n          </span>\n          <a mat-button (click)=\"setCookie()\" class=\"mat-flat-button\"> ACEPTAR </a>\n        </div>\n        <div class=\"github\" *ngIf=\"!cookieVisibility\">\n          <a mat-button class=\"mat-flat-button\" href=\"https://github.com/CFP-PC20/2t_hito1\"> GitHub </a>\n        </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/misc/navbar/navbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/misc/navbar/navbar.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div>\n      <a mat-button [routerLink]=\"'/home'\"> HOME </a>\n      <a mat-button [routerLink]=\"'/crud'\"> CRUD </a>\n      <a mat-button [routerLink]=\"'/bit'\"> BIT </a>\n      <a mat-button [routerLink]=\"'/about'\"> ABOUT </a>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Sobre esta aplicación </h1>\n<p>\n  Hay varias rutas por visitar:\n  <mat-list>\n    <mat-list-item [routerLink]=\"'/home'\">\n      <a mat-stroked-button> /home </a>\n      <span> Hogar, dulce hogar </span>\n    </mat-list-item>\n\n    <mat-list-item >\n      <a mat-stroked-button [routerLink]=\"'/crud'\"> /crud </a>\n      <span> Crear, leer, actualizar o borrar datos </span>\n    </mat-list-item>\n\n    <mat-list-item>\n      <a mat-stroked-button [routerLink]=\"'/bit'\"> /bit </a>\n      <span> Componente angular basado en Chart.js. <a mat-tab-link href=\"https://bit.dev/primefaces/primeng/chart\">[Fuente]</a></span>\n    </mat-list-item>\n\n    <mat-list-item [routerLink]=\"'/about'\">\n      <a mat-stroked-button> /about </a>\n      <span> Página excepcionalmente informativa </span>\n    </mat-list-item>\n\n    <mat-list-item [routerLink]=\"'/error'\">\n      <a mat-stroked-button> /* </a>\n      <span> Cualquier otra ruta lleva a la perdición </span>\n    </mat-list-item>\n\n\n  </mat-list>\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bit/bit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bit/bit.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Componente de Terceros </h1>\n\n<p-chart type=\"line\" [data]=\"data\"></p-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Añadir Comentario</h1>\n\n<mat-form-field>\n  <mat-label>Nombre</mat-label>\n  <input matInput [(ngModel)]=\"nombre\" >\n</mat-form-field>\n\n\n<button mat-fab color=\"primary\" style=\"margin-left: 20px; font-size: 30px;\" (click)=\"setResenya()\">\n  <mat-icon *ngIf=\"isEdit\">edit</mat-icon>\n  <mat-icon *ngIf=\"!isEdit\">add</mat-icon>\n</button>\n\n\n<br>\n\n<mat-form-field>\n  <mat-label>Opinión</mat-label>\n  <textarea matInput [(ngModel)]=\"opinion\"></textarea>\n</mat-form-field>\n\n<mat-list>\n  <mat-list-item *ngFor=\"let res of resenyas | keyvalue\">\n    <a mat-stroked-button (click)=\"resenyas.delete( res.key )\">\n      <mat-icon>delete</mat-icon>\n    </a>\n\n    &nbsp;&nbsp;&nbsp;\n\n    <a mat-stroked-button (click)=\"edit( res.key , res.value.nombre , res.value.opinion )\">\n      <mat-icon>edit</mat-icon>\n    </a>\n\n    &nbsp;&nbsp;&nbsp;\n\n    <h3> {{ res.value.nombre }}&nbsp;:&nbsp;&nbsp; </h3>\n    <p> {{ res.value.opinion }} </p>\n  </mat-list-item>\n</mat-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Página no encontrada. </h1>\n\n<p>\n  Esta página no existe. ¿Quizás en un futuro esto cambie?\n</p>\n\n<mat-card-actions>\n  <a mat-button class=\"mat-flat-button mat-primary\" [routerLink]=\"\"> Volver al inicio </a>\n</mat-card-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card-title>\n  <h1> ¡Hola Mundo! </h1>\n</mat-card-title>\n\n<pre>\nAngular CLI: 8.3.25\nNode: 13.8.0\nOS: linux x64\nAngular: 8.2.14\n... animations, common, compiler, compiler-cli, core, forms\n... language-service, platform-browser, platform-browser-dynamic\n... router\n\n------------------------------------------\n@angular-devkit/architect         0.803.25\n@angular-devkit/build-angular     0.803.25\n@angular-devkit/build-optimizer   0.803.25\n@angular-devkit/build-webpack     0.803.25\n@angular-devkit/core              8.3.25\n@angular-devkit/schematics        8.3.25\n@angular/cdk                      8.2.3\n@angular/cli                      8.3.25\n@angular/material                 8.2.3\n@ngtools/webpack                  8.3.25\n@schematics/angular               8.3.25\n@schematics/update                0.803.25\nrxjs                              6.4.0\ntypescript                        3.5.3\nwebpack                           4.39.2\n</pre>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_crud_crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/crud/crud.component */ "./src/app/pages/crud/crud.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_bit_bit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bit/bit.component */ "./src/app/pages/bit/bit.component.ts");








const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'crud', component: _pages_crud_crud_component__WEBPACK_IMPORTED_MODULE_4__["CrudComponent"] },
    { path: 'bit', component: _pages_bit_bit_component__WEBPACK_IMPORTED_MODULE_7__["BitComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: '**', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 10px auto;\n  padding: 10px 30px;\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lcnUvU29mdHdhcmUvanMvYW5ndWxhci9oaXRvMS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hito1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _misc_misc_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc/misc.module */ "./src/app/misc/misc.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            _misc_misc_module__WEBPACK_IMPORTED_MODULE_5__["MiscModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/chart/dist/chart/fesm2015/bit-chart.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/chart/dist/chart/fesm2015/bit-chart.js ***!
  \*******************************************************************/
/*! exports provided: ChartModule, UIChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIChart", function() { return UIChart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./src/app/components/chart/node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIChart {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initChart();
        this.initialized = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCanvasClick(event) {
        if (this.chart) {
            /** @type {?} */
            let element = this.chart.getElementAtEvent(event);
            /** @type {?} */
            let dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    }
    /**
     * @return {?}
     */
    initChart() {
        /** @type {?} */
        let opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
            opts.maintainAspectRatio = false;
        }
        //@ts-ignore
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
        });
    }
    /**
     * @return {?}
     */
    getCanvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    getBase64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    generateLegend() {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.chart) {
            this.chart.update();
        }
    }
    /**
     * @return {?}
     */
    reinit() {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }
}
UIChart.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'p-chart',
                template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `
            }] }
];
/** @nocollapse */
UIChart.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
UIChart.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    plugins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onDataSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
class ChartModule {
}
ChartModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [UIChart],
                declarations: [UIChart]
            },] }
];


//# sourceMappingURL=bit-chart.js.map


/***/ }),

/***/ "./src/app/components/chart/node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************************************!*\
  !*** ./src/app/components/chart/node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./src/app/components/chart/node_modules/moment/locale/af.js",
	"./af.js": "./src/app/components/chart/node_modules/moment/locale/af.js",
	"./ar": "./src/app/components/chart/node_modules/moment/locale/ar.js",
	"./ar-dz": "./src/app/components/chart/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./src/app/components/chart/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./src/app/components/chart/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./src/app/components/chart/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./src/app/components/chart/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./src/app/components/chart/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./src/app/components/chart/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./src/app/components/chart/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./src/app/components/chart/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./src/app/components/chart/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./src/app/components/chart/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./src/app/components/chart/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./src/app/components/chart/node_modules/moment/locale/ar.js",
	"./az": "./src/app/components/chart/node_modules/moment/locale/az.js",
	"./az.js": "./src/app/components/chart/node_modules/moment/locale/az.js",
	"./be": "./src/app/components/chart/node_modules/moment/locale/be.js",
	"./be.js": "./src/app/components/chart/node_modules/moment/locale/be.js",
	"./bg": "./src/app/components/chart/node_modules/moment/locale/bg.js",
	"./bg.js": "./src/app/components/chart/node_modules/moment/locale/bg.js",
	"./bm": "./src/app/components/chart/node_modules/moment/locale/bm.js",
	"./bm.js": "./src/app/components/chart/node_modules/moment/locale/bm.js",
	"./bn": "./src/app/components/chart/node_modules/moment/locale/bn.js",
	"./bn.js": "./src/app/components/chart/node_modules/moment/locale/bn.js",
	"./bo": "./src/app/components/chart/node_modules/moment/locale/bo.js",
	"./bo.js": "./src/app/components/chart/node_modules/moment/locale/bo.js",
	"./br": "./src/app/components/chart/node_modules/moment/locale/br.js",
	"./br.js": "./src/app/components/chart/node_modules/moment/locale/br.js",
	"./bs": "./src/app/components/chart/node_modules/moment/locale/bs.js",
	"./bs.js": "./src/app/components/chart/node_modules/moment/locale/bs.js",
	"./ca": "./src/app/components/chart/node_modules/moment/locale/ca.js",
	"./ca.js": "./src/app/components/chart/node_modules/moment/locale/ca.js",
	"./cs": "./src/app/components/chart/node_modules/moment/locale/cs.js",
	"./cs.js": "./src/app/components/chart/node_modules/moment/locale/cs.js",
	"./cv": "./src/app/components/chart/node_modules/moment/locale/cv.js",
	"./cv.js": "./src/app/components/chart/node_modules/moment/locale/cv.js",
	"./cy": "./src/app/components/chart/node_modules/moment/locale/cy.js",
	"./cy.js": "./src/app/components/chart/node_modules/moment/locale/cy.js",
	"./da": "./src/app/components/chart/node_modules/moment/locale/da.js",
	"./da.js": "./src/app/components/chart/node_modules/moment/locale/da.js",
	"./de": "./src/app/components/chart/node_modules/moment/locale/de.js",
	"./de-at": "./src/app/components/chart/node_modules/moment/locale/de-at.js",
	"./de-at.js": "./src/app/components/chart/node_modules/moment/locale/de-at.js",
	"./de-ch": "./src/app/components/chart/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./src/app/components/chart/node_modules/moment/locale/de-ch.js",
	"./de.js": "./src/app/components/chart/node_modules/moment/locale/de.js",
	"./dv": "./src/app/components/chart/node_modules/moment/locale/dv.js",
	"./dv.js": "./src/app/components/chart/node_modules/moment/locale/dv.js",
	"./el": "./src/app/components/chart/node_modules/moment/locale/el.js",
	"./el.js": "./src/app/components/chart/node_modules/moment/locale/el.js",
	"./en-SG": "./src/app/components/chart/node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./src/app/components/chart/node_modules/moment/locale/en-SG.js",
	"./en-au": "./src/app/components/chart/node_modules/moment/locale/en-au.js",
	"./en-au.js": "./src/app/components/chart/node_modules/moment/locale/en-au.js",
	"./en-ca": "./src/app/components/chart/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./src/app/components/chart/node_modules/moment/locale/en-ca.js",
	"./en-gb": "./src/app/components/chart/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./src/app/components/chart/node_modules/moment/locale/en-gb.js",
	"./en-ie": "./src/app/components/chart/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./src/app/components/chart/node_modules/moment/locale/en-ie.js",
	"./en-il": "./src/app/components/chart/node_modules/moment/locale/en-il.js",
	"./en-il.js": "./src/app/components/chart/node_modules/moment/locale/en-il.js",
	"./en-nz": "./src/app/components/chart/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./src/app/components/chart/node_modules/moment/locale/en-nz.js",
	"./eo": "./src/app/components/chart/node_modules/moment/locale/eo.js",
	"./eo.js": "./src/app/components/chart/node_modules/moment/locale/eo.js",
	"./es": "./src/app/components/chart/node_modules/moment/locale/es.js",
	"./es-do": "./src/app/components/chart/node_modules/moment/locale/es-do.js",
	"./es-do.js": "./src/app/components/chart/node_modules/moment/locale/es-do.js",
	"./es-us": "./src/app/components/chart/node_modules/moment/locale/es-us.js",
	"./es-us.js": "./src/app/components/chart/node_modules/moment/locale/es-us.js",
	"./es.js": "./src/app/components/chart/node_modules/moment/locale/es.js",
	"./et": "./src/app/components/chart/node_modules/moment/locale/et.js",
	"./et.js": "./src/app/components/chart/node_modules/moment/locale/et.js",
	"./eu": "./src/app/components/chart/node_modules/moment/locale/eu.js",
	"./eu.js": "./src/app/components/chart/node_modules/moment/locale/eu.js",
	"./fa": "./src/app/components/chart/node_modules/moment/locale/fa.js",
	"./fa.js": "./src/app/components/chart/node_modules/moment/locale/fa.js",
	"./fi": "./src/app/components/chart/node_modules/moment/locale/fi.js",
	"./fi.js": "./src/app/components/chart/node_modules/moment/locale/fi.js",
	"./fo": "./src/app/components/chart/node_modules/moment/locale/fo.js",
	"./fo.js": "./src/app/components/chart/node_modules/moment/locale/fo.js",
	"./fr": "./src/app/components/chart/node_modules/moment/locale/fr.js",
	"./fr-ca": "./src/app/components/chart/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./src/app/components/chart/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./src/app/components/chart/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./src/app/components/chart/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./src/app/components/chart/node_modules/moment/locale/fr.js",
	"./fy": "./src/app/components/chart/node_modules/moment/locale/fy.js",
	"./fy.js": "./src/app/components/chart/node_modules/moment/locale/fy.js",
	"./ga": "./src/app/components/chart/node_modules/moment/locale/ga.js",
	"./ga.js": "./src/app/components/chart/node_modules/moment/locale/ga.js",
	"./gd": "./src/app/components/chart/node_modules/moment/locale/gd.js",
	"./gd.js": "./src/app/components/chart/node_modules/moment/locale/gd.js",
	"./gl": "./src/app/components/chart/node_modules/moment/locale/gl.js",
	"./gl.js": "./src/app/components/chart/node_modules/moment/locale/gl.js",
	"./gom-latn": "./src/app/components/chart/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./src/app/components/chart/node_modules/moment/locale/gom-latn.js",
	"./gu": "./src/app/components/chart/node_modules/moment/locale/gu.js",
	"./gu.js": "./src/app/components/chart/node_modules/moment/locale/gu.js",
	"./he": "./src/app/components/chart/node_modules/moment/locale/he.js",
	"./he.js": "./src/app/components/chart/node_modules/moment/locale/he.js",
	"./hi": "./src/app/components/chart/node_modules/moment/locale/hi.js",
	"./hi.js": "./src/app/components/chart/node_modules/moment/locale/hi.js",
	"./hr": "./src/app/components/chart/node_modules/moment/locale/hr.js",
	"./hr.js": "./src/app/components/chart/node_modules/moment/locale/hr.js",
	"./hu": "./src/app/components/chart/node_modules/moment/locale/hu.js",
	"./hu.js": "./src/app/components/chart/node_modules/moment/locale/hu.js",
	"./hy-am": "./src/app/components/chart/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./src/app/components/chart/node_modules/moment/locale/hy-am.js",
	"./id": "./src/app/components/chart/node_modules/moment/locale/id.js",
	"./id.js": "./src/app/components/chart/node_modules/moment/locale/id.js",
	"./is": "./src/app/components/chart/node_modules/moment/locale/is.js",
	"./is.js": "./src/app/components/chart/node_modules/moment/locale/is.js",
	"./it": "./src/app/components/chart/node_modules/moment/locale/it.js",
	"./it-ch": "./src/app/components/chart/node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./src/app/components/chart/node_modules/moment/locale/it-ch.js",
	"./it.js": "./src/app/components/chart/node_modules/moment/locale/it.js",
	"./ja": "./src/app/components/chart/node_modules/moment/locale/ja.js",
	"./ja.js": "./src/app/components/chart/node_modules/moment/locale/ja.js",
	"./jv": "./src/app/components/chart/node_modules/moment/locale/jv.js",
	"./jv.js": "./src/app/components/chart/node_modules/moment/locale/jv.js",
	"./ka": "./src/app/components/chart/node_modules/moment/locale/ka.js",
	"./ka.js": "./src/app/components/chart/node_modules/moment/locale/ka.js",
	"./kk": "./src/app/components/chart/node_modules/moment/locale/kk.js",
	"./kk.js": "./src/app/components/chart/node_modules/moment/locale/kk.js",
	"./km": "./src/app/components/chart/node_modules/moment/locale/km.js",
	"./km.js": "./src/app/components/chart/node_modules/moment/locale/km.js",
	"./kn": "./src/app/components/chart/node_modules/moment/locale/kn.js",
	"./kn.js": "./src/app/components/chart/node_modules/moment/locale/kn.js",
	"./ko": "./src/app/components/chart/node_modules/moment/locale/ko.js",
	"./ko.js": "./src/app/components/chart/node_modules/moment/locale/ko.js",
	"./ku": "./src/app/components/chart/node_modules/moment/locale/ku.js",
	"./ku.js": "./src/app/components/chart/node_modules/moment/locale/ku.js",
	"./ky": "./src/app/components/chart/node_modules/moment/locale/ky.js",
	"./ky.js": "./src/app/components/chart/node_modules/moment/locale/ky.js",
	"./lb": "./src/app/components/chart/node_modules/moment/locale/lb.js",
	"./lb.js": "./src/app/components/chart/node_modules/moment/locale/lb.js",
	"./lo": "./src/app/components/chart/node_modules/moment/locale/lo.js",
	"./lo.js": "./src/app/components/chart/node_modules/moment/locale/lo.js",
	"./lt": "./src/app/components/chart/node_modules/moment/locale/lt.js",
	"./lt.js": "./src/app/components/chart/node_modules/moment/locale/lt.js",
	"./lv": "./src/app/components/chart/node_modules/moment/locale/lv.js",
	"./lv.js": "./src/app/components/chart/node_modules/moment/locale/lv.js",
	"./me": "./src/app/components/chart/node_modules/moment/locale/me.js",
	"./me.js": "./src/app/components/chart/node_modules/moment/locale/me.js",
	"./mi": "./src/app/components/chart/node_modules/moment/locale/mi.js",
	"./mi.js": "./src/app/components/chart/node_modules/moment/locale/mi.js",
	"./mk": "./src/app/components/chart/node_modules/moment/locale/mk.js",
	"./mk.js": "./src/app/components/chart/node_modules/moment/locale/mk.js",
	"./ml": "./src/app/components/chart/node_modules/moment/locale/ml.js",
	"./ml.js": "./src/app/components/chart/node_modules/moment/locale/ml.js",
	"./mn": "./src/app/components/chart/node_modules/moment/locale/mn.js",
	"./mn.js": "./src/app/components/chart/node_modules/moment/locale/mn.js",
	"./mr": "./src/app/components/chart/node_modules/moment/locale/mr.js",
	"./mr.js": "./src/app/components/chart/node_modules/moment/locale/mr.js",
	"./ms": "./src/app/components/chart/node_modules/moment/locale/ms.js",
	"./ms-my": "./src/app/components/chart/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./src/app/components/chart/node_modules/moment/locale/ms-my.js",
	"./ms.js": "./src/app/components/chart/node_modules/moment/locale/ms.js",
	"./mt": "./src/app/components/chart/node_modules/moment/locale/mt.js",
	"./mt.js": "./src/app/components/chart/node_modules/moment/locale/mt.js",
	"./my": "./src/app/components/chart/node_modules/moment/locale/my.js",
	"./my.js": "./src/app/components/chart/node_modules/moment/locale/my.js",
	"./nb": "./src/app/components/chart/node_modules/moment/locale/nb.js",
	"./nb.js": "./src/app/components/chart/node_modules/moment/locale/nb.js",
	"./ne": "./src/app/components/chart/node_modules/moment/locale/ne.js",
	"./ne.js": "./src/app/components/chart/node_modules/moment/locale/ne.js",
	"./nl": "./src/app/components/chart/node_modules/moment/locale/nl.js",
	"./nl-be": "./src/app/components/chart/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./src/app/components/chart/node_modules/moment/locale/nl-be.js",
	"./nl.js": "./src/app/components/chart/node_modules/moment/locale/nl.js",
	"./nn": "./src/app/components/chart/node_modules/moment/locale/nn.js",
	"./nn.js": "./src/app/components/chart/node_modules/moment/locale/nn.js",
	"./pa-in": "./src/app/components/chart/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./src/app/components/chart/node_modules/moment/locale/pa-in.js",
	"./pl": "./src/app/components/chart/node_modules/moment/locale/pl.js",
	"./pl.js": "./src/app/components/chart/node_modules/moment/locale/pl.js",
	"./pt": "./src/app/components/chart/node_modules/moment/locale/pt.js",
	"./pt-br": "./src/app/components/chart/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./src/app/components/chart/node_modules/moment/locale/pt-br.js",
	"./pt.js": "./src/app/components/chart/node_modules/moment/locale/pt.js",
	"./ro": "./src/app/components/chart/node_modules/moment/locale/ro.js",
	"./ro.js": "./src/app/components/chart/node_modules/moment/locale/ro.js",
	"./ru": "./src/app/components/chart/node_modules/moment/locale/ru.js",
	"./ru.js": "./src/app/components/chart/node_modules/moment/locale/ru.js",
	"./sd": "./src/app/components/chart/node_modules/moment/locale/sd.js",
	"./sd.js": "./src/app/components/chart/node_modules/moment/locale/sd.js",
	"./se": "./src/app/components/chart/node_modules/moment/locale/se.js",
	"./se.js": "./src/app/components/chart/node_modules/moment/locale/se.js",
	"./si": "./src/app/components/chart/node_modules/moment/locale/si.js",
	"./si.js": "./src/app/components/chart/node_modules/moment/locale/si.js",
	"./sk": "./src/app/components/chart/node_modules/moment/locale/sk.js",
	"./sk.js": "./src/app/components/chart/node_modules/moment/locale/sk.js",
	"./sl": "./src/app/components/chart/node_modules/moment/locale/sl.js",
	"./sl.js": "./src/app/components/chart/node_modules/moment/locale/sl.js",
	"./sq": "./src/app/components/chart/node_modules/moment/locale/sq.js",
	"./sq.js": "./src/app/components/chart/node_modules/moment/locale/sq.js",
	"./sr": "./src/app/components/chart/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./src/app/components/chart/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./src/app/components/chart/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./src/app/components/chart/node_modules/moment/locale/sr.js",
	"./ss": "./src/app/components/chart/node_modules/moment/locale/ss.js",
	"./ss.js": "./src/app/components/chart/node_modules/moment/locale/ss.js",
	"./sv": "./src/app/components/chart/node_modules/moment/locale/sv.js",
	"./sv.js": "./src/app/components/chart/node_modules/moment/locale/sv.js",
	"./sw": "./src/app/components/chart/node_modules/moment/locale/sw.js",
	"./sw.js": "./src/app/components/chart/node_modules/moment/locale/sw.js",
	"./ta": "./src/app/components/chart/node_modules/moment/locale/ta.js",
	"./ta.js": "./src/app/components/chart/node_modules/moment/locale/ta.js",
	"./te": "./src/app/components/chart/node_modules/moment/locale/te.js",
	"./te.js": "./src/app/components/chart/node_modules/moment/locale/te.js",
	"./tet": "./src/app/components/chart/node_modules/moment/locale/tet.js",
	"./tet.js": "./src/app/components/chart/node_modules/moment/locale/tet.js",
	"./tg": "./src/app/components/chart/node_modules/moment/locale/tg.js",
	"./tg.js": "./src/app/components/chart/node_modules/moment/locale/tg.js",
	"./th": "./src/app/components/chart/node_modules/moment/locale/th.js",
	"./th.js": "./src/app/components/chart/node_modules/moment/locale/th.js",
	"./tl-ph": "./src/app/components/chart/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./src/app/components/chart/node_modules/moment/locale/tl-ph.js",
	"./tlh": "./src/app/components/chart/node_modules/moment/locale/tlh.js",
	"./tlh.js": "./src/app/components/chart/node_modules/moment/locale/tlh.js",
	"./tr": "./src/app/components/chart/node_modules/moment/locale/tr.js",
	"./tr.js": "./src/app/components/chart/node_modules/moment/locale/tr.js",
	"./tzl": "./src/app/components/chart/node_modules/moment/locale/tzl.js",
	"./tzl.js": "./src/app/components/chart/node_modules/moment/locale/tzl.js",
	"./tzm": "./src/app/components/chart/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./src/app/components/chart/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./src/app/components/chart/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./src/app/components/chart/node_modules/moment/locale/tzm.js",
	"./ug-cn": "./src/app/components/chart/node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./src/app/components/chart/node_modules/moment/locale/ug-cn.js",
	"./uk": "./src/app/components/chart/node_modules/moment/locale/uk.js",
	"./uk.js": "./src/app/components/chart/node_modules/moment/locale/uk.js",
	"./ur": "./src/app/components/chart/node_modules/moment/locale/ur.js",
	"./ur.js": "./src/app/components/chart/node_modules/moment/locale/ur.js",
	"./uz": "./src/app/components/chart/node_modules/moment/locale/uz.js",
	"./uz-latn": "./src/app/components/chart/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./src/app/components/chart/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./src/app/components/chart/node_modules/moment/locale/uz.js",
	"./vi": "./src/app/components/chart/node_modules/moment/locale/vi.js",
	"./vi.js": "./src/app/components/chart/node_modules/moment/locale/vi.js",
	"./x-pseudo": "./src/app/components/chart/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./src/app/components/chart/node_modules/moment/locale/x-pseudo.js",
	"./yo": "./src/app/components/chart/node_modules/moment/locale/yo.js",
	"./yo.js": "./src/app/components/chart/node_modules/moment/locale/yo.js",
	"./zh-cn": "./src/app/components/chart/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./src/app/components/chart/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./src/app/components/chart/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./src/app/components/chart/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./src/app/components/chart/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./src/app/components/chart/node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app/components/chart/node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/app/misc/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/misc/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  overflow: hidden;\n}\n\n.cookies {\n  position: relative;\n  width: 100%;\n  float: right;\n  white-space: normal;\n  overflow: visible;\n  line-height: normal;\n}\n\n.cookies span {\n  padding: 20px;\n  font-size: 12px;\n}\n\n.github {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lcnUvU29mdHdhcmUvanMvYW5ndWxhci9oaXRvMS9zcmMvYXBwL21pc2MvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWlzYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbWlzYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29va2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgc3BhbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLmdpdGh1YiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCJmb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb29raWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5jb29raWVzIHNwYW4ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5naXRodWIge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/misc/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/misc/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.getCookie();
    }
    getCookie() {
        const cookie = decodeURIComponent(document.cookie);
        console.log(cookie);
        this.cookieVisibility = cookie.indexOf('hasAcceptedCookies') !== 0;
    }
    setCookie() {
        document.cookie = 'hasAcceptedCookies=yes';
        this.cookieVisibility = false;
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/misc/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/misc/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/misc/misc.module.ts":
/*!*************************************!*\
  !*** ./src/app/misc/misc.module.ts ***!
  \*************************************/
/*! exports provided: MiscModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscModule", function() { return MiscModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/misc/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/misc/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let MiscModule = class MiscModule {
};
MiscModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ]
    })
], MiscModule);



/***/ }),

/***/ "./src/app/misc/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/misc/navbar/navbar.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pc2MvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/misc/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/misc/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/misc/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/misc/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  width: 80px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lcnUvU29mdHdhcmUvanMvYW5ndWxhci9oaXRvMS9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiIsImEge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/bit/bit.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/bit/bit.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpdC9iaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/bit/bit.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/bit/bit.component.ts ***!
  \********************************************/
/*! exports provided: BitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitComponent", function() { return BitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BitComponent = class BitComponent {
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#C2185B'
                }
            ]
        };
    }
    ngOnInit() {
    }
};
BitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bit/bit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bit.component.scss */ "./src/app/pages/bit/bit.component.scss")).default]
    })
], BitComponent);



/***/ }),

/***/ "./src/app/pages/crud/crud.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/crud/crud.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NydWQvY3J1ZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/crud/crud.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/crud/crud.component.ts ***!
  \**********************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CrudComponent = class CrudComponent {
    constructor() {
        this.resenyas = new Map();
        this.isEdit = false;
        this.setResenya = () => {
            this.resenyas.set(this.id, { nombre: this.nombre, opinion: this.opinion });
            this.newID();
            this.opinion = '';
            this.isEdit = false;
        };
        this.edit = (id, nombre, opinion) => {
            this.id = id;
            this.isEdit = true;
            this.nombre = nombre;
            this.opinion = opinion;
        };
    }
    ngOnInit() {
    }
    newID() {
        this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line:one-variable-per-declaration no-bitwise
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};
CrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crud',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crud.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crud.component.scss */ "./src/app/pages/crud/crud.component.scss")).default]
    })
], CrudComponent);



/***/ }),

/***/ "./src/app/pages/error/error.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/pages/error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud/crud.component */ "./src/app/pages/crud/crud.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bit_bit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bit/bit.component */ "./src/app/pages/bit/bit.component.ts");
/* harmony import */ var _components_chart_dist_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/chart/dist/chart */ "./src/app/components/chart/dist/chart/fesm2015/bit-chart.js");












let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_crud_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _bit_bit_component__WEBPACK_IMPORTED_MODULE_10__["BitComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _components_chart_dist_chart__WEBPACK_IMPORTED_MODULE_11__["ChartModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/meru/Software/js/angular/hito1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map