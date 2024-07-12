import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';
const bcrypt=require('bcrypt')

@Injectable()
export class UtilisateurService {
  findByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateursRepository: Repository<Utilisateur>,
  ) {}

  findAll(): Promise<Utilisateur[]> {
    return this.utilisateursRepository.find({
      relations: ['promotions', 'roles'],
    });
  }

  findOne(id: number): Promise<Utilisateur> {
    return this.utilisateursRepository.findOne({
      where: { IdUtilisateur: id },
      relations: ['promotions', 'roles'],
    });
  }

  async create(utilisateur: Utilisateur): Promise<Utilisateur> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(utilisateur.mdp, saltOrRounds);
    utilisateur.mdp = hash;
  
    return this.utilisateursRepository.save(utilisateur);
  
  }

  
  
  async remove(id: number): Promise<void> {
    await this.utilisateursRepository.delete(id);
  }
  async findOneByEmail(_email: string): Promise<Utilisateur> {
    return await this.utilisateursRepository
      .createQueryBuilder('membre')
      .where('membre.email = :email', { email: _email })
      .getOne();

      

  }
}
