import Post from "../../../../modules/posts/entities/Post";
import PostGatewayImpl from "../../../../modules/posts/gateways/implementation/PostGatewayImpl";
import GetPosts from "../../../../modules/posts/usecases/GetPosts";

let useCase: GetPosts;
let postGatewayImpl: PostGatewayImpl;

describe('UseCase GetPosts', () => {

    beforeEach(() => {
        postGatewayImpl = new PostGatewayImpl();
        useCase = new GetPosts(postGatewayImpl);
    });

    test('get fill post list', async () => {
        const mockResponse: Post[] = [
            new Post({
                id: 1,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg",
            }),
        ];
        jest.spyOn(postGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Post[] = await useCase.execute();

        expect(actual.length).toBe(1);
        expect(actual).toBe(mockResponse);
    });
});


