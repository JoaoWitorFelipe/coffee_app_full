import Promotion from "../../../../modules/promotion/entities/Promotion";
import PromotionGatewayImpl from "../../../../modules/promotion/gateways/implementation/PromotionGatewayImpl";
import GetPromotions from "../../../../modules/promotion/usecases/GetPromotions";

let useCase: GetPromotions;
let promotionGatewayImpl: PromotionGatewayImpl;

describe('UseCase GetPromotions', () => {

    beforeEach(() => {
        promotionGatewayImpl = new PromotionGatewayImpl();
        useCase = new GetPromotions(promotionGatewayImpl);
    });

    test('get fill promotion list', async () => {
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

        const actual: Promotion[] = await useCase.execute();

        expect(actual.length).toBe(1);
        expect(actual).toBe(mockResponse);
    });


    test('get empty promotion list', async () => {
        const mockResponse: Promotion[] = [];
        jest.spyOn(promotionGatewayImpl, 'getAll').mockResolvedValue(mockResponse);

        const actual: Promotion[] = await useCase.execute();

        expect(actual.length).toBe(0);
        expect(actual).toBe(mockResponse);
    });

});


