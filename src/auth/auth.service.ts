import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, mdp: string): Promise<any> {
    const utilisateur = await this.utilisateurService.findOneByEmail(email);
    if (utilisateur && utilisateur.mdp === mdp) {
      const { mdp, ...result } = utilisateur;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const { email, mdp } = loginDto;
    const utilisateur = await this.validateUser(email, mdp);
    if (!utilisateur) {
      throw new UnauthorizedException('Les informations sont invalides');
    }
    const payload = { email: utilisateur.email, sub: utilisateur.IdUtilisateur };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
