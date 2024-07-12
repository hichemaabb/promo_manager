import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class UtilisateurController {
    private readonly utilisateurService;
    service: any;
    constructor(utilisateurService: UtilisateurService, authService: AuthService);
    getProfile(req: any): any;
    findAll(): Promise<Utilisateur[]>;
    findOne(id: number): Promise<Utilisateur>;
    create(utilisateur: Utilisateur): Promise<Utilisateur>;
    deleteUtilisateur(params: any): any;
    update(Utilisateur: Utilisateur): any;
}
