import { Module } from '@nestjs/common';
import { DbClientConnectModule } from './db-client-connect/db-client-connect.module';
import { LocalDatabaseModule } from './database/local-database.module';

@Module({
  imports: [DbClientConnectModule, LocalDatabaseModule],
  controllers: [],
  providers: [], //
})
export class AppModule {}
