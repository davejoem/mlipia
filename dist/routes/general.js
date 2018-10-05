"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GeneralRoutes {
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
            address: '/ip',
            func: (req, res) => {
                res.status(200).send(JSON.stringify({ ip: req.headers['x-forwarded-for'] }));
            },
            method: `get`
        });
        this.routes.push({
            address: `/`,
            func: (req, res) => {
                res.redirect('//' + req.headers.host + '/client');
                // res.sendFile(resolve(__dirname, `..`, `views`, `client`, `index.html`))
            },
            method: `get`
        });
        this.routes.push({
            address: '/*',
            func: (req, res) => {
                res.redirect('//' + req.headers.host);
            },
            method: `get`
        });
    }
}
exports.GeneralRoutes = GeneralRoutes;
//# sourceMappingURL=general.js.map