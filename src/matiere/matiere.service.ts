import { Injectable } from '@nestjs/common';
import { Matiere } from './matiere.entity/matiere.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MatiereService {
  constructor(
    @InjectRepository(Matiere)
    private matiereRepository: Repository<Matiere>,
  ) {}

  findAll(): Promise<Matiere[]> {
    return this.matiereRepository.find();
  }

  findOne(id: number): Promise<Matiere> {
    return this.matiereRepository.findOne({ where: { IdMatiere: id } });
  }

  create(matiere: Matiere): Promise<Matiere> {
    return this.matiereRepository.save(matiere);
  }

  async remove(id: number): Promise<void> {
    await this.matiereRepository.delete(id);
  }
}
