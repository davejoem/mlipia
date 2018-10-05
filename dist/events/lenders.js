"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LendersEvents {
    /**
     *
     */
    constructor(asd, purview, autolist) {
        this.asd = asd;
        this.purview = purview;
        this.events = [];
        this.register().then(() => {
            if (autolist == true)
                this.listen();
        });
    }
    add() {
        return new Array();
    }
    listen() {
        this.events.forEach(ev => {
            let event = this.purview + ':' + ev.name;
            this.asd.socket.on(event, ev.func);
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
                this.asd.socket.off(event);
            });
        });
    }
    list(cb) {
        return new Promise((res, rej) => {
            this.asd.models.Lender.find()
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