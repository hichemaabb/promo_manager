import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { LoginDto } from './login.dto';
export declare class AuthService {
    private readonly utilisateurService;
    private readonly jwtService;
    constructor(utilisateurService: UtilisateurService, jwtService: JwtService);
    validateUser(email: string, mdp: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
