import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { graphql, GraphQLSchema } from "graphql";
import PlaceResolver from '../../../../modules/places/resolvers/PlaceResolver';

let schema: GraphQLSchema;

describe('PlaceResolver', () => {

    beforeEach(async () => {
        schema = await buildSchema({
            resolvers: [PlaceResolver],
        });
    });

    test('get fill data', async () => {
        const query: string = `
            query {
                places {
                    city,
                    state,
                    lat,
                    lon
                }
            }
        `;

        const actual = await graphql(schema, query)
        expect(actual.data).not.toBeNull();
        expect(typeof actual.data).toBe('object');
        expect(actual.errors).toBeUndefined();

    });

});
