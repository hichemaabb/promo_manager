import { Repository } from 'typeorm';
import { Role } from './role.entity/role.entity';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    create(role: Role): Promise<Role>;
    remove(id: number): Promise<void>;
}
