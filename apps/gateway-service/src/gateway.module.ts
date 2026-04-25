import { Module } from '@nestjs/common';
import { AppConfigModule } from '@repo/app-config';
import { gatewayConfig } from '@repo/app-config/gateway-service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule.forRoot([gatewayConfig]), AuthModule],
})
export class AppModule {}
