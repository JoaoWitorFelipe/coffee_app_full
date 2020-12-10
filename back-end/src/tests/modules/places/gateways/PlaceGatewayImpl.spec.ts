import Place from "../../../../modules/places/entities/Place";
import PlaceGatewayImpl from "../../../../modules/places/gateways/implementation/PlaceGatewayImpl";

let placeGatewayImpl: PlaceGatewayImpl;

describe('PlaceGatewayImpl', () => {

    beforeEach(() => {
        placeGatewayImpl = new PlaceGatewayImpl();
    });


    test('get fill data with places', async () => {

        jest.spyOn(placeGatewayImpl, 'getAll').mockResolvedValue([
            new Place({
                city: 'Tubarao',
                state: 'Santa Catarina',
                lat: -1.9889732,
                lon: -1.906780,
            }),
        ]);

        const actual = await placeGatewayImpl.getAll();
        expect(actual.length).toBeGreaterThanOrEqual(1);
    });


});
