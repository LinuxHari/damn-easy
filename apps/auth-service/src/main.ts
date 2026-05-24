import { NestFactory } from '@nestjs/core';
import { AppModule } from './auth.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { authConfig, AuthConfigType } from '@repo/app-config/auth-service';
import { authClientOptions } from '@repo/communication';

async function bootstrap() {
  const context = await NestFactory.createApplicationContext(AppModule);

  const config = context.get<AuthConfigType>(authConfig.KEY);

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    ...authClientOptions,
    options: {
      ...authClientOptions.options,
      url: `${config.host}:${config.port}`,
    },
  });

  await app.startAllMicroservices();
  await app.listen(config.port);
}
bootstrap()
  .then(() => console.log(`Auth service is running...`))
  .catch((error) => console.error(`Auth service failed to start: ${error}`));
