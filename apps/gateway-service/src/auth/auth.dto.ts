import { z } from 'zod';
import type { LoginRequest } from '@repo/types/auth';
import type { IsEqual } from '@repo/types/common';

export const loginDto = z.object({
  email: z.email({ error: 'Please provide a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters long' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
});

export type LoginDto = z.infer<typeof loginDto>;

export const _typeCheck: IsEqual<LoginDto, LoginRequest> = true;
