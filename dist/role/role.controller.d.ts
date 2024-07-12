import { RoleService } from './role.service';
import { Role } from './role.entity/role.entity';
export declare class RoleController {
    private readonly roleService;
    service: any;
    constructor(roleService: RoleService);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    create(role: Role): Promise<Role>;
    deleteRole(params: any): any;
    update(Role: Role): any;
}
