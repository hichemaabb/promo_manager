import { Matiere } from 'src/matiere/matiere.entity/matiere.entity';
export declare class Salle {
    IdSalle: number;
    Etage: number;
    Capacite: number;
    Numero: number;
    PresenceProjecteur: boolean;
    PresenceTableau: boolean;
    matieres: Matiere[];
}
