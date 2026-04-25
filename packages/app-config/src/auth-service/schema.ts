import { baseSchema } from '../base-schema';
import { z } from 'zod';

export const authSchema = baseSchema.extend({
  PORT: z.coerce.number(),
  JWT_SECRET: z.string().min(10),
  HOST: z.string(),
});
