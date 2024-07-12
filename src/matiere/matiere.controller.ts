import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Matiere } from './matiere.entity/matiere.entity';
import { MatiereService } from './matiere.service';

@Controller('matieres')
export class MatiereController {
  service: any;
  constructor(private readonly matiereService: MatiereService) {}

  @Get()
  findAll(): Promise<Matiere[]> {
    return this.matiereService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Matiere> {
    return this.matiereService.findOne(id);
  }

  @Post()
  create(@Body() matiere: Matiere): Promise<Matiere> {
    return this.matiereService.create(matiere);
  }

  @Put()
  update(@Body() Matiere: Matiere) {
    return this.service.updateMatiere(Matiere);
  }
 

  @Delete(':id')
  deleteMatiere(@Param() params) {
    return this.service.deleteMatiere(params.id);
  }

} 

