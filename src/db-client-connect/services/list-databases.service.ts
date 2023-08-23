import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseClient } from '../database-client.entity';

@Injectable()
export class ListDatabasesService {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,
  ) {}

  async execute() {
    const databases = await this.databaseClientModel.findAll();
    return await databases;
  }
}
