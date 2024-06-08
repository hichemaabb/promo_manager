import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
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

  @Column({ length: 50, nullable: true })
  Tel: string;

  @Column('date')
  DateNaissance: Date;

  @Column({ length: 50 })
  Email: string;

  @Column('date')
  DateCreation: Date;

  @Column({ default: true })
  EstActif: boolean;

  @ManyToMany(() => Promotion, promotion => promotion.utilisateurs)
  @JoinTable({
    name: "utilisateur_promotion",
    joinColumn: { name: "utilisateurId", referencedColumnName: "IdUtilisateur" },
    inverseJoinColumn: { name: "promotionId", referencedColumnName: "IdPromo" }
  })
  promotions: Promotion[];

  @ManyToMany(() => Role, role => role.utilisateurs)
  @JoinTable({
    name: "utilisateur_role",
    joinColumn: { name: "utilisateurId", referencedColumnName: "IdUtilisateur" },
    inverseJoinColumn: { name: "roleId", referencedColumnName: "IdRole" }
  })
  roles: Role[];
}
