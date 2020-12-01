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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const Promotion_1 = __importDefault(require("../entities/Promotion"));
const PromotionGatewayImpl_1 = __importDefault(require("../gateways/implementation/PromotionGatewayImpl"));
const GetPromotions_1 = __importDefault(require("../usecases/GetPromotions"));
let PromotionResolver = class PromotionResolver {
    async promotions() {
        const usecase = new GetPromotions_1.default(new PromotionGatewayImpl_1.default());
        return await usecase.execute();
    }
};
__decorate([
    type_graphql_1.Query(returns => [Promotion_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PromotionResolver.prototype, "promotions", null);
PromotionResolver = __decorate([
    type_graphql_1.Resolver(Promotion_1.default)
], PromotionResolver);
exports.default = PromotionResolver;
