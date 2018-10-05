"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LendersRoutes {
    /**
     *
     */
    constructor(mlipia) {
        this.routes = [];
        this.mlipia = mlipia;
        this.register();
        this.listen();
    }
    listen() {
        this.routes.forEach(route => {
            this.mlipia.app[route.method](route.address, route.func);
        });
    }
    register() {
        this.routes.push({
            address: '/lenders/list',
            func: (req, res) => {
                this.list(req, res);
            },
            method: 'get'
        });
    }
    list(req, res) {
        return new Array();
    }
}
exports.LendersRoutes = LendersRoutes;
//# sourceMappingURL=lenders.js.map