"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetPosts {
    constructor(postGateway) {
        this.postGateway = postGateway;
    }
    async execute() {
        return await this.postGateway.getAll();
    }
}
exports.default = GetPosts;
