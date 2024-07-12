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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salle = void 0;
const typeorm_1 = require("typeorm");
const matiere_entity_1 = require("../../matiere/matiere.entity/matiere.entity");
let Salle = class Salle {
};
exports.Salle = Salle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Salle.prototype, "IdSalle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Salle.prototype, "Etage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Salle.prototype, "Capacite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Salle.prototype, "Numero", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Salle.prototype, "PresenceProjecteur", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Salle.prototype, "PresenceTableau", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => matiere_entity_1.Matiere, (matiere) => matiere.salles),
    (0, typeorm_1.JoinTable)({
        name: 'salle_matiere',
        joinColumn: { name: 'salleId', referencedColumnName: 'IdSalle' },
        inverseJoinColumn: { name: 'matiereId', referencedColumnName: 'IdMatiere' },
    }),
    __metadata("design:type", Array)
], Salle.prototype, "matieres", void 0);
exports.Salle = Salle = __decorate([
    (0, typeorm_1.Entity)()
], Salle);
//# sourceMappingURL=salle.entity.js.map