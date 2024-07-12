import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salle } from './salle.entity/salle.entity';
import { SalleService } from './salle.service';
import { SalleController } from './salle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Salle])],
  providers: [SalleService],
  controllers: [SalleController],
})
export class SalleModule {}
