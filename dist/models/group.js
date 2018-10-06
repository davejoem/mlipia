"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
class Group extends typegoose_1.Typegoose {
    constructor(mlipia) {
        super();
        this.mlipia = mlipia;
        this.model = this.createModel();
    }
    createModel() {
        this.getModelForClass(this);
    }
    create(data) {
        return new Promise((resolve, reject) => {
            let LenderInstance = new Group(this.mlipia).getModelForClass(Group), lenderModel = new LenderInstance({
                name: data.name
            });
            lenderModel.save().then((lender) => {
                resolve(lender);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    find() {
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Group.prototype, "rights", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
exports.Group = Group;
// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new GroupModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await GroupModel.findOne();
//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();
//# sourceMappingURL=group.js.map