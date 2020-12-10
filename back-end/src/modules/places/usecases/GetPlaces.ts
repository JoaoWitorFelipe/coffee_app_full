import Place from "../entities/Place";
import PlaceGateway from "../gateways/PlaceGateway";



export default class GetPlaces {

    constructor(private placeGateway: PlaceGateway) { }


    async execute(): Promise<Place[]> {
        return await this.placeGateway.getAll();
    }


}
