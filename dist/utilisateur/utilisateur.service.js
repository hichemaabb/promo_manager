"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const utilisateur_entity_1 = require("./utilisateur.entity/utilisateur.entity");
const bcrypt = require('bcrypt');
let UtilisateurService = class UtilisateurService {
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    constructor(utilisateursRepository) {
        this.utilisateursRepository = utilisateursRepository;
    }
    findAll() {
        return this.utilisateursRepository.find({
            relations: ['promotions', 'roles'],
        });
    }
    findOne(id) {
        return this.utilisateursRepository.findOne({
            where: { IdUtilisateur: id },
            relations: ['promotions', 'roles'],
        });
    }
    async create(utilisateur) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(utilisateur.mdp, saltOrRounds);
        utilisateur.mdp = hash;
        return this.utilisateursRepository.save(utilisateur);
    }
    async remove(id) {
        await this.utilisateursRepository.delete(id);
    }
    async findOneByEmail(_email) {
        return await this.utilisateursRepository
            .createQueryBuilder('membre')
            .where('membre.email = :email', { email: _email })
            .getOne();
    }
};
exports.UtilisateurService = UtilisateurService;
exports.UtilisateurService = UtilisateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(utilisateur_entity_1.Utilisateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UtilisateurService);
//# sourceMappingURL=utilisateur.service.js.map