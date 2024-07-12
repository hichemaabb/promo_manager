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
exports.SalleController = void 0;
const common_1 = require("@nestjs/common");
const salle_service_1 = require("./salle.service");
const salle_entity_1 = require("./salle.entity/salle.entity");
let SalleController = class SalleController {
    constructor(salleService) {
        this.salleService = salleService;
    }
    findAll() {
        return this.salleService.findAll();
    }
    findOne(id) {
        return this.salleService.findOne(id);
    }
    create(salle) {
        return this.salleService.create(salle);
    }
    deleteSalle(params) {
        return this.service.deleteSalle(params.id);
    }
    update(Salle) {
        return this.service.updateSalle(Salle);
    }
};
exports.SalleController = SalleController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salle_entity_1.Salle]),
    __metadata("design:returntype", Promise)
], SalleController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SalleController.prototype, "deleteSalle", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salle_entity_1.Salle]),
    __metadata("design:returntype", void 0)
], SalleController.prototype, "update", null);
exports.SalleController = SalleController = __decorate([
    (0, common_1.Controller)('salles'),
    __metadata("design:paramtypes", [salle_service_1.SalleService])
], SalleController);
//# sourceMappingURL=salle.controller.js.map