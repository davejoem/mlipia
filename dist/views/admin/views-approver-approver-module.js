(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-approver-approver-module"],{

/***/ "./src/app/views/approver/approver-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/approver/approver-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ApproverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverRoutingModule", function() { return ApproverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _content_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/clients.component */ "./src/app/views/content/clients.component.ts");
/* harmony import */ var _content_transactions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/transactions.component */ "./src/app/views/content/transactions.component.ts");
/* harmony import */ var _content_lenders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/lenders.component */ "./src/app/views/content/lenders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: { title: 'Approver', expectedRole: 'approver' },
        canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        canLoad: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        children: [
            {
                path: 'transactions/:select',
                component: _content_transactions_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsComponent"],
                data: { title: 'Transactions', expectedRole: 'approver' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'clients',
                component: _content_clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
                data: { title: 'Clients', expectedRole: 'approver' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'lenders',
                component: _content_lenders_component__WEBPACK_IMPORTED_MODULE_5__["LendersComponent"],
                data: { title: 'Lenders', expectedRole: 'approver' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            }
        ]
    }
];
var ApproverRoutingModule = /** @class */ (function () {
    function ApproverRoutingModule() {
    }
    ApproverRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ApproverRoutingModule);
    return ApproverRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/approver/approver.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/approver/approver.module.ts ***!
  \***************************************************/
/*! exports provided: ApproverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverModule", function() { return ApproverModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _approver_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approver-routing.module */ "./src/app/views/approver/approver-routing.module.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.module */ "./src/app/views/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApproverModule = /** @class */ (function () {
    function ApproverModule() {
    }
    ApproverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _approver_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApproverRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ]
        })
    ], ApproverModule);
    return ApproverModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-approver-approver-module.js.map