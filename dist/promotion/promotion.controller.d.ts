import { PromotionService } from './promotion.service';
import { Promotion } from './promotion.entity/promotion.entity';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    findAll(): Promise<Promotion[]>;
    findOne(id: number): Promise<Promotion>;
    create(promotion: Promotion): Promise<Promotion>;
    remove(id: number): Promise<void>;
    update(id: number): Promise<void>;
}
