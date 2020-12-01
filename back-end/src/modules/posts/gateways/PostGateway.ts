import Post from '../entities/Post'

export default interface PostGateway {  
    getAll(): Promise<Post[]>
}