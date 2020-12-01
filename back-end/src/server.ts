import { ApolloServer, gql } from 'apollo-server'
import PostResolver from './modules/posts/resolvers/PostResolver'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import PromotionResolver from './modules/promotion/resolvers/PromotionResolver'

export const createServer = async (): Promise<ApolloServer> => new ApolloServer({
    schema: await buildSchema({
        resolvers: [PostResolver, PromotionResolver],
    }),
})