import { Module } from '@nestjs/common';
import { DbClientConnectService } from './db-client-connect.service';
import { DbClientConnectController } from './db-client-connect.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseClient } from './database-client.entity';

@Module({
  imports: [SequelizeModule.forFeature([DatabaseClient])],
  controllers: [DbClientConnectController],
  providers: [DbClientConnectService],
})
export class DbClientConnectModule {}
