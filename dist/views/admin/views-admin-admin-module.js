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
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/views/admin/accounts.component.ts");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.component */ "./src/app/views/admin/clients.component.ts");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.component */ "./src/app/views/admin/groups.component.ts");
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions.component */ "./src/app/views/admin/transactions.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/views/admin/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        data: {
            title: 'Administrator'
        },
        children: [
            {
                path: 'groups',
                component: _groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"],
                data: {
                    title: 'Groups'
                }
            },
            {
                path: 'users',
                component: _users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                data: {
                    title: 'Groups'
                }
            },
            {
                path: 'transactions',
                component: _transactions_component__WEBPACK_IMPORTED_MODULE_5__["TransactionsComponent"],
                data: {
                    title: 'Transactions'
                }
            },
            {
                path: 'accounts',
                component: _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"],
                data: {
                    title: 'Accounts'
                }
            },
            {
                path: 'clients',
                component: _clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
                data: {
                    title: 'Clients'
                }
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
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/views/admin/accounts.component.ts");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.component */ "./src/app/views/admin/clients.component.ts");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups.component */ "./src/app/views/admin/groups.component.ts");
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions.component */ "./src/app/views/admin/transactions.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/views/admin/users.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/views/admin/admin-routing.module.ts");
/* harmony import */ var _lenders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lenders.component */ "./src/app/views/admin/lenders.component.ts");
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
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"]
            ],
            declarations: [
                _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"],
                _clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
                _groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"],
                _lenders_component__WEBPACK_IMPORTED_MODULE_8__["LendersComponent"],
                _transactions_component__WEBPACK_IMPORTED_MODULE_5__["TransactionsComponent"],
                _users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-admin-module.js.map