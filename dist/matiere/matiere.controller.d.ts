import { Matiere } from './matiere.entity/matiere.entity';
import { MatiereService } from './matiere.service';
export declare class MatiereController {
    private readonly matiereService;
    service: any;
    constructor(matiereService: MatiereService);
    findAll(): Promise<Matiere[]>;
    findOne(id: number): Promise<Matiere>;
    create(matiere: Matiere): Promise<Matiere>;
    update(Matiere: Matiere): any;
    deleteMatiere(params: any): any;
}
