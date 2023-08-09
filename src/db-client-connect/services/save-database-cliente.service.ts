import { DbClientConnectDto } from '../dto/DbClientConnect.dto';
import { Injectable } from '@nestjs/common';
import { DatabaseClient } from '../database-client.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class SaveDatabaseClienteService {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,
  ) {}

  async saveDataCliente(
    dbclientConnectDto: DbClientConnectDto,
  ): Promise<DbClientConnectDto> {
    const { host, password, port, type, username, db_name } =
      dbclientConnectDto;

    const create = await this.databaseClientModel.create({
      id: 0,
      host,
      password,
      port,
      type,
      username,
      db_name,
    });

    const returnCreate = {
      id: create.id,
      host: create.host,
      password: create.password,
      port: create.port,
      type: create.type,
      username: create.username,
      db_name: create.db_name,
    };

    return returnCreate;
  }
}
