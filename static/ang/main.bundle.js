webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".app-component-viewer {\n    font-weight: 400;\n    margin: 20px 70px 50px 70px;\n}\n\n.logo {\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/app.component.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,4BAA4B;CAC/B;;AAED;EACE,gBAAgB;CACjB","file":"app.component.css","sourcesContent":[".app-component-viewer {\n    font-weight: 400;\n    margin: 20px 70px 50px 70px;\n}\n\n.logo {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n    <button md-icon-button (click)=\"goToMainPage()\"><md-icon>home</md-icon></button>\n    <div  class=\"logo\" (click)=\"goToMainPage()\">IGC 18.1</div>\n    <span class=\"example-spacer\"></span>\n    <button md-button [mdMenuTriggerFor]=\"appMenu\">\n        <md-icon>menu</md-icon>\n    </button>\n\n</md-toolbar>\n\n<md-menu #appMenu=\"mdMenu\">\n    <button md-menu-item *ngIf=\"!user\" (click)=\"goToSigninPage()\"> Регистрация</button>\n    <button md-menu-item *ngIf=\"!user\" (click)=\"goToLoginPage()\"> Войти</button>\n    <button md-menu-item *ngIf=\"user\" (click)=\"logout()\"> Выйти</button>\n    <button md-menu-item *ngIf=\"user\"> Настройки</button>\n    <button md-menu-item> Помощь</button>\n</md-menu>\n\n<div class=\"app-component-viewer\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fellows_fellows_service__ = __webpack_require__("../../../../../src/app/fellows/fellows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = '18.1';
        this.user = null;
    }
    AppComponent.prototype.goToMainPage = function () {
        var link = ['/'];
        this.router.navigate(link);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.user;
        this.authenticationService.userUpdate.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AppComponent.prototype.goToLoginPage = function () {
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.goToSigninPage = function () {
        this.router.navigate(['/signin']);
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__fellows_fellows_service__["a" /* FellowsService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fellow_list_fellow_list_component__ = __webpack_require__("../../../../../src/app/fellow-list/fellow-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fellow_detail_fellow_detail_component__ = __webpack_require__("../../../../../src/app/fellow-detail/fellow-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fellows_fellows_service__ = __webpack_require__("../../../../../src/app/fellows/fellows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ex_request_service__ = __webpack_require__("../../../../../src/app/ex-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__http_client_service__ = __webpack_require__("../../../../../src/app/http-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__fellow_list_fellow_list_component__["a" /* FellowListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__fellow_detail_fellow_detail_component__["a" /* FellowDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_20__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__fellows_fellows_service__["a" /* FellowsService */],
                __WEBPACK_IMPORTED_MODULE_13_app_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_17_app_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__ex_request_service__["a" /* ExRequestOptions */],
                __WEBPACK_IMPORTED_MODULE_18__http_client_service__["a" /* HttpClientService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fellow_list_fellow_list_component__ = __webpack_require__("../../../../../src/app/fellow-list/fellow-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fellow_detail_fellow_detail_component__ = __webpack_require__("../../../../../src/app/fellow-detail/fellow-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/reset-password/reset-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// https://angular.io/docs/ts/latest/guide/router.html










var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'reset-password',
        component: __WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    },
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: "fellow",
        component: __WEBPACK_IMPORTED_MODULE_3__fellow_list_fellow_list_component__["a" /* FellowListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: "fellow/:slug",
        component: __WEBPACK_IMPORTED_MODULE_4__fellow_detail_fellow_detail_component__["a" /* FellowDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: "fellow/edit/:slug",
        component: __WEBPACK_IMPORTED_MODULE_4__fellow_detail_fellow_detail_component__["a" /* FellowDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        data: { editMode: true }
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_service__ = __webpack_require__("../../../../../src/app/http-client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, httpClient, router) {
        var _this = this;
        this.http = http;
        this.httpClient = httpClient;
        this.router = router;
        this.userUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        if (this.token) {
            this.httpClient.addHeader('Authorization', 'JWT ' + this.token);
            this.getUser();
        }
        this.userUpdate.subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/login']);
            }
        });
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/api-token-auth/', JSON.stringify({ email: email, password: password }), options)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.httpClient.addHeader('Authorization', 'JWT ' + _this.token);
                _this.getUser();
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.signin = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/account/register/', JSON.stringify(data), options)
            .map(function (response) {
            return response.json();
        });
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/account/password/reset/', JSON.stringify({ email: email }), options)
            .map(function (response) {
            return response.json();
        });
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        // get users from api
        return this.httpClient.get('/account/me/')
            .map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.getUser = function () {
        var _this = this;
        this.getCurrentUser().subscribe(function (data) {
            _this.user = data;
            _this.userUpdate.emit(_this.user);
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.user = null;
        localStorage.removeItem('currentUser');
        this.httpClient.removeHeader('Authorization');
        this.userUpdate.emit(null);
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__http_client_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_client_service__["a" /* HttpClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b, _c;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/ex-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExRequestOptions; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExRequestOptions = (function (_super) {
    __extends(ExRequestOptions, _super);
    function ExRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.append('X-CSRFToken', _this.getCookie('csrftoken'));
        return _this;
    }
    ExRequestOptions.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    };
    ExRequestOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ExRequestOptions);
    return ExRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* BaseRequestOptions */]));

//# sourceMappingURL=ex-request.service.js.map

/***/ }),

