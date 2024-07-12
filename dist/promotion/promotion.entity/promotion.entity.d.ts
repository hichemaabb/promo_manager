import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
export declare class Promotion {
    IdPromo: number;
    Numero: string;
    NomDiplome: string;
    AnneeFin: Date;
    NiveauDiplome: string;
    utilisateurs: Utilisateur[];
}
