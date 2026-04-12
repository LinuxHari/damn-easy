import { registerAs } from '@nestjs/config';
import { authSchema } from './schema';

export const authConfig = registerAs('auth', () => {
  const env = authSchema.parse(process.env);

  return {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET,

    db: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      pass: env.DB_PASS,
      name: env.DB_NAME,
    },
  };
});
