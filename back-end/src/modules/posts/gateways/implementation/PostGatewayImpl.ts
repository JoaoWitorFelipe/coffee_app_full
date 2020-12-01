import PostGateway from "../PostGateway";
import Post from '../../entities/Post'

export default class PostGatewayImpl implements PostGateway {
    async getAll(): Promise<Post[]> {
        const posts: Post[] = [
            {
                id: 1,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg"
            },

            {
                id: 2,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg"
            },
        ]

        return posts;
    }

}