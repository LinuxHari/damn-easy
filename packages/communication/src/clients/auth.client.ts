import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

export const authClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'auth',
    protoPath: join(__dirname, '../proto/auth.proto'),
  },
};
