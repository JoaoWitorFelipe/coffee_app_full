import Place from '../../entities/Place';
import PlaceGateway from '../PlaceGateway';


export default class PlaceGatewayImpl implements PlaceGateway {

    async getAll(): Promise<Place[]> {
        const places: Place[] = [
            new Place({
                city: 'Tubarao',
                state: 'Santa Catarina',
                lat: -1111111,
                lon: -58976765894,
            }),
        ];


        return places;
    }

}


