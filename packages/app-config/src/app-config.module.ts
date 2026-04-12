import { DynamicModule, Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule } from '@nestjs/config';

@Module({})
export class AppConfigModule {
  static forRoot(load: ConfigFactory[]): DynamicModule {
    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          load,
        }),
      ],
      exports: [ConfigModule],
    };
  }
}
