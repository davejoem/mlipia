"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientsEvents {
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
    add() {
        return new Promise((resolve, reject) => {
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
                name: this.purview + ':' + this.purview + ':' + `list`
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
            // find client from database
            this.mlipia.models.Client.find()
                .exec()
                .then((appointments) => {
                this.end(res, cb, appointments);
            })
                .catch((err) => {
                this.end(rej, cb, {
                    message: "Couldn't list clients.",
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
exports.ClientsEvents = ClientsEvents;
//# sourceMappingURL=clients.js.map