import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './local-storage.sqlite',
    }),
  ],
  controllers: [],
  providers: [],
})
export class LocalDatabaseModule {}
