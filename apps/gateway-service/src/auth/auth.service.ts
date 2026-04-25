import {
  Injectable,
  OnModuleInit,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import type { LoginRequest, TokenResponse } from '@repo/types/auth';
import { Inject } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { GRPC_CLIENTS, AuthServiceClient } from '@repo/communication';
import { status } from '@grpc/grpc-js';

@Injectable()
export class AuthService implements OnModuleInit {
  private grpcAuthService!: AuthServiceClient;

  constructor(@Inject(GRPC_CLIENTS.AUTH) private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcAuthService = this.client.getService<AuthServiceClient>('AuthService');
  }
  async login(data: LoginRequest): Promise<TokenResponse> {
    try {
      const res = await lastValueFrom(this.grpcAuthService.login(data));
      return res;
    } catch (error: any) {
      if (error.code === status.INVALID_ARGUMENT) {
        throw new BadRequestException(error.details || error.message);
      }
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
