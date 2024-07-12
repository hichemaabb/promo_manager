import { Promotion } from 'src/promotion/promotion.entity/promotion.entity';
import { Role } from 'src/role/role.entity/role.entity';
export declare class Utilisateur {
    IdUtilisateur: number;
    Nom: string;
    Prenom: string;
    Tel: string;
    DateNaissance: Date;
    email: string;
    mdp: string;
    DateCreation: Date;
    EstActif: boolean;
    promotion: Promotion;
    role: Role;
}
