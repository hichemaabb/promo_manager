import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Promotion } from 'src/promotion/promotion.entity/promotion.entity';
import { Role } from 'src/role/role.entity/role.entity';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  IdUtilisateur: number;

  @Column({ length: 50 })
  Nom: string;

  @Column({ length: 50 })
  Prenom: string;

  @Column({ length: 10, nullable: true })
  Tel: string;

  @Column('date')
  DateNaissance: Date;

  @Column({ length: 50 })
  email: string;

  @Column()
  mdp: string;

  @Column('date')
  DateCreation: Date;

  @Column({ default: true })
  EstActif: boolean;

 
  @ManyToOne(() => Promotion, (promotion) => promotion.utilisateurs)
  @JoinColumn({ name: 'promotionId', referencedColumnName: 'IdPromo' })
  promotion: Promotion;
  
  @ManyToOne(() => Role, (role) => role.utilisateurs, {nullable:true})
  @JoinColumn({ name: 'roleId', referencedColumnName: 'IdRole' })
  role: Role;
}


