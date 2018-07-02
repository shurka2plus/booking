(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router/app-router.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-router/app-router.module.ts ***!
  \*************************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/user-list/user-list.component */ "./src/app/component/user-list/user-list.component.ts");
/* harmony import */ var _component_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/application-list/application-list.component */ "./src/app/component/application-list/application-list.component.ts");
/* harmony import */ var _component_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _component_application_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/application/application.component */ "./src/app/component/application/application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/applist', pathMatch: 'full' },
    { path: 'userlist', component: _component_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'applist', component: _component_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationListComponent"] },
    { path: 'user/:id', component: _component_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'user/new', component: _component_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'application/:id', component: _component_application_application_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationComponent"] },
    { path: 'application/new/:userId', component: _component_application_application_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationComponent"] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  margin-right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<mat-divider></mat-divider>\n\n<br>\n<nav>\n  <a mat-raised-button color=\"primary\" routerLink=\"/userlist\">Users</a>\n  <a mat-raised-button color=\"primary\" routerLink=\"/applist\">Applications</a>\n</nav>\n<br>\n\n<mat-divider></mat-divider>\n\n<app-messages></app-messages>\n<router-outlet></router-outlet>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Booking Tool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/user-list/user-list.component */ "./src/app/component/user-list/user-list.component.ts");
/* harmony import */ var _component_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _component_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/messages/messages.component */ "./src/app/component/messages/messages.component.ts");
/* harmony import */ var _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-router/app-router.module */ "./src/app/app-router/app-router.module.ts");
/* harmony import */ var _component_application_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/application/application.component */ "./src/app/component/application/application.component.ts");
/* harmony import */ var _component_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/application-list/application-list.component */ "./src/app/component/application-list/application-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
                _component_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _component_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _component_application_application_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationComponent"],
                _component_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_7__["AppRouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/application-list/application-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/application-list/application-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/application-list/application-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/application-list/application-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Applications</h3>\n<div class=\"button-row\">\n  <a mat-button\n     routerLink=\"/application/{{selection.hasValue() ? selection.selected[0].id : null}}\"\n     [disabled]=\"!selection.hasValue()\">\n    Update application\n  </a>\n  <button mat-button color=\"warn\"\n          (click)=\"deleteApp(selection.selected[0])\"\n          [disabled]=\"!selection.hasValue()\">\n    Delete application\n  </button>\n</div>\n<br>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"appDataSource\">\n\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Type </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.type}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"contentTypes\">\n      <th mat-header-cell *matHeaderCellDef> Content Types </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.contentTypes}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"userId\">\n      <th mat-header-cell *matHeaderCellDef> UserID </th>\n      <td mat-cell *matCellDef=\"let app\"> {{app.userId}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"pageSizeOptions\"\n                 [length]=\"totalLength\"\n                 [pageSize]=\"pageSize\"\n                 (page)=\"onPageChange($event)\" [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/application-list/application-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/application-list/application-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationListComponent", function() { return ApplicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/application.service */ "./src/app/service/application.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationListComponent = /** @class */ (function () {
    function ApplicationListComponent(appService) {
        this.appService = appService;
        this.totalLength = 0;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.appDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](false, []);
        this.displayedColumns = ['select', 'id', 'name', 'type', 'contentTypes', 'userId'];
    }
    ApplicationListComponent.prototype.ngOnInit = function () {
        this.loadApps();
    };
    ApplicationListComponent.prototype.loadApps = function () {
        var _this = this;
        this.appService.getApps(this.pageIndex, this.pageSize)
            .subscribe(function (page) {
            _this.appDataSource.data = page.content;
            _this.pageSize = page.pageable.pageSize;
            _this.pageIndex = page.pageable.pageNumber;
            _this.totalLength = page.totalElements;
        });
    };
    ApplicationListComponent.prototype.deleteApp = function (app) {
        var _this = this;
        this.appService.deleteApp(app)
            .subscribe(function () {
            _this.selection.clear();
            _this.loadApps();
        });
    };
    ApplicationListComponent.prototype.onPageChange = function (e) {
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
        this.loadApps();
    };
    ApplicationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-list',
            template: __webpack_require__(/*! ./application-list.component.html */ "./src/app/component/application-list/application-list.component.html"),
            styles: [__webpack_require__(/*! ./application-list.component.css */ "./src/app/component/application-list/application-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
    ], ApplicationListComponent);
    return ApplicationListComponent;
}());



/***/ }),

