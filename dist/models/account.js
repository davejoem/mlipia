"use strict";var e=this&&this.__decorate||function(e,t,o,r){var c,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(n<3?c(s):n>3?c(t,o,s):c(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("typegoose");class r extends o.Typegoose{constructor(e){super(),this.mlipia=e||null}fetchModel(){return this.getModelForClass(this)}get model(){return this.fetchModel()}}e([o.prop({required:!0}),t("design:type",String)],r.prototype,"name",void 0),e([o.prop({required:!0}),t("design:type",Number)],r.prototype,"balance",void 0),e([o.prop({required:!0,default:[]}),t("design:type",Array)],r.prototype,"transactions",void 0),exports.Account=r,exports.AccountModel=(new r).getModelForClass(r,{schemaOptions:{collection:"accounts"}});