/***/ "../../../../../src/app/fellow-detail/fellow-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "form {\n  margin: 20px 0;\n}\n\nlabel {\n  color: #999;\n  font-size: 15px;\n}\n\n.publications-textarea {\n  width: 350px;\n}\n\n.mat-list-item {\n  font-size: 14px;\n}\n\n.mat-input-container {\n  width: 80%;\n}\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/fellow-detail/fellow-detail.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;CAChB;;AAED;EACE,YAAY;EACZ,gBAAgB;CACjB;;AAED;EACE,aAAa;CACd;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,WAAW;CACZ","file":"fellow-detail.component.css","sourcesContent":["form {\n  margin: 20px 0;\n}\n\nlabel {\n  color: #999;\n  font-size: 15px;\n}\n\n.publications-textarea {\n  width: 350px;\n}\n\n.mat-list-item {\n  font-size: 14px;\n}\n\n.mat-input-container {\n  width: 80%;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fellow-detail/fellow-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='fellow' xmlns=\"http://www.w3.org/1999/html\">\n    <md-card class=\"example-card\" *ngIf=\"!editMode\">\n        <md-card-header>\n            <md-card-title>\n                <h3>\n                <span *ngIf=\"fellow.user.first_name || fellow.user.last_name || fellow.user.midle_name\">\n                    {{ fellow.user.first_name }} {{ fellow.user.last_name }} {{ fellow.user.midle_name }}</span>\n                    <span *ngIf=\"!(fellow.user.first_name || fellow.user.last_name || fellow.user.midle_name)\">{{ fellow.user.email }}</span>\n                    <md-icon *ngIf=\"user && fellow.user.id == user.id\">verified_user</md-icon>\n                </h3>\n            </md-card-title>\n            <md-card-subtitle>\n                <span *ngIf=\"fellow.post\">{{ fellow.post }}</span>\n                <span *ngIf=\"fellow.post_sci\"> {{ fellow.post_sci }}</span>\n                <span *ngIf=\"fellow.post_academy\"> {{ post_academy }}</span>\n            </md-card-subtitle>\n        </md-card-header>\n        <md-card-content>\n            <div>\n                <md-list>\n                    <md-list-item>\n                        <md-icon>email</md-icon>\n                        <label> Адрес электронной почты: </label> {{ newFellow.user.email }}</md-list-item>\n                    <md-list-item>\n                        <md-icon>phone</md-icon>\n                        <label> Номер телеона: </label> {{ newFellow.phone }}</md-list-item>\n                    <md-list-item>\n                        <md-icon>information</md-icon>\n                        <label> Биография: </label> {{ newFellow.vita }}</md-list-item>\n                </md-list>\n            </div>\n            <div>\n                <button md-button *ngIf=\"user && fellow.user.id == user.id\" (click)=\"goToEditDetail(fellow.slug)\">\n                    Редактировать\n                </button>\n            </div>\n            <h4> Список публикаций: </h4>\n            <div *ngIf=\"fellow.publications && fellow.publications.length\">\n                <md-list>\n                    <md-list-item *ngFor=\"let publication of fellow.publications\">\n                        <div *ngIf=\"user && fellow.user.id == user.id\">\n                            <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n                                <md-icon>more_vert</md-icon>\n                            </button>\n                            <md-menu #menu=\"mdMenu\">\n                                <button md-menu-item (click)=\"removePublication(publication.pk)\">Удалить</button>\n                            </md-menu>\n                        </div>\n                        {{ publication.bibliography }}\n                    </md-list-item>\n                </md-list>\n            </div>\n            <div *ngIf=\"newPublication\">\n                <md-input-container *ngIf=\"user && fellow.user.id == user.id\" class=\"publications-textarea\">\n                    <textarea mdInput type=\"text\" placeholder=\"Библиографичесая ссылка\"\n                              [(ngModel)]=\"newPublication.bibliography\"></textarea>\n                </md-input-container>\n                <button md-icon-button *ngIf=\"user && fellow.user.id == user.id\"\n                        (click)=\"addPublication()\">\n                    <md-icon>add</md-icon>\n                </button>\n            </div>\n        </md-card-content>\n    </md-card>\n\n\n    <md-card class=\"example-card\" *ngIf=\"editMode\">\n        <md-card-header>\n            Редактирование учётной записи\n        </md-card-header>\n        <md-card-content>\n            <form name=\"form\" novalidate>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Имя\" name=\"first_name\"\n                               [(ngModel)]=\"newFellow.user.first_name\" required/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Фамилия\" name=\"last_name\"\n                               [(ngModel)]=\"newFellow.user.last_name\" required/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Отчество\" name=\"midle_name\"\n                               [(ngModel)]=\"newFellow.user.midle_name\"/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Должность\" name=\"post\"\n                               [(ngModel)]=\"newFellow.post\"/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Учёная степень\" name=\"post_sci\"\n                               [(ngModel)]=\"newFellow.post_sci\"/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" placeholder=\"Учёное звание\" name=\"post_academy\"\n                               [(ngModel)]=\"newFellow.post_academy\"/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <input mdInput type=\"tel\" placeholder=\"Номер телефлна\" name=\"phone\"\n                               [(ngModel)]=\"newFellow.phone\"/>\n                    </md-input-container>\n                </div>\n                <div class=\"group\">\n                    <md-input-container>\n                        <textarea mdInput type=\"text\" placeholder=\"Биография\" name=\"vita\"\n                                  [(ngModel)]=\"newFellow.vita\"></textarea>\n                    </md-input-container>\n                </div>\n            </form>\n        </md-card-content>\n        <md-card-actions>\n            <button md-button *ngIf=\"editMode && user && fellow.user.id == user.id\" (click)=\"save()\">\n                Сохранить\n            </button>\n            <button md-button *ngIf=\"editMode && user && fellow.user.id == user.id\" (click)=\"cancel()\">\n                Отменить\n            </button>\n        </md-card-actions>\n    </md-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fellow-detail/fellow-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__ = __webpack_require__("../../../../../src/app/fellows/fellows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FellowDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FellowDetailComponent = (function () {
    function FellowDetailComponent(route, router, fellowsService, authenticationService) {
        this.route = route;
        this.router = router;
        this.fellowsService = fellowsService;
        this.authenticationService = authenticationService;
        this.editMode = false;
    }
    FellowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.user;
        this.authenticationService.userUpdate.subscribe(function (user) {
            _this.user = user;
            _this.makeEmptyNewPublication();
        });
        this.makeEmptyNewPublication();
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.slug = params['slug'];
            _this.req = _this.fellowsService.get(_this.slug).subscribe(function (data) {
                _this.fellow = data;
                _this.cloneFellow();
                _this.route.data
                    .subscribe(function (data) {
                    _this.editMode = data.editMode;
                });
            });
        });
    };
    FellowDetailComponent.prototype.cloneFellow = function () {
        this.newFellow = JSON.parse(JSON.stringify(this.fellow));
    };
    FellowDetailComponent.prototype.makeEmptyNewPublication = function () {
        if (this.user) {
            this.newPublication = { author: this.user.id };
        }
    };
    FellowDetailComponent.prototype.goToEditDetail = function (slug) {
        var link = ['/fellow/edit', slug];
        this.router.navigate(link);
    };
    FellowDetailComponent.prototype.getFullPost = function () {
        return [this.fellow.post, this.fellow.post_sci, this.fellow.post_academy].filter(function (x) { return x; }).join(", ");
    };
    FellowDetailComponent.prototype.save = function () {
        var _this = this;
        this.fellowsService.update(this.slug, this.newFellow).subscribe(function (params) {
            _this.fellow = params;
            _this.cancel();
        }, function (error) {
        });
    };
    FellowDetailComponent.prototype.addPublication = function () {
        var _this = this;
        this.fellowsService.addPublication(this.slug, this.newPublication).subscribe(function (params) {
            if (params) {
                _this.fellow.publications.push(params);
                _this.makeEmptyNewPublication();
            }
        });
    };
    FellowDetailComponent.prototype.removePublication = function (publicationPk) {
        var _this = this;
        this.fellowsService.removePublication(this.slug, publicationPk).subscribe(function () {
            _this.fellow.publications = _this.fellow.publications.filter(function (x) { return x.pk !== publicationPk; });
        });
    };
    FellowDetailComponent.prototype.cancel = function () {
        this.cloneFellow();
        var link = ['/fellow/', this.slug];
        this.router.navigate(link);
    };
    FellowDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.req.unsubscribe();
    };
    FellowDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-fellow-detail',
            template: __webpack_require__("../../../../../src/app/fellow-detail/fellow-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fellow-detail/fellow-detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__["a" /* FellowsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__["a" /* FellowsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
    ], FellowDetailComponent);
    return FellowDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fellow-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/fellow-list/fellow-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".fellows-card {\n  margin: 10px;\n}\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/fellow-list/fellow-list.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;CACd","file":"fellow-list.component.css","sourcesContent":[".fellows-card {\n  margin: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fellow-list/fellow-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-subheader>Сотрудники</h3>\n<div *ngIf='!fellowsList'>\n    <md-progress-spinner [mode]=\"indeterminate\"></md-progress-spinner>\n</div>\n<div *ngIf='fellowsList'>\n    <md-card class=\"fellows-card\" *ngFor=\"let fellow of fellowsList\">\n        <md-card-header>\n            <md-card-title>\n                <h4>\n                <span *ngIf=\"fellow.user.first_name || fellow.user.last_name || fellow.user.midle_name\">\n                    {{ fellow.user.first_name }} {{ fellow.user.last_name }} {{ fellow.user.midle_name }}</span>\n                    <span *ngIf=\"!(fellow.user.first_name || fellow.user.last_name || fellow.user.midle_name)\">{{ fellow.user.email }}</span>\n                    <md-icon *ngIf=\"user && fellow.user.id == user.id\">verified_user</md-icon>\n                </h4>\n            </md-card-title>\n            <md-card-subtitle>\n                <span *ngIf=\"fellow.post\">{{ fellow.post }}</span>\n                <span *ngIf=\"fellow.post_sci\"> {{ fellow.post_sci }}</span>\n                <span *ngIf=\"fellow.post_academy\"> {{ post_academy }}</span>\n                {{ fellow.publications }}\n            </md-card-subtitle>\n        </md-card-header>\n        <md-card-actions>\n            <button md-button (click)=\"goToDetail(fellow.slug)\">Перейти</button>\n            <button md-button *ngIf=\"user && fellow.user.id == user.id\" (click)=\"goToEditDetail(fellow.user.slug)\">\n                Редактировать\n            </button>\n        </md-card-actions>\n    </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fellow-list/fellow-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__ = __webpack_require__("../../../../../src/app/fellows/fellows.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FellowListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FellowListComponent = (function () {
    function FellowListComponent(router, fellowsService, authenticationService) {
        this.router = router;
        this.fellowsService = fellowsService;
        this.authenticationService = authenticationService;
        this.fellowsList = [];
    }
    FellowListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.req = this.fellowsService.list().subscribe(function (data) {
            _this.fellowsList = data;
        });
        this.user = this.authenticationService.user;
        this.authenticationService.userUpdate.subscribe(function (user) {
            _this.user = user;
        });
    };
    FellowListComponent.prototype.goToDetail = function (slug) {
        var link = ['/fellow', slug];
        this.router.navigate(link);
    };
    FellowListComponent.prototype.goToEditDetail = function (slug) {
        var link = ['/fellow/edit', slug];
        this.router.navigate(link);
    };
    FellowListComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    FellowListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-fellow-list',
            template: __webpack_require__("../../../../../src/app/fellow-list/fellow-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fellow-list/fellow-list.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__["a" /* FellowsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fellows_fellows_service__["a" /* FellowsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
    ], FellowListComponent);
    return FellowListComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=fellow-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/fellows/fellows.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_client_service__ = __webpack_require__("../../../../../src/app/http-client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FellowsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var endpoint = '/api/igc/';
var FellowsService = (function () {
    function FellowsService(http) {
        this.http = http;
    }
    FellowsService_1 = FellowsService;
    FellowsService.prototype.list = function () {
        return this.http.get(endpoint)
            .map(function (response) { return response.json(); })
            .catch(FellowsService_1.handleError);
    };
    FellowsService.prototype.get = function (slug) {
        return this.http.get(endpoint + slug + "/")
            .map(function (response) { return response.json(); })
            .catch(FellowsService_1.handleError);
    };
    FellowsService.prototype.update = function (slug, data) {
        return this.http.put(endpoint + slug + "/", data)
            .map(function (response) { return response.json(); })
            .catch(FellowsService_1.handleError);
    };
    FellowsService.prototype.addPublication = function (slug, data) {
        return this.http.post(endpoint + slug + "/publications/", data)
            .map(function (response) { return response.json(); })
            .catch(FellowsService_1.handleError);
    };
    FellowsService.prototype.removePublication = function (slug, pk) {
        return this.http.del(endpoint + slug + "/publications/" + pk + "/")
            .map(function (response) { return response.json(); })
            .catch(FellowsService_1.handleError);
    };
    FellowsService.handleError = function (error) {
        var errMsg;
        errMsg = "Server error occurred please try again.";
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    FellowsService = FellowsService_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__http_client_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_client_service__["a" /* HttpClientService */]) === "function" && _a || Object])
    ], FellowsService);
    return FellowsService;
    var FellowsService_1, _a;
}());

