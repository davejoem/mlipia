"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersEvents {
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
            this.mlipia.models.User.find()
                .then((users) => {
                this.end(res, cb, users);
            })
                .catch((err) => {
                this.end(rej, cb, {
                    message: "Couldn't list users",
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
exports.UsersEvents = UsersEvents;
//# sourceMappingURL=users.js.map