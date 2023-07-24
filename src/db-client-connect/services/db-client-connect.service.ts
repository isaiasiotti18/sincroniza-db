import { DbClientConnectDto } from '../dto/DbClientConnect.dto';
import { Injectable } from '@nestjs/common';
import { DatabaseClient } from '../database-client.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DbClientConnectService {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,

    private clientConnection: Sequelize,
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

    console.log(create);

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

  async connectDatabase(): Promise<void> {
    const connectionData = await this.getConnectionDataFromDatabase();

    this.clientConnection = new Sequelize({
      dialect: 'mysql', // Substitua pelo dialeto correto do banco de dados do cliente (por exemplo, mysql, postgres, etc)
      host: connectionData.host,
      username: connectionData.username,
      password: connectionData.password,
      database: connectionData.db_name,
    });

    await this.clientConnection.authenticate();
  }

  private async getConnectionDataFromDatabase(): Promise<DbClientConnectDto> {
    const findAll = await this.databaseClientModel.findOne({
      where: { id: 0 },
    });

    return await {
      type: findAll.type,
      host: findAll.host,
      username: findAll.username,
      password: findAll.password,
      port: findAll.port,
      db_name: findAll.db_name,
    };
  }

  getClientConnection(): Sequelize {
    return this.clientConnection;
  }
}
