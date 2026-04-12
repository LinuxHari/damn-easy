import { Module } from '@nestjs/common';
import { AppConfigModule } from '@repo/app-config';
import { AppController } from './auth.controller';
import { AppService } from './auth.service';
import { authConfig } from '@repo/app-config/auth-service';

@Module({
  imports: [AppConfigModule.forRoot([authConfig])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
