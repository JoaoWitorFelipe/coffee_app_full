import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';

type PlaceProps = {
    city: string,
    state: string,
    lat: number,
    lon: number,
}

@ObjectType()
export default class Place {

    constructor(props: PlaceProps) {
        this.city = props.city;
        this.state = props.state;
        this.lat = props.lat;
        this.lon = props.lon;
    }

    @Field()
    city: string;

    @Field()
    state: string;

    @Field()
    lat: number;

    @Field()
    lon: number;


}