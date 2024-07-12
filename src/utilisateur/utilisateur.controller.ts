import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { log } from 'node:console';

@Controller('utilisateurs')
export class UtilisateurController {
  service: any;
  constructor(private readonly utilisateurService: UtilisateurService, authService: AuthService ) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  findAll(): Promise<Utilisateur[]> {
    return this.utilisateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Utilisateur> {
    return this.utilisateurService.findOne(id);
  }

  @Post()
  create(@Body() utilisateur: Utilisateur): Promise<Utilisateur> {console.log(utilisateur);
    return this.utilisateurService.create(utilisateur);
  }

  @Delete(':id')
  deleteUtilisateur(@Param() params) {
    return this.service.deleteUtilisateur(params.id);
  }

  @Put()
  update(@Body() Utilisateur: Utilisateur) {
    return this.service.updateUtilisateur(Utilisateur);
  }
}



