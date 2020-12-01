import 'reflect-metadata'
import { Query, Resolver } from 'type-graphql'
import Post from '../entities/Post'
import PostGatewayImpl from "../gateways/implementation/PostGatewayImpl";
import GetPosts from "../usecases/GetPosts"

@Resolver(Post)
export default class PostResolver {

    @Query(returns => [Post])
    async posts(): Promise<Post[]> {
        const useCase = new GetPosts(new PostGatewayImpl());
        return await useCase.execute();
    }

}
