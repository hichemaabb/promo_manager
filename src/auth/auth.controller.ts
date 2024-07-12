import { Body, Controller, Post, Request, UseGuards, HttpCode,HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './login.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @UseGuards(LocalAuthGuard)
 // @Post('auth/login')
  //async login(@Request() req) {
   // return this.authService.login(req.user);
  //}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  
}
