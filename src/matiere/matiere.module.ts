import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matiere } from './matiere.entity/matiere.entity';
import { MatiereService } from './matiere.service';
import { MatiereController } from './matiere.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Matiere])],
  providers: [MatiereService],
  controllers: [MatiereController],
})
export class MatiereModule {}
