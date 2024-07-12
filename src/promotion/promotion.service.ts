import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promotion } from './promotion.entity/promotion.entity';

import { from } from 'rxjs';

@Injectable()
export class PromotionService {
  constructor(
    @InjectRepository(Promotion)
    private promotionRepository: Repository<Promotion>,
  ) {}

  findAll(): Promise<Promotion[]> {
    return this.promotionRepository.find();
  }

  findOne(id: number): Promise<Promotion> {
    return this.promotionRepository.findOne({ where: { IdPromo: id } });
  }

  create(promotion: Promotion): Promise<Promotion> {
    return this.promotionRepository.save(promotion);
  }

  async remove(id: number): Promise<void> {
    await this.promotionRepository.delete(id);
  }
}
