import Place from '../../entities/Place';
import PlaceGateway from '../PlaceGateway';


export default class PlaceGatewayImpl implements PlaceGateway {

    getAll(): Promise<Place[]> {
        throw new Error('Method not implemented.');
    }

}


