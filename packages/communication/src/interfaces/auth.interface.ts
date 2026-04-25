import { Observable } from 'rxjs';
import type { LoginRequest, TokenResponse } from '@repo/types/auth';

export interface AuthServiceClient {
  login(data: LoginRequest): Observable<TokenResponse>;
}
