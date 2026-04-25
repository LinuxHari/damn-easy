import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '@nestjs/microservices';
import { gatewayConfig } from '@repo/app-config/gateway-service';
import type { GatewayConfigType } from '@repo/app-config/gateway-service';
import { GRPC_CLIENTS, authClientOptions } from '@repo/communication';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: GRPC_CLIENTS.AUTH,
        inject: [gatewayConfig.KEY],
        useFactory: (services: GatewayConfigType) => ({
          ...authClientOptions,
          options: {
            ...authClientOptions.options,
            url: `${services.auth.host}:${services.auth.port}`,
          },
        }),
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
