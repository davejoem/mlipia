"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupsEvents {
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
            this.asd.models.Group.find()
                .exec()
                .then((groups) => {
                this.end(res, cb, groups);
            })
                .catch((err) => {
                this.end(rej, cb, {
                    message: 'Couldn\'t list groups.',
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
exports.GroupsEvents = GroupsEvents;
//# sourceMappingURL=groups.js.map