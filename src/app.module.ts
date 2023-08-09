import { Module } from '@nestjs/common';
import { DbClientConnectModule } from './db-client-connect/db-client-connect.module';
import { LocalDatabaseModule } from './database/local-database.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './errors/exceptions/all-exception.filter';

@Module({
  imports: [DbClientConnectModule, LocalDatabaseModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ], //
})
export class AppModule {}
