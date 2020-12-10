import PlaceGatewayImpl from "../../../../modules/places/gateways/implementation/PlaceGatewayImpl";
import PlaceGateway from "../../../../modules/places/gateways/PlaceGateway";
import GetPlaces from "../../../../modules/places/usecases/GetPlaces";
import Place from "../../../../modules/places/entities/Place";



let useCase: GetPlaces;
let placeGateway: PlaceGateway;

describe('GetPlaces', () => {

    beforeEach(() => {
        placeGateway = new PlaceGatewayImpl();
        useCase = new GetPlaces(placeGateway);
    });

    test('get fill data', async () => {
        const mockData: Place[] = [new Place({
            city: 'Tubarao',
            state: 'Santa Catarina',
            lat: -19183,
            lon: -89797,
        })];

        jest.spyOn(placeGateway, 'getAll').mockResolvedValue(mockData);

        const actual = await useCase.execute();

        expect(actual.length).toBeGreaterThanOrEqual(1);
        expect(actual).toBe(mockData);

    });

    test('get empty data', async () => {
        const mockData: Place[] = [];

        jest.spyOn(placeGateway, 'getAll').mockResolvedValue(mockData);

        const actual = await useCase.execute();

        expect(actual.length).toBe(0);
        expect(actual).toBe(mockData);

    });

});




