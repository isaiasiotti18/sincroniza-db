import { DatabaseClient } from './../db-client-connect/database-client.entity';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: resolve(__dirname, './local-storage.sqlite'),
      synchronize: true,
      models: [DatabaseClient],
    }),
  ],
  controllers: [],
  providers: [],
})
export class LocalDatabaseModule {}
