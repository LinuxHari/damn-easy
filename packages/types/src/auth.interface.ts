export interface LoginRequest {
  email: string;
  password: string;
  fullName: string;
  username: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  csrfToken: string;
}
