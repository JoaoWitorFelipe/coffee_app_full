import "reflect-metadata";
import { Query, Resolver } from "type-graphql";
import Promotion from "../entities/Promotion";
import PromotionGatewayImpl from "../gateways/implementation/PromotionGatewayImpl";
import GetPromotions from "../usecases/GetPromotions";

@Resolver(Promotion)
export default class PromotionResolver {

    @Query(returns => [Promotion])
    async promotions(): Promise<Promotion[]> {
        const usecase = new GetPromotions(new PromotionGatewayImpl());
        return await usecase.execute();
    }

}