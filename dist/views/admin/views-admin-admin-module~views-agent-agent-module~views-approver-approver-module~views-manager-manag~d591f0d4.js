(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-admin-module~views-agent-agent-module~views-approver-approver-module~views-manager-manag~d591f0d4"],{

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatLeft {\n  float: left;\n}\n.text-value {\n  font-size: 1.03125rem;\n  font-weight: 600;\n}\n.clickable {\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/views/content/accounts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/content/accounts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-3\" *ngFor=\"let account of accounts\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">{{ account.name }}</div>\n      <div>Balance: {{ account.balance }} </div>\n      <div>Api: {{ account.apiEnd }}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/content/accounts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/content/accounts.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(api) {
        this.api = api;
    }
    AccountsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.accounts = [
            {
                name: "Equity",
                balance: 1000000,
                apiEnd: "http://www.equity.co.ke/deduct/account"
            },
            {
                name: "KCB",
                balance: 1500000,
                apiEnd: "http://www.kcb.co.ke/deduct/account"
            },
            {
                name: "Co-operative",
                balance: 600000,
                apiEnd: "http://www.coop.co.ke/deduct/account"
            },
            {
                name: "Consolidated",
                balance: 120000,
                apiEnd: "http://www.consolidated.co.ke/deduct/account"
            }
        ];
    };
    AccountsComponent.prototype.getAccounts = function () {
        var _this = this;
        this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_2__["HybridMessage"]('/accounts/list', 'accounts:list', 'get')).subscribe(function (accounts) {
            _this.accounts = accounts;
        });
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/views/content/accounts.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/views/content/clients.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/content/clients.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-4\" *ngFor=\"let client of clients\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">{{ client.name }}</div>\n      <div>Rating: {{ client.rating }} </div>\n      <div>Mlipia balance: {{ client.mlipia_balance }}</div>\n      <div class=\"btn-group float-right\">\n        <button type=\"button\" class=\"btn btn-transparent p-0\" (click)=\"selectClient(client); infoModal.show()\">\n          <i class=\"icon-info\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"selected_lient\" bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"info\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{selected_client.name}} Details</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Details go here&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"infoModal.hide()\">Dismiss</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/views/content/clients.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/content/clients.component.ts ***!
  \****************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    /**
     *
     */
    function ClientsComponent(api) {
        this.api = api;
    }
    /**
     *@description run on application start
     *@access public
     * @memberof ClientsComponent
     */
    ClientsComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.clients = [
            {
                name: 'Dave Joe M',
                rating: 1500,
                mlipia_balance: 20000
            },
            {
                name: 'Kelvin Karis',
                rating: 1500,
                mlipia_balance: 1600
            },
            {
                name: 'Anthony M',
                rating: 1500,
                mlipia_balance: 33333
            },
            {
                name: 'Some guy',
                rating: 400,
                mlipia_balance: 20000
            }
        ];
    };
    ClientsComponent.prototype.getClients = function () {
        var _this = this;
        this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_2__["HybridMessage"]('/clients/list', 'clients:list', 'get')).subscribe(function (clients) {
            _this.clients = clients;
        });
    };
    ClientsComponent.prototype.selectClient = function (client) {
        this.selected_client = client;
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/views/content/clients.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/views/content/content.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/content/content.module.ts ***!
  \*************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.component */ "./src/app/views/content/accounts.component.ts");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients.component */ "./src/app/views/content/clients.component.ts");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups.component */ "./src/app/views/content/groups.component.ts");
