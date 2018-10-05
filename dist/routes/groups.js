"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupsRoutes {
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
            address: '/groups/add',
            func: (req, res) => {
            },
            method: 'post'
        });
    }
}
exports.GroupsRoutes = GroupsRoutes;
//# sourceMappingURL=groups.js.map