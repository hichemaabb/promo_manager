import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => Utilisateur, utilisateur => utilisateur.promotions)
  utilisateurs: Utilisateur[];
}
