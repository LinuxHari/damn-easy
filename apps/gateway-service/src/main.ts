import { NestFactory } from '@nestjs/core';
import { AppModule } from './gateway.module';
import { ConfigType } from '@repo/app-config';
import { gatewayConfig } from '@repo/app-config/gateway-service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigType<typeof gatewayConfig>>(gatewayConfig.KEY);
  await app.listen(config.port);
}

bootstrap()
  .then(() => console.log('Gateway service is running'))
  .catch((error) => console.error('Gateway service failed to start: ', error));
