import { ConfigType, registerAs } from '@nestjs/config';
import { gatewayServiceSchema } from './schema';

export const gatewayConfig = registerAs('gateway', () => {
  const env = gatewayServiceSchema.parse(process.env);

  return {
    port: env.PORT,
    auth: {
      host: env.AUTH_HOST,
      port: env.AUTH_PORT,
    },
  };
});

export type GatewayConfigType = ConfigType<typeof gatewayConfig>;
