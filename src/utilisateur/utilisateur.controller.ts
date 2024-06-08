import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';

@Controller('utilisateurs')
export class UtilisateurController {
  service: any;
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  findAll(): Promise<Utilisateur[]> {
    return this.utilisateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Utilisateur> {
    return this.utilisateurService.findOne(id);
  }

  @Post()
  create(@Body() utilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateurService.create(utilisateur);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.utilisateurService.remove(id);
  }

  @Delete(':id')
  deleteUtilisateur(@Param() params) {
      return this.service.deleteUtilisateur(params.id);
  }

}
