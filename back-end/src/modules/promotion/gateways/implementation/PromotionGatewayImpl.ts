import Promotion from "../../entities/Promotion";
import PromotionGateway from "../PromotionGateway";

export default class PromotionGatewayImpl implements PromotionGateway {
    async getAll(): Promise<Promotion[]> {
        const promotions: Promotion[] = [
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