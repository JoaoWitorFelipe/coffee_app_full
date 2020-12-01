import Promotion from "../entities/Promotion";
import PromotionGateway from "../gateways/PromotionGateway";

export default class GetPromotions {

    constructor(private promotionGateway: PromotionGateway) {}

    async execute(): Promise<Promotion[]> {
        return await this.promotionGateway.getAll();
    }


}