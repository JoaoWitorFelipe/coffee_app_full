import 'reflect-metadata';
import { Resolver, Query } from 'type-graphql';
import Place from '../entities/Place';
import PlaceGatewayImpl from '../gateways/implementation/PlaceGatewayImpl';
import GetPlaces from '../usecases/GetPlaces';

@Resolver(Place)
export default class PlaceResolver {

    @Query(returns => [Place])
    async places(): Promise<Place[]> {
        const useCase = new GetPlaces(new PlaceGatewayImpl());
        return await useCase.execute();
    }


}

