import { ConfigType, registerAs } from '@nestjs/config';
import { authSchema } from './schema';

export const authConfig = registerAs('auth', () => {
  const env = authSchema.parse(process.env);

  return {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET,
    host: env.HOST,
  };
});

export type AuthConfigType = ConfigType<typeof authConfig>;
