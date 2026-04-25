import { baseSchema } from '../base-schema';
import { z } from 'zod';

export const databaseSchema = baseSchema.extend({
  DATABASE_URL: z.string().min(1),
  DATABASE_TYPE: z.enum(['postgres', 'mongodb']),
});
