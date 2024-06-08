import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { Promotion } from './promotion.entity/promotion.entity';

@Controller('promotions')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Get()
  findAll(): Promise<Promotion[]> {
    return this.promotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Promotion> {
    return this.promotionService.findOne(id);
  }

  @Post()
  create(@Body() promotion: Promotion): Promise<Promotion> {
    return this.promotionService.create(promotion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.promotionService.remove(id);
  }
}