/***/ "./src/app/component/application/application.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/application/application.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-right: 5px;\r\n}\r\n\r\n.form-container {\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/application/application.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/application/application.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"app || isNew\">\n\n  <h3>{{isNew ? \"Create New Application\" : \"Application Details\"}}</h3>\n\n  <div class=\"form-container\">\n    <mat-form-field *ngIf=\"!isNew\">\n      <input matInput placeholder=\"App ID:\" [value]=\"app.id\" disabled>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Name:\" [(ngModel)]=\"app.name\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Type:\" [(ngModel)]=\"app.type\" [required]=\"true\">\n        <mat-option *ngFor=\"let appTypeOpt of appTypes\" [value]=\"appTypeOpt.name\">\n          {{appTypeOpt.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Content Type:\" [(ngModel)]=\"app.contentTypes\" multiple>\n        <mat-option *ngFor=\"let contentTypeOpt of contentTypes\" [value]=\"contentTypeOpt\">\n          {{contentTypeOpt}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"User ID:\" [value]=\"app.userId\" disabled>\n    </mat-form-field>\n  </div>\n  <div>\n    <button mat-raised-button (click)=\"goBack()\">Go back</button>\n\n    <button mat-raised-button *ngIf=\"!isNew\" (click)=\"update()\" class=\"saveButton\" color=\"primary\">Save</button>\n    <button mat-raised-button *ngIf=\"isNew\" (click)=\"create()\" class=\"saveButton\" color=\"primary\">Create app</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/application/application.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/application/application.component.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/application.service */ "./src/app/service/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(route, appService, location) {
        this.route = route;
        this.appService = appService;
        this.location = location;
        this.appTypes = [
            { name: "ANDROID", value: "Android app" },
            { name: "IOS", value: "iOS app" },
            { name: "WEBSITE", value: "Website" }
        ];
        this.contentTypes = [
            "IMAGE",
            "VIDEO",
            "HTML"
        ];
        this.app = {
            id: 0,
            name: "",
            type: "",
            contentTypes: [],
            userId: 0
        };
        this.isNew = false;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.getApp();
    };
    ApplicationComponent.prototype.getApp = function () {
        var _this = this;
        if (this.route.snapshot.url[1].path === 'new') {
            this.isNew = true;
            this.app.userId = +this.route.snapshot.paramMap.get('userId');
        }
        else {
            var id = this.route.snapshot.paramMap.get('id');
            this.appService.getApp(+id)
                .subscribe(function (app) { return _this.app = app; });
        }
    };
    ApplicationComponent.prototype.goBack = function () {
        this.location.back();
    };
    ApplicationComponent.prototype.update = function () {
        var _this = this;
        this.appService.updateApp(this.app)
            .subscribe(function () { return _this.goBack(); });
    };
    ApplicationComponent.prototype.create = function () {
        var _this = this;
        this.appService.createApp(this.app, this.app.userId)
            .subscribe(function () { return _this.goBack(); });
    };
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/component/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/component/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/component/messages/messages.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/messages/messages.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/messages/messages.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/messages/messages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/messages/messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/messages/messages.component.ts ***!
  \**********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/messages.service */ "./src/app/service/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/component/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/component/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_service_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/component/user-list/user-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/user-list/user-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/user-list/user-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/user-list/user-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Users</h3>\n\n<div class=\"button-row\">\n  <a mat-button routerLink=\"/user/new\">Create user</a>\n  <a mat-button\n     routerLink=\"/user/{{selection.hasValue() ? selection.selected[0].id : null}}\"\n     [disabled]=\"!selection.hasValue()\">\n    Update user\n  </a>\n  <button mat-button color=\"warn\"\n          (click)=\"deleteUser(selection.selected[0])\"\n          [disabled]=\"!selection.hasValue()\">\n    Delete user\n  </button>\n</div>\n<br>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"userDataSource\">\n\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef> Email </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"role\">\n      <th mat-header-cell *matHeaderCellDef> Role </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.role}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"pageSizeOptions\"\n                 [length]=\"totalLength\"\n                 [pageSize]=\"pageSize\"\n                 (page)=\"onPageChange($event)\" [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/user-list/user-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/user-list/user-list.component.ts ***!
  \************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.totalLength = 0;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.userDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](false, []);
        this.displayedColumns = ['select', 'id', 'name', 'email', 'role'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pageIndex, this.pageSize)
            .subscribe(function (page) {
            _this.userDataSource.data = page.content;
            _this.pageSize = page.pageable.pageSize;
            _this.pageIndex = page.pageable.pageNumber;
            _this.totalLength = page.totalElements;
        });
    };
    UserListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user)
            .subscribe(function () {
            _this.selection.clear();
            _this.loadUsers();
        });
    };
    UserListComponent.prototype.onPageChange = function (e) {
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
        this.loadUsers();
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/component/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/component/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/user/user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-right: 5px;\r\n}\r\n\r\n.form-container {\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/user/user.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/user/user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user || isNew\">\n\n  <h3>{{isNew ? \"Create New User\" : \"User Details\"}}</h3>\n\n  <div class=\"form-container\">\n    <mat-form-field *ngIf=\"!isNew\">\n      <input matInput placeholder=\"UserID:\" [value]=\"user.id\" disabled>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Name:\" [(ngModel)]=\"user.name\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Email:\" [(ngModel)]=\"user.email\">\n    </mat-form-field>\n    <mat-form-field *ngIf=\"isNew\">\n      <input matInput placeholder=\"Password:\" [(ngModel)]=\"user.password\" type=\"password\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Role:\" [(ngModel)]=\"user.role\" [required]=\"true\">\n        <mat-option *ngFor=\"let roleOpt of userRoles\" [value]=\"roleOpt.name\">\n          {{roleOpt.value}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <button mat-raised-button (click)=\"goBack()\">Go back</button>\n    <button mat-raised-button *ngIf=\"!isNew\" (click)=\"update()\" color=\"primary\">Save</button>\n    <a mat-raised-button *ngIf=\"!isNew\" routerLink=\"/application/new/{{user.id}}\" color=\"primary\">Create Application</a>\n    <button mat-raised-button *ngIf=\"isNew\" (click)=\"create()\" color=\"primary\">Create user</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/user/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(route, userService, location) {
        this.route = route;
        this.userService = userService;
        this.location = location;
        this.userRoles = [
            { name: 'PUBLISHER', value: 'Publisher' },
            { name: 'ADOPS', value: 'Operator' },
            { name: 'ADMIN', value: 'Administrator' }
        ];
        this.user = {
            id: 0,
            name: "",
            email: "",
            password: "",
            role: this.userRoles[0].name
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        if (this.route.snapshot.url[1].path === 'new')
            this.isNew = true;
        else {
            var id = this.route.snapshot.paramMap.get('id');
            this.userService.getUser(+id)
                .subscribe(function (user) { return _this.user = user; });
        }
    };
    UserComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user)
            .subscribe(function () { return _this.goBack(); });
    };
    UserComponent.prototype.create = function () {
        var _this = this;
        this.userService.createUser(this.user)
            .subscribe(function () { return _this.goBack(); });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/component/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/component/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/service/application.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/application.service.ts ***!
  \************************************************/
/*! exports provided: HOST, ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HOST = "http://localhost:8080/";
var ApplicationService = /** @class */ (function () {
    function ApplicationService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.appsEndpoint = HOST + 'api/apps';
        this.usersEndpoint = HOST + 'api/users';
    }
    ApplicationService.prototype.getApps = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 5; }
        return this.http.get(this.appsEndpoint, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('page', page.toString())
                .set('size', size.toString())
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('getApps')));
    };
    ApplicationService.prototype.getApp = function (id) {
        var url = this.appsEndpoint + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('getApplication')));
    };
    ApplicationService.prototype.createApp = function (app, userId) {
        var appTO = {
            name: app.name,
            type: app.type,
            contentTypes: app.contentTypes
        };
        var url = this.usersEndpoint + "/" + userId + "/apps";
        return this.http.post(url, appTO, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('createApp')));
    };
    ApplicationService.prototype.updateApp = function (app) {
        var url = this.usersEndpoint + "/" + app.userId + "/apps/" + app.id;
        return this.http.put(url, app, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('updateApp')));
    };
    ApplicationService.prototype.deleteApp = function (app) {
        var url = this.usersEndpoint + "/" + app.userId + "/apps/" + app.id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('deleteApp')));
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _messages_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/service/messages.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/messages.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (errorResponse) {
            console.error(errorResponse);
            var error = errorResponse.error;
            _this.add("Operation " + operation + " failed.");
            if (error.message)
                _this.add(error.message);
            if (typeof error.errors !== 'undefined' && error.errors.length > 0)
                error.errors.forEach(function (elem) { return _this.add(elem.field + " " + elem.defaultMessage); });
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: HOST, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HOST = "http://localhost:8080/";
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.usersEndpoint = HOST + 'api/users';
    }
    UserService.prototype.getUsers = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 5; }
        return this.http.get(this.usersEndpoint, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('page', page.toString())
                .set('size', size.toString())
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('getUsers')));
    };
    UserService.prototype.getUser = function (id) {
        var url = this.usersEndpoint + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('getUser')));
    };
    UserService.prototype.createUser = function (user) {
        var userTO = {
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        };
        return this.http.post(this.usersEndpoint, userTO, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('createUser')));
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.usersEndpoint + "/" + user.id;
        return this.http.put(url, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('updateUser')));
    };
    UserService.prototype.deleteUser = function (user) {
        var id = typeof user === 'number' ? user : user.id;
        var url = this.usersEndpoint + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.messageService.handleError('deleteUser')));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _messages_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\2plus\projects\test_task\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map