import { baseSchema } from '../base-schema';
import { z } from 'zod';

export const authSchema = baseSchema.extend({
  PORT: z.coerce.number(),
  JWT_SECRET: z.string().min(10),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});
