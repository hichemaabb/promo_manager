import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { SalleService } from "./salle.service";
import { Salle } from "./salle.entity/salle.entity";

@Controller('salles')
export class SalleController {
  service: any;
  constructor(private readonly salleService: SalleService) {}

  @Get()
  findAll(): Promise<Salle[]> {
    return this.salleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Salle> {
    return this.salleService.findOne(id);
  }

  @Post()
  create(@Body() salle: Salle): Promise<Salle> {
    return this.salleService.create(salle);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.salleService.remove(id);
  }

  @Delete(':id')
  deleteSalle(@Param() params) {
      return this.service.deleteSalle(params.id);
  }

}
