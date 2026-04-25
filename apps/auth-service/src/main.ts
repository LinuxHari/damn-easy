import { NestFactory } from '@nestjs/core';
import { AppModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { authConfig, AuthConfigType } from '@repo/app-config/auth-service';
import { join } from 'path';

async function bootstrap() {
  const context = await NestFactory.createApplicationContext(AppModule);

  const config = context.get<AuthConfigType>(authConfig.KEY);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, 'auth.proto'),
      url: `${config.host}:${config.port}`,
    },
  });

  await app.listen();
}
bootstrap()
  .then(() => console.log(`Auth service is running...`))
  .catch((error) => console.error(`Auth service failed to start: ${error}`));
