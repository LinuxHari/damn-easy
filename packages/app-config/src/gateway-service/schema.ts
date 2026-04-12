import { baseSchema } from '../base-schema';
import { z } from 'zod';

export const gatewayServiceSchema = baseSchema.extend({
  PORT: z.coerce.number(),
  AUTH_HOST: z.string(),
  AUTH_PORT: z.coerce.number(),
});
