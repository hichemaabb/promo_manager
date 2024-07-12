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
exports.UtilisateurController = void 0;
const common_1 = require("@nestjs/common");
const utilisateur_service_1 = require("./utilisateur.service");
const utilisateur_entity_1 = require("./utilisateur.entity/utilisateur.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const auth_service_1 = require("../auth/auth.service");
let UtilisateurController = class UtilisateurController {
    constructor(utilisateurService, authService) {
        this.utilisateurService = utilisateurService;
    }
    getProfile(req) {
        return req.user;
    }
    findAll() {
        return this.utilisateurService.findAll();
    }
    findOne(id) {
        return this.utilisateurService.findOne(id);
    }
    create(utilisateur) {
        console.log(utilisateur);
        return this.utilisateurService.create(utilisateur);
    }
    deleteUtilisateur(params) {
        return this.service.deleteUtilisateur(params.id);
    }
    update(Utilisateur) {
        return this.service.updateUtilisateur(Utilisateur);
    }
};
exports.UtilisateurController = UtilisateurController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", Promise)
], UtilisateurController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "deleteUtilisateur", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utilisateur_entity_1.Utilisateur]),
    __metadata("design:returntype", void 0)
], UtilisateurController.prototype, "update", null);
exports.UtilisateurController = UtilisateurController = __decorate([
    (0, common_1.Controller)('utilisateurs'),
    __metadata("design:paramtypes", [utilisateur_service_1.UtilisateurService, auth_service_1.AuthService])
], UtilisateurController);
//# sourceMappingURL=utilisateur.controller.js.map