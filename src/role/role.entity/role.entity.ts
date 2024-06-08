import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity'; 

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  IdRole: number;

  @Column({ length: 50 })
  NomRole: string;

  @ManyToMany(() => Utilisateur, utilisateur => utilisateur.roles)
  utilisateurs: Utilisateur[];
}
