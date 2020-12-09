import "reflect-metadata";
import { graphql, GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import PostResolver from "../../../../modules/posts/resolvers/PostResolver";

let schema: GraphQLSchema;

describe('PostResolver', () => {

    beforeEach(async () => {
        schema = await buildSchema({resolvers: [PostResolver]});
    });

    test('fill data with posts', async () => {
        const query: string = `
            query {
                posts {
                    id,
                    title,
                    text,
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