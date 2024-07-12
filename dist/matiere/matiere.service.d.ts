import { Matiere } from './matiere.entity/matiere.entity';
import { Repository } from 'typeorm';
export declare class MatiereService {
    private matiereRepository;
    constructor(matiereRepository: Repository<Matiere>);
    findAll(): Promise<Matiere[]>;
    findOne(id: number): Promise<Matiere>;
    create(matiere: Matiere): Promise<Matiere>;
    remove(id: number): Promise<void>;
}
