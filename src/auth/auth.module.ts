import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    forwardRef(() => UtilisateurModule),
    PassportModule,
    JwtModule.register({
      secret: 'secret', // Utilisez une clé secrète forte en production
      signOptions: { expiresIn: '60m' }, // Durée de validité du token
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
