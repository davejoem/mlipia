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
class User extends typegoose_1.Typegoose {
    constructor(mlipia) {
        super();
        this.mlipia = mlipia;
    }
    fetchModel() {
        return this.getModelForClass(this);
    }
    get model() {
        return this.fetchModel();
    }
    create(data) {
        return new Promise((resolve, reject) => {
            let UserInstance = new User(this.mlipia).getModelForClass(User), userModel = new UserInstance({
                username: data.username,
                name: data.name,
                groups: data.groups
            });
            userModel.save().then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }
    find() {
        return new Promise((resolve, reject) => {
            this.model.find().then((users) => {
                resolve(users);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Array)
], User.prototype, "groups", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
exports.User = User;
// UserModel is a regular Mongoose Model with correct types
// (async () => {
//   const u = new AppointmentModel({ date: new Date(Date.now()) });
//   await u.save();
//   const user = await AppointmentModel.findOne();
//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log(user);
// })();
//# sourceMappingURL=user.js.map