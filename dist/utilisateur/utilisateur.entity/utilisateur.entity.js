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
exports.Utilisateur = void 0;
const typeorm_1 = require("typeorm");
const promotion_entity_1 = require("../../promotion/promotion.entity/promotion.entity");
const role_entity_1 = require("../../role/role.entity/role.entity");
let Utilisateur = class Utilisateur {
};
exports.Utilisateur = Utilisateur;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Utilisateur.prototype, "IdUtilisateur", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Utilisateur.prototype, "Nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Utilisateur.prototype, "Prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Utilisateur.prototype, "Tel", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Utilisateur.prototype, "DateNaissance", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Utilisateur.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Utilisateur.prototype, "mdp", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Utilisateur.prototype, "DateCreation", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Utilisateur.prototype, "EstActif", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promotion_entity_1.Promotion, (promotion) => promotion.utilisateurs),
    (0, typeorm_1.JoinColumn)({ name: 'promotionId', referencedColumnName: 'IdPromo' }),
    __metadata("design:type", promotion_entity_1.Promotion)
], Utilisateur.prototype, "promotion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.utilisateurs, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'roleId', referencedColumnName: 'IdRole' }),
    __metadata("design:type", role_entity_1.Role)
], Utilisateur.prototype, "role", void 0);
exports.Utilisateur = Utilisateur = __decorate([
    (0, typeorm_1.Entity)()
], Utilisateur);
//# sourceMappingURL=utilisateur.entity.js.map