import "reflect-metadata"
import "type-graphql"
import { Field, ObjectType } from "type-graphql";


type PromotionProp = {
    title: string;
    description: string;
    imagePath: string;
    startDate: number;
    endDate: number;
}

@ObjectType()
export default class Promotion {

    constructor(promotionProp: PromotionProp) {
        this.title = promotionProp.title;
        this.description = promotionProp.description;
        this.imagePath = promotionProp.imagePath;
        this.startDate = promotionProp.startDate;
        this.endDate = promotionProp.endDate;
    }

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    imagePath: string;

    @Field()
    startDate: number;

    @Field()
    endDate: number;


}
