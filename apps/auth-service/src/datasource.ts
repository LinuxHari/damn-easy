import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Auth } from './auth.entity';
import { loadEnv } from '@repo/app-config/database';

const env = loadEnv();

export const AuthDataSource = new DataSource({
  type: env.type,
  url: env.url,
  entities: [Auth],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
