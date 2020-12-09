import "reflect-metadata";
import { graphql, GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import PromotionResolver from "../../../../modules/promotion/resolvers/PromotionResolver";

let schema: GraphQLSchema;

describe('PromotionResolver', () => {

    beforeEach(async () => {
        schema = await buildSchema({resolvers: [PromotionResolver]});
    });

    test('fill data with posts', async () => {
        const query: string = `
            query {
                promotions {
                    title,
                    description,
                    imagePath
                }
            }
        `;

        const actual = await graphql(schema, query);
        expect(actual.data).not.toBeNull();
        expect(typeof actual.data).toBe('object');
        expect(actual.errors).toBeUndefined();
    }); 
});