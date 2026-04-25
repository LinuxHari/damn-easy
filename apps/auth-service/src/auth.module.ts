import { Module } from '@nestjs/common';
import { AppConfigModule } from '@repo/app-config';
import { authConfig } from '@repo/app-config/auth-service';
import { databaseConfig } from '@repo/app-config/database';
import { DatabaseModule } from '@repo/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Module({
  imports: [
    AppConfigModule.forRoot([authConfig, databaseConfig]),
    DatabaseModule,
    TypeOrmModule.forFeature([Auth]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