//# sourceMappingURL=fellows.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-fellow-list></app-fellow-list>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.fellowsList = [];
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/http-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
        this.headers = {};
    }
    HttpClientService.prototype.addHeader = function (header, value) {
        this.headers[header] = value;
    };
    HttpClientService.prototype.removeHeader = function (header) {
        delete this.headers[header];
    };
    HttpClientService.prototype.createHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        for (var h in this.headers) {
            if (this.headers.hasOwnProperty(h)) {
                var header = this.headers[h];
                headers.append(h, header);
            }
        }
        return headers;
    };
    HttpClientService.prototype.get = function (url) {
        var headers = this.createHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options);
    };
    HttpClientService.prototype.post = function (url, data) {
        var headers = this.createHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options);
    };
    HttpClientService.prototype.put = function (url, data) {
        var headers = this.createHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.put(url, data, options);
    };
    HttpClientService.prototype.del = function (url) {
        var headers = this.createHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.delete(url, options);
    };
    HttpClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], HttpClientService);
    return HttpClientService;
    var _a;
}());

//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n.reset-password-link {\n\tcursor: pointer;\n\tmargin: 10px;\n}\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/login/login.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;CACb;;AAED;CACC,mBAAmB;CACnB;;AAED;EACE,aAAa;CACd,iBAAiB;CACjB,yBAAyB;CACzB;;AAED;CACC,gBAAgB;CAChB,aAAa;CACb","file":"login.component.css","sourcesContent":[".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n.reset-password-link {\n\tcursor: pointer;\n\tmargin: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-header>Войти</md-card-header>\n    <md-card-content>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div class=\"group\">\n                <md-input-container>\n                    <input mdInput type=\"email\" placeholder=\"Адрес электронной почты\" class=\"form-control\"\n                           name=\"password\"\n                           [(ngModel)]=\"model.email\" #password=\"ngModel\"\n                           required/>\n                </md-input-container>\n            </div>\n            <div class=\"group\">\n                <md-input-container>\n                    <input mdInput type=\"password\" placeholder=\"Пароль\" class=\"form-control\" name=\"password\"\n                           [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                           required/>\n                </md-input-container>\n            </div>\n            <div>\n                <div class=\"reset-password-link\" (click)=\"resetPassword()\">Забыли пароль?</div>\n            </div>\n            <div>\n                <button md-button [disabled]=\"loading\">Далее</button>\n            </div>\n        </form>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Email or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = 'Email or password is incorrect';
            _this.loading = false;
        });
    };
    LoginComponent.prototype.resetPassword = function () {
        this.router.navigate(['/', 'reset-password']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"not-found.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='text-center'>\n    <h1>404 - Страница не найдена</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n\n\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/reset-password/reset-password.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;CACb;;AAED;CACC,mBAAmB;CACnB;;AAED;EACE,aAAa;CACd,iBAAiB;CACjB,yBAAyB;CACzB","file":"reset-password.component.css","sourcesContent":[".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n\n\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-header>Восстановить пароль</md-card-header>\n    <md-card-content>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && resetPassword()\" #f=\"ngForm\" novalidate>\n            <div class=\"group\">\n                <md-input-container>\n                    <input mdInput type=\"email\" placeholder=\"Адрес электронной почты\" class=\"form-control\"\n                           name=\"password\"\n                           [(ngModel)]=\"model.email\" #password=\"ngModel\"\n                           required/>\n                </md-input-container>\n            </div>\n            <div>\n                <button md-button [disabled]=\"loading\">Далее</button>\n            </div>\n        </form>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_http_client_service__ = __webpack_require__("../../../../../src/app/http-client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(router, authenticationService, httpClient) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.httpClient = httpClient;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.authenticationService.resetPassword(this.model.email)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Email or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = 'Email or password is incorrect';
            _this.loading = false;
        });
    };
    ResetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_http_client_service__["a" /* HttpClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_http_client_service__["a" /* HttpClientService */]) === "function" && _c || Object])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n\n\n", "", {"version":3,"sources":["/Users/artemiy/prj/igc_lab/client/src/app/signin/signin.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;CACb;;AAED;CACC,mBAAmB;CACnB;;AAED;EACE,aAAa;CACd,iBAAiB;CACjB,yBAAyB;CACzB","file":"signin.component.css","sourcesContent":[".mat-input-container{\n  width: 100%;\n}\n\n.group {\n\tposition: relative;\n}\n\n.mat-card {\n  width: 380px;\n\tmargin: 4em auto;\n\tpadding: 3em 2em 2em 2em;\n}\n\n\n\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-header>Регистрация пользователя</md-card-header>\n    <md-card-content>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" novalidate>\n            <div class=\"group\">\n                <md-input-container>\n                    <input mdInput type=\"email\" placeholder=\"Адрес электронной почты\" class=\"form-control\"\n                           name=\"password\"\n                           [(ngModel)]=\"model.email\" #password=\"ngModel\"\n                           required/>\n                </md-input-container>\n            </div>\n            <div class=\"group\">\n                <md-input-container>\n                    <input mdInput type=\"password\" placeholder=\"Пароль\" class=\"form-control\" name=\"password\"\n                           [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                           required/>\n                </md-input-container>\n            </div>\n            <div>\n                <button md-button [disabled]=\"loading\">Далее</button>\n            </div>\n        </form>\n    </md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.signin(this.model)
            .subscribe(function (result) {
            if (result && result.slug) {
                _this.authenticationService.login(_this.model.email, _this.model.password).subscribe(function (data) {
                    if (data) {
                        _this.router.navigate(['/fellow/edit/', result.slug]);
                    }
                });
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());

//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getCurrentUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http.get('/account/me/', options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map