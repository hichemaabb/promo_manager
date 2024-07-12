"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const salle_entity_1 = require("./salle.entity/salle.entity");
const salle_service_1 = require("./salle.service");
const salle_controller_1 = require("./salle.controller");
let SalleModule = class SalleModule {
};
exports.SalleModule = SalleModule;
exports.SalleModule = SalleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([salle_entity_1.Salle])],
        providers: [salle_service_1.SalleService],
        controllers: [salle_controller_1.SalleController],
    })
], SalleModule);
//# sourceMappingURL=salle.module.js.map