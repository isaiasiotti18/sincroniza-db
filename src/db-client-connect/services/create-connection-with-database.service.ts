import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { DbClientConnectDto } from '../dto/DbClientConnect.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseClient } from '../database-client.entity';
import { QueryTypes } from 'sequelize';

@Injectable()
export class CreateConnectionWithDatabase {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,

    private clientConnection: Sequelize,
  ) {}

  async connectDatabase(): Promise<any> {
    const connectionData = await this.getConnectionDataFromDatabase();

    const connection = (this.clientConnection = await new Sequelize({
      dialect: connectionData.type, // Substitua pelo dialeto correto do banco de dados do cliente (por exemplo, mysql, postgres, etc)
      host: connectionData.host,
      username: connectionData.username,
      password: connectionData.password,
      database: connectionData.db_name,
      port: connectionData.port,
    }));

    await connection.authenticate();

    const result = await connection.query('SELECT * FROM produtos', {
      type: QueryTypes.SELECT,
    });

    console.log(result);

    await connection.close();
  }

  private async getConnectionDataFromDatabase(): Promise<DbClientConnectDto> {
    const database = await this.databaseClientModel.findOne({
      where: { id: 0 },
    });

    return await {
      type: database.type,
      host: database.host,
      username: database.username,
      password: database.password,
      port: database.port,
      db_name: database.db_name,
    };
  }

  getClientConnection(): Sequelize {
    return this.clientConnection;
  }
}
