(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-admin-module"],{

/***/ "./src/app/views/admin/admin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/admin/admin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _content_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/accounts.component */ "./src/app/views/content/accounts.component.ts");
/* harmony import */ var _content_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/clients.component */ "./src/app/views/content/clients.component.ts");
/* harmony import */ var _content_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content//groups.component */ "./src/app/views/content/groups.component.ts");
/* harmony import */ var _content_lenders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content//lenders.component */ "./src/app/views/content/lenders.component.ts");
/* harmony import */ var _content_transactions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content//transactions.component */ "./src/app/views/content/transactions.component.ts");
/* harmony import */ var _content_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content//users.component */ "./src/app/views/content/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        data: { title: 'Administrator', expectedRole: 'admin' },
        canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        canLoad: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        children: [
            {
                path: 'accounts',
                component: _content_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"],
                data: { title: 'Accounts', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'transactions/:select',
                component: _content_transactions_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsComponent"],
                data: { title: 'Transactions', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'users/:select',
                component: _content_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                data: { title: 'Users', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'groups',
                component: _content_groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"],
                data: { title: 'Groups', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'clients',
                component: _content_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"],
                data: { title: 'Clients', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            },
            {
                path: 'lenders',
                component: _content_lenders_component__WEBPACK_IMPORTED_MODULE_6__["LendersComponent"],
                data: { title: 'Lenders', expectedRole: 'admin' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/views/admin/admin-routing.module.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.module */ "./src/app/views/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-admin-module.js.map