"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const matiere_module_1 = require("./matiere/matiere.module");
const promotion_module_1 = require("./promotion/promotion.module");
const role_module_1 = require("./role/role.module");
const salle_module_1 = require("./salle/salle.module");
const utilisateur_module_1 = require("./utilisateur/utilisateur.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 8889,
                "username": "root",
                "password": "root",
                "database": "promo_manager",
                "entities": ["dist/**/**.entity{.ts,.js}"],
                "synchronize": true
            }),
            matiere_module_1.MatiereModule,
            promotion_module_1.PromotionModule,
            role_module_1.RoleModule,
            salle_module_1.SalleModule,
            utilisateur_module_1.UtilisateurModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map