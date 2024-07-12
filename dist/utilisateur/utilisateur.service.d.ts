import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';
export declare class UtilisateurService {
    private utilisateursRepository;
    findByEmail(email: string): void;
    constructor(utilisateursRepository: Repository<Utilisateur>);
    findAll(): Promise<Utilisateur[]>;
    findOne(id: number): Promise<Utilisateur>;
    create(utilisateur: Utilisateur): Promise<Utilisateur>;
    remove(id: number): Promise<void>;
    findOneByEmail(_email: string): Promise<Utilisateur>;
}
