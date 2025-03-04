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
exports.MatiereService = void 0;
const common_1 = require("@nestjs/common");
const matiere_entity_1 = require("./matiere.entity/matiere.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let MatiereService = class MatiereService {
    constructor(matiereRepository) {
        this.matiereRepository = matiereRepository;
    }
    findAll() {
        return this.matiereRepository.find();
    }
    findOne(id) {
        return this.matiereRepository.findOne({ where: { IdMatiere: id } });
    }
    create(matiere) {
        return this.matiereRepository.save(matiere);
    }
    async remove(id) {
        await this.matiereRepository.delete(id);
    }
};
exports.MatiereService = MatiereService;
exports.MatiereService = MatiereService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(matiere_entity_1.Matiere)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MatiereService);
//# sourceMappingURL=matiere.service.js.map