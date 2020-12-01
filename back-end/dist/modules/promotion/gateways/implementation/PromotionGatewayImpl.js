"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromotionGatewayImpl {
    async getAll() {
        const promotions = [
            {
                title: "I need more ☕",
                description: "Enjoy !!",
                startDate: Date.now(),
                endDate: Date.now(),
            },
            {
                title: "I need more ☕",
                description: "Enjoy !!",
                startDate: Date.now(),
                endDate: Date.now(),
            }
        ];
        return promotions;
    }
}
exports.default = PromotionGatewayImpl;
