import Post from "../../../../modules/posts/entities/Post";
import PostGatewayImpl from "../../../../modules/posts/gateways/implementation/PostGatewayImpl";
import GetPosts from "../../../../modules/posts/usecases/GetPosts";

let useCase: GetPosts;



describe('UseCase GetPosts', () => {

    beforeEach(() => {
        useCase = new GetPosts(new PostGatewayImpl());
    });

    test('get fill post list', async () => {
        const mock = jest.fn(() => [
            new Post({
                id: 1,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg",
            }),
            new Post({
                id: 2,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg",
            }),
        ]);

        const actual: Post[] = await useCase.execute();

        expect(actual).toEqual(await mock());
        // todo improve this part
        // expect(actual).toBe(await mock());
    });
});


