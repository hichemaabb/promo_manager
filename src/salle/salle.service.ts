import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salle } from './salle.entity/salle.entity';

@Injectable()
export class SalleService {
  constructor(
    @InjectRepository(Salle)
    private salleRepository: Repository<Salle>,
  ) {}

  findAll(): Promise<Salle[]> {
    return this.salleRepository.find({ relations: ['matieres'] });
  }

  findOne(id: number): Promise<Salle> {
    return this.salleRepository.findOne({ where: { IdSalle: id }, relations: ['matieres'] });
  }

  create(salle: Salle): Promise<Salle> {
    return this.salleRepository.save(salle);
  }

  async remove(id: number): Promise<void> {
    await this.salleRepository.delete(id);
  }
}
