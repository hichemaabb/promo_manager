import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  IdPromo: number;

  @Column({ length: 50 })
  Numero: string;

  @Column({ length: 50 })
  NomDiplome: string;

  @Column('date')
  AnneeFin: Date;

  @Column({ length: 50 })
  NiveauDiplome: string;

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.promotion)
  utilisateurs: Utilisateur[];
}
