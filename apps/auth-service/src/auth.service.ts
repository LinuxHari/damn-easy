import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import type { LoginRequest, TokenResponse } from '@repo/types/auth';
import argon2 from 'argon2';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}
  async login(data: LoginRequest): Promise<TokenResponse> {
    const user = await this.authRepository.findOne({ where: { email: data.email } });

    if (!user || !(await argon2.verify(data.password, user.password))) {
      throw new RpcException({
        code: status.INVALID_ARGUMENT,
        message: 'Email or password is invalid',
      });
    }
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      csrfToken: 'csrfToken',
    };
  }
}
