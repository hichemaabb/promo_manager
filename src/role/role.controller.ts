import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Role } from "./role.entity/role.entity";


@Controller('roles')
export class RoleController {
  service: any;
  constructor(private readonly roleService: RoleService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Role> {
    return this.roleService.findOne(id);
  }

  @Post()
  create(@Body() role: Role): Promise<Role> {
    return this.roleService.create(role);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.roleService.remove(id);
  }
  @Delete(':id')
  deleteRole(@Param() params) {
      return this.service.deleteRole(params.id);
  }

}
