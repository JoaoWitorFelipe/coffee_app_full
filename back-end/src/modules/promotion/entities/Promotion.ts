import "reflect-metadata"
import "type-graphql"
import { Field, ObjectType } from "type-graphql";


type PromotionProp = {
    title: String;
    description: String;
    startDate: Number;
    endDate: Number;
}

@ObjectType()
export default class Promotion {

    constructor(promotionProp: PromotionProp) {
        this.title = promotionProp.title;
        this.description = promotionProp.description;
        this.startDate = promotionProp.startDate;
        this.endDate = promotionProp.endDate;
    }

    @Field()
    title: String;

    @Field()
    description: String;


    @Field()
    startDate: Number;

    @Field()
    endDate: Number;


}
