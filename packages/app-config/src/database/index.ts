import { ConfigType, registerAs } from '@nestjs/config';
import { databaseSchema } from './schema';

export const databaseConfig = registerAs('database', () => {
  const env = databaseSchema.parse(process.env);

  return {
    url: env.DATABASE_URL,
    type: env.DATABASE_TYPE,
  };
});

export const loadEnv = (): DatabaseConfigType => {
  const env = databaseSchema.parse(process.env);
  return {
    url: env.DATABASE_URL,
    type: env.DATABASE_TYPE,
  };
};

export type DatabaseConfigType = ConfigType<typeof databaseConfig>;
