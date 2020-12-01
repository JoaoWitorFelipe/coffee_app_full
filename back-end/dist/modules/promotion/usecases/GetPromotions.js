"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetPromotions {
    constructor(promotionGateway) {
        this.promotionGateway = promotionGateway;
    }
    async execute() {
        return await this.promotionGateway.getAll();
    }
}
exports.default = GetPromotions;
