import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import { LoginRequest, TokenResponse } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}
  async login(data: LoginRequest): Promise<TokenResponse> {
    const user = await this.authRepository.findOne({ where: { email: data.email } });
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== data.password) {
      throw new Error('Invalid password');
    }
    return {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
      csrfToken: 'csrfToken',
    };
  }
}
