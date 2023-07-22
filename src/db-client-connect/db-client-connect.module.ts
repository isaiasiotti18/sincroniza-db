import { Module } from '@nestjs/common';
import { DbClientConnectService } from './db-client-connect.service';
import { DbClientConnectController } from './db-client-connect.controller';

@Module({
  controllers: [DbClientConnectController],
  providers: [DbClientConnectService],
})
export class DbClientConnectModule {}
