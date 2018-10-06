"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class LendersEvents {
    /**
     *
     */
    constructor(mlipia, purview, autolist) {
        this.mlipia = mlipia;
        this.purview = purview;
        this.events = [];
        this.register().then(() => {
            if (autolist == true)
                this.listen();
        });
    }
    add(data) {
        return new Promise((resolve, reject) => {
            new models_1.Lender(this.mlipia).create(data).then((lender) => {
                resolve(lender);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    listen() {
        this.events.forEach(ev => {
            let event = this.purview + ':' + ev.name;
            this.mlipia.socket.on(event, ev.func);
        });
    }
    register() {
        return Promise.resolve(() => {
            this.events.push({
                func: this.list,
                name: this.purview + ':' + `list`
            });
            this.events.push({
                func: this.add,
                name: this.purview + ':' + 'add'
            });
        });
    }
    stopListening() {
        return Promise.resolve(() => {
            this.events.forEach(ev => {
                let event = this.purview + ':' + ev.name;
                this.mlipia.socket.off(event);
            });
        });
    }
    list(cb) {
        return new Promise((res, rej) => {
            this.mlipia.models.Lender.find()
                .exec()
                .then((lenders) => {
                this.end(res, cb, lenders);
            })
                .catch((err) => {
                this.end(rej, cb, {
                    message: 'Couldn\'t list lenders.',
                    error: err
                });
            });
        });
    }
    end(end, cb, data) {
        end(data);
        cb(data);
    }
}
exports.LendersEvents = LendersEvents;
//# sourceMappingURL=lenders.js.map