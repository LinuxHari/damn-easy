import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppConfigModule } from '@repo/app-config';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { gatewayConfig, GatewayConfigType } from '@repo/app-config/gateway-service';

@Module({
  imports: [
    AppConfigModule.forRoot([gatewayConfig]),
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        inject: [gatewayConfig.KEY],
        useFactory: (services: GatewayConfigType) => ({
          transport: Transport.TCP,
          options: {
            host: services.auth.host,
            port: services.auth.port,
          },
        }),
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule {}
