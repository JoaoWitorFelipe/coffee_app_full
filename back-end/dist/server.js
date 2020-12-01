"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const apollo_server_1 = require("apollo-server");
const PostResolver_1 = __importDefault(require("./modules/posts/resolvers/PostResolver"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const PromotionResolver_1 = __importDefault(require("./modules/promotion/resolvers/PromotionResolver"));
const createServer = async () => new apollo_server_1.ApolloServer({
    schema: await type_graphql_1.buildSchema({
        resolvers: [PostResolver_1.default, PromotionResolver_1.default],
    }),
});
exports.createServer = createServer;
