import Post from '../entities/Post'
import PostGateway from '../gateways/PostGateway'


export default class GetPosts {

    constructor(private postGateway: PostGateway) { }

    public async execute(): Promise<Post[]> {
        return await this.postGateway.getAll();
    }

}