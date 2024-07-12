import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Matiere } from 'src/matiere/matiere.entity/matiere.entity';

@Entity()
export class Salle {
  @PrimaryGeneratedColumn()
  IdSalle: number;

  @Column()
  Etage: number;

  @Column()
  Capacite: number;

  @Column()
  Numero: number;

  @Column()
  PresenceProjecteur: boolean;

  @Column()
  PresenceTableau: boolean;

  @ManyToMany(() => Matiere, (matiere) => matiere.salles)
  @JoinTable({
    name: 'salle_matiere',
    joinColumn: { name: 'salleId', referencedColumnName: 'IdSalle' },
    inverseJoinColumn: { name: 'matiereId', referencedColumnName: 'IdMatiere' },
  })
  matieres: Matiere[];
}
