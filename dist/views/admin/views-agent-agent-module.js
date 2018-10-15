(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-agent-agent-module"],{

/***/ "./src/app/views/agent/agent-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/agent/agent-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutingModule", function() { return AgentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _content_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/clients.component */ "./src/app/views/content/clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        data: { title: 'Agent', expectedRole: 'agent' },
        canActivate: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        canLoad: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]],
        children: [
            {
                path: 'clients',
                component: _content_clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
                data: { title: 'Clients', expectedRole: 'agent' },
                canActivateChild: [_user_service__WEBPACK_IMPORTED_MODULE_2__["User"]]
            }
        ]
    }
];
var AgentRoutingModule = /** @class */ (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/agent/agent.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/agent/agent.module.ts ***!
  \*********************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _agent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent-routing.module */ "./src/app/views/agent/agent-routing.module.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/content.module */ "./src/app/views/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"],
                _agent_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgentRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-agent-agent-module.js.map