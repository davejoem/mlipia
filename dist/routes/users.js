"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersRoutes {
    /**
     *
     */
    constructor(mlipia) {
        this.routes = [];
        this.mlipia = mlipia;
        this.register();
        this.listen();
    }
    add(req, res) {
    }
    listen() {
        this.routes.forEach(route => {
            this.mlipia.app[route.method](route.address, route.func);
        });
    }
    register() {
        this.routes.push({
            address: '/users/new',
            func: (req, res) => {
                this.add(req, res);
            },
            method: 'post'
        });
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=users.js.map