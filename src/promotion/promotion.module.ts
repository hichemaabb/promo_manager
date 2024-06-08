import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { Promotion } from './promotion.entity/promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion])],
  providers: [PromotionService],
  controllers: [PromotionController],
})
export class PromotionModule {}