/* harmony import */ var _transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.component */ "./src/app/views/content/transactions.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.component */ "./src/app/views/content/users.component.ts");
/* harmony import */ var _lenders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lenders.component */ "./src/app/views/content/lenders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ],
            declarations: [
                _accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"],
                _clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"],
                _groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"],
                _lenders_component__WEBPACK_IMPORTED_MODULE_8__["LendersComponent"],
                _transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"],
                _users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/views/content/groups.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/content/groups.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-3\" *ngFor=\"let group of groups\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">{{ group.name }}</div>\n      <div>Users: {{ group.users.all.length }} </div>\n      <div>Active: {{ group.users.active.length}}</div>\n      <div>Disabled: {{ group.users.disabled.length}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/content/groups.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/content/groups.component.ts ***!
  \***************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(api) {
        this.api = api;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.groups = [
            {
                name: 'Administrators',
                rights: [],
                users: {
                    all: [{
                            name: 'Dave Joe M',
                            role: 'admin',
                            username: 'dave',
                            active: true
                        }],
                    active: [{
                            name: 'Dave Joe M',
                            role: 'admin',
                            username: 'dave',
                            active: true
                        }],
                    disabled: []
                }
            },
            {
                name: 'Managers',
                rights: [],
                users: {
                    all: [{
                            name: 'Kelvin Karis',
                            role: 'manager',
                            username: 'kelvin',
                            active: true
                        }],
                    active: [{
                            name: 'Kelvin Karis',
                            role: 'manager',
                            username: 'kelvin',
                            active: true
                        }],
                    disabled: []
                }
            },
            {
                name: 'Approvers',
                rights: [],
                users: {
                    all: [{
                            name: 'Anthony M',
                            role: 'approver',
                            username: 'anthony',
                            active: true
                        }],
                    active: [{
                            name: 'Anthony M',
                            role: 'approver',
                            username: 'anthony',
                            active: true
                        }],
                    disabled: []
                }
            },
            {
                name: 'Agents',
                rights: [],
                users: {
                    all: [{
                            name: 'Some guy',
                            role: 'agent',
                            username: 'agent',
                            active: true
                        }],
                    active: [{
                            name: 'Some guy',
                            role: 'agent',
                            username: 'agent',
                            active: true
                        }],
                    disabled: []
                }
            },
        ];
    };
    GroupsComponent.prototype.getUsers = function () {
        var _this = this;
        this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_2__["HybridMessage"]('/groups/list', 'groups:list', 'get')).subscribe(function (groups) {
            _this.groups = groups;
        });
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/views/content/groups.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/views/content/lenders.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/content/lenders.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-3\" *ngFor=\"let lender of lenders\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">{{ lender.name }}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/content/lenders.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/content/lenders.component.ts ***!
  \****************************************************/
/*! exports provided: LendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendersComponent", function() { return LendersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LendersComponent = /** @class */ (function () {
    function LendersComponent(api) {
        this.api = api;
    }
    LendersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.lenders = [
            { name: "Tala" }, { name: "Branch" }, { name: "Timiza" }
        ];
    };
    LendersComponent.prototype.getUsers = function () {
        var _this = this;
        this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_2__["HybridMessage"]('/lenders/list', 'lenders:list', 'get')).subscribe(function (lenders) {
            _this.lenders = lenders;
        });
    };
    LendersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./lenders.component.html */ "./src/app/views/content/lenders.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], LendersComponent);
    return LendersComponent;
}());



/***/ }),

/***/ "./src/app/views/content/transactions.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/content/transactions.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-3\" *ngFor=\"let transaction of transactions\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">Account: {{ transaction.account.name }}</div>\n      <div>Client: {{ transaction.client.name }} </div>\n      <div>Amount: {{ transaction.amount }}</div>\n      <div>Succeeded: {{ transaction.success ? 'Yes' : 'No' }}</div>\n      <div>Date: {{ transaction.date}}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/content/transactions.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/content/transactions.component.ts ***!
  \*********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(api, router, route) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.selected = 'all';
        this.transactions = [];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return _this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_4__["HybridMessage"]('/transactions/list', 'transactions:list', 'post', { select: _this.selected ? _this.selected : params.get('select') }));
        })).subscribe(function (transactions) {
            _this.transactions = transactions;
            console.log(transactions);
        });
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/views/content/transactions.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/views/content/users.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/content/users.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floatLeft clickable animated fadeIn col-sm-6 col-lg-3\" *ngFor=\"let user of users\">\n  <div class=\"card text-white bg-primary\">\n    <div class=\"card-body pb-0\">\n      <div class=\"text-value\">{{ user.name }}</div>\n      <div>Username: {{ user.username }} </div>\n      <div>Role: {{ user.role }}</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/content/users.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/content/users.component.ts ***!
  \**************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(api) {
        this.api = api;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.users = [
            {
                name: 'Dave Joe M',
                role: 'admin',
                username: 'dave',
                active: true
            },
            {
                name: 'Kelvin Karis',
                role: 'manager',
                username: 'kelvin',
                active: true
            },
            {
                name: 'Anthony M',
                role: 'approver',
                username: 'anthony',
                active: true
            },
            {
                name: 'Some guy',
                role: 'agent',
                username: 'agent',
                active: true
            }
        ];
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.api.send(new _models_models__WEBPACK_IMPORTED_MODULE_2__["HybridMessage"]('/users/list', 'users:list', 'get')).subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/views/content/users.component.html"),
            styles: [__webpack_require__(/*! ../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["Api"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-admin-module~views-agent-agent-module~views-approver-approver-module~views-manager-manag~d591f0d4.js.map