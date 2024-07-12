import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
export declare class Role {
    IdRole: number;
    NomRole: string;
    utilisateurs: Utilisateur[];
}
