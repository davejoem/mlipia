"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class AdminRoutes {
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
            address: '/admin',
            func: (req, res) => {
                res.sendFile(path_1.resolve(__dirname, `..`, `views`, `admin`, `index.html`));
            },
            method: 'get'
        });
    }
}
exports.AdminRoutes = AdminRoutes;
//# sourceMappingURL=admin.js.map