import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';
import type { LoginRequest, TokenResponse } from './auth.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService')
  login(data: LoginRequest): Promise<TokenResponse> {
    return this.authService.login(data);
  }
}
