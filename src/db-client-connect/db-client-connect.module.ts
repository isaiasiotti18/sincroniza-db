import { Module } from '@nestjs/common';
import { SaveDatabaseClienteService } from './services/save-database-cliente.service';
import { DbClientConnectController } from './db-client-connect.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseClient } from './database-client.entity';
import { CreateConnectionWithDatabase } from './services/create-connection-with-database.service';
import { ListDatabasesService } from './services/list-databases.service';

@Module({
  imports: [SequelizeModule.forFeature([DatabaseClient])],
  controllers: [DbClientConnectController],
  providers: [
    SaveDatabaseClienteService,
    CreateConnectionWithDatabase,
    ListDatabasesService,
  ],
})
export class DbClientConnectModule {}
