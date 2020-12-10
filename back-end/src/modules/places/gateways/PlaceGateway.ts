import Place from "../entities/Place";

export default interface Postgateway {
    getAll(): Promise<Place[]>;
}
