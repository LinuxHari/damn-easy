import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginRequest, TokenResponse } from '@repo/types/auth';
import { ZodValidationPipe } from '../pipes/zod.pipe';
import { loginDto } from './auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body(new ZodValidationPipe(loginDto)) loginRequest: LoginRequest): Promise<TokenResponse> {
    return this.authService.login(loginRequest);
  }
}
