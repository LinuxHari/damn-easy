import { NestFactory } from '@nestjs/core';
import { AppModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigType } from '@repo/app-config';
import { authConfig } from '@repo/app-config/auth-service';

async function bootstrap() {
  const context = await NestFactory.createApplicationContext(AppModule);

  const config = context.get<ConfigType<typeof authConfig>>(authConfig.KEY);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: config.port,
    },
  });

  await app.listen();
}
bootstrap()
  .then(() => console.log(`Auth service is running...`))
  .catch((error) => console.error(`Auth service failed to start: ${error}`));
