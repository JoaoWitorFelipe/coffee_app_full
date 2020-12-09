import PromotionGatewayImpl from '../../../../modules/promotion/gateways/implementation/PromotionGatewayImpl';
import Promotion from '../../../../modules/promotion/entities/Promotion';

let promotionGatewayImpl: PromotionGatewayImpl;

describe('PromotionGatewayImpl', () => {
    beforeEach(() => {
        promotionGatewayImpl = new PromotionGatewayImpl();
    });

    test('getAll with fill data', async () => {
        const mockResponse: Promotion[] = [
            new Promotion({
                title: "Hello World",
                description: "I am very happy learning typescript",
                imagePath: "https://www.teahub.io/photos/full/315-3150213_coffee-cup-wallpaper-cartoon.jpg",
                startDate: 1,
                endDate: 1,
            }),
        ];
        jest.spyOn(promotionGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Promotion[] = await promotionGatewayImpl.getAll();
        expect(actual).toEqual(mockResponse);
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });

    test('getAll with empty data', async () => {
        const mockResponse: Promotion[] = [];
        jest.spyOn(promotionGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Promotion[] = await promotionGatewayImpl.getAll();
        expect(actual).toEqual(mockResponse);
        expect(actual.length).toEqual(0);
    });

});