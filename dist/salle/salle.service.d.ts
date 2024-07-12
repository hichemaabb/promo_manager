import { Repository } from 'typeorm';
import { Salle } from './salle.entity/salle.entity';
export declare class SalleService {
    private salleRepository;
    constructor(salleRepository: Repository<Salle>);
    findAll(): Promise<Salle[]>;
    findOne(id: number): Promise<Salle>;
    create(salle: Salle): Promise<Salle>;
    remove(id: number): Promise<void>;
}
