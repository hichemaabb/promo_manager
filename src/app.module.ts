
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

"@nestjs/config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as process from "node:process";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MatiereModule } from "./matiere/matiere.module";
import { PromotionModule } from "./promotion/promotion.module";
import { RoleModule } from "./role/role.module";
import { SalleModule } from "./salle/salle.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'promo_manager',
      entities: ['dist//.entity{.ts,.js}'],
      synchronize: true,
    // TypeOrmModule.forRoot({
    //   type: process.env.TYPE as any,
    //   host: process.env.HOST,
    //   port: parseInt(process.env.PORT, 10),
    //   username: process.env.USERNAME,
    //   password: process.env.PASSWORD,
    //   database: process.env.DATABASE,
    //   entities: ['dist//.entity{.ts,.js}'],
    //   synchronize: true,
     }),

    MatiereModule,
    PromotionModule,
    RoleModule,
    SalleModule,
    UtilisateurModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}