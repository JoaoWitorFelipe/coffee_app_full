import PostGatewayImpl from '../../../../modules/posts/gateways/implementation/PostGatewayImpl';
import Post from '../../../../modules/posts/entities/Post';

let postGatewayImpl: PostGatewayImpl;

describe('PostGatewayImpl', () => {
    beforeEach(() => {
        postGatewayImpl = new PostGatewayImpl();
    });

    test('getAll with fill data', async () => {
        const mockResponse: Post[] = [
            new Post({
                id: 1,
                title: "Hello World",
                text: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg",
            }),
        ];
        jest.spyOn(postGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Post[] = await postGatewayImpl.getAll();
        expect(actual).toEqual(mockResponse);
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });

    test('getAll with empty data', async () => {
        const mockResponse: Post[] = [];
        jest.spyOn(postGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Post[] = await postGatewayImpl.getAll();
        expect(actual).toEqual(mockResponse);
        expect(actual.length).toEqual(0);
    });

});