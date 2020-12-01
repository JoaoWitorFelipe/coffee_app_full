import Promotion from '../entities/Promotion'

export default interface PromotionGateway {
    getAll(): Promise<Promotion[]>
}