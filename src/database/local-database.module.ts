import { DatabaseClient } from './../db-client-connect/database-client.entity';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: join(
        __dirname,
        '..',
        '..',
        '..',
        'database',
        './local-storage.sqlite',
      ),
      models: [DatabaseClient],
    }),
  ],
  controllers: [],
  providers: [],
})
export class LocalDatabaseModule {}
