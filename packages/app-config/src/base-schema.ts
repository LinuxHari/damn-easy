import { z } from 'zod';

export const baseSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
});
