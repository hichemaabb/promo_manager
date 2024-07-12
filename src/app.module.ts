// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UtilisateurModule } from './utilisateur/utilisateur.module';
// import { RoleModule } from './role/role.module';
// import { PromotionModule } from './promotion/promotion.module';
// import { MatiereModule } from './matiere/matiere.module';
// import { SalleModule } from './salle/salle.module';

// @Module({
//   imports: [UtilisateurModule, RoleModule, PromotionModule, MatiereModule, SalleModule],
//   controllers: [AppController],
//   providers:[ AppService],
// })

// export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'node:process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatiereModule } from './matiere/matiere.module';
import { PromotionModule } from './promotion/promotion.module';
import { RoleModule } from './role/role.module';
import { SalleModule } from './salle/salle.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host":  "localhost",
    "port":  8889,
    "username": "root",
    "password": "root",
    "database": "promo_manager",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "synchronize": true
  }),
    MatiereModule,
    PromotionModule,
    RoleModule,
    SalleModule,
    UtilisateurModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
