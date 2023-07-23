import { DbClientConnectDto } from './dto/DbClientConnect.dto';
import { Injectable } from '@nestjs/common';
import { DatabaseClient } from './database-client.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DbClientConnectService {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,
  ) {}

  async saveDataCliente(
    dbclientConnectDto: DbClientConnectDto,
  ): Promise<DbClientConnectDto> {
    const { id, host, password, port, type, username, db_name } =
      dbclientConnectDto;

    const create = await this.databaseClientModel.create({
      id,
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

  connectDatabase(): Promise<void> {
    return;
  }

  readTable(): Promise<void> {
    return;
  }
}
