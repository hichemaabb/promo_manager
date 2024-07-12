import { Repository } from 'typeorm';
import { Promotion } from './promotion.entity/promotion.entity';
export declare class PromotionService {
    private promotionRepository;
    constructor(promotionRepository: Repository<Promotion>);
    findAll(): Promise<Promotion[]>;
    findOne(id: number): Promise<Promotion>;
    create(promotion: Promotion): Promise<Promotion>;
    remove(id: number): Promise<void>;
}
