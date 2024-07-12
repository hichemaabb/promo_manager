import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Salle } from 'src/salle/salle.entity/salle.entity';

@Entity()
export class Matiere {
  @PrimaryGeneratedColumn()
  IdMatiere: number;

  @Column({ length: 50 })
  NomMatiere: string;

  @ManyToMany(() => Salle, (salle) => salle.matieres)
  salles: Salle[];
}
