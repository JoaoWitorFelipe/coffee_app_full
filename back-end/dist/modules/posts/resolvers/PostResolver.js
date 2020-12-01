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
const Post_1 = __importDefault(require("../entities/Post"));
const PostGatewayImpl_1 = __importDefault(require("../gateways/implementation/PostGatewayImpl"));
const GetPosts_1 = __importDefault(require("../usecases/GetPosts"));
let PostResolver = class PostResolver {
    async posts() {
        const useCase = new GetPosts_1.default(new PostGatewayImpl_1.default());
        return await useCase.execute();
    }
};
__decorate([
    type_graphql_1.Query(returns => [Post_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
PostResolver = __decorate([
    type_graphql_1.Resolver(Post_1.default)
], PostResolver);
exports.default = PostResolver;
