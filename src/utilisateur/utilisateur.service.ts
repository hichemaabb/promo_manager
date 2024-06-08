import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity'; 

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
  ) {}

  findAll(): Promise<Utilisateur[]> {
    return this.utilisateursRepository.find({ relations: ['promotions', 'roles'] });
  }

  findOne(id: number): Promise<Utilisateur> {
    return this.utilisateursRepository.findOne({ where: { IdUtilisateur: id }, relations: ['promotions', 'roles'] });
  }

  create(utilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateursRepository.save(utilisateur);
  }

  async remove(id: number): Promise<void> {
    await this.utilisateursRepository.delete(id);
  }
}
