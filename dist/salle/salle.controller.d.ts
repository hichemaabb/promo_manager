import { SalleService } from './salle.service';
import { Salle } from './salle.entity/salle.entity';
export declare class SalleController {
    private readonly salleService;
    service: any;
    constructor(salleService: SalleService);
    findAll(): Promise<Salle[]>;
    findOne(id: number): Promise<Salle>;
    create(salle: Salle): Promise<Salle>;
    deleteSalle(params: any): any;
    update(Salle: Salle): any;
}
