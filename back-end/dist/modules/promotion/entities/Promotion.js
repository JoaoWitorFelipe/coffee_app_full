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
require("reflect-metadata");
require("type-graphql");
const type_graphql_1 = require("type-graphql");
let Promotion = class Promotion {
    constructor(promotionProp) {
        this.title = promotionProp.title;
        this.description = promotionProp.description;
        this.startDate = promotionProp.startDate;
        this.endDate = promotionProp.endDate;
    }
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Promotion.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Promotion.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Promotion.prototype, "startDate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Promotion.prototype, "endDate", void 0);
Promotion = __decorate([
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], Promotion);
exports.default = Promotion;
