import { DbClientConnectDto } from '../dto/DbClientConnect.dto';
import { Injectable } from '@nestjs/common';
import { DatabaseClient } from '../database-client.entity';
import { InjectModel } from '@nestjs/sequelize';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable()
export class SaveDatabaseClienteService {
  constructor(
    @InjectModel(DatabaseClient)
    private databaseClientModel: typeof DatabaseClient,
  ) {}

  async saveDataCliente(
    dbclientConnectDto: DbClientConnectDto,
  ): Promise<DbClientConnectDto> {
    const {
      host,
      password,
      port,
      type,
      username,
      db_name,
      table_name,
      product_columnName,
      product_columnPrice,
      product_columnQtd,
    } = dbclientConnectDto;

    //verificar banco de dados
    const dbNameExists = await this.databaseClientModel.findOne({
      where: { db_name },
    });

    if (dbNameExists) {
      throw new Error('Banco de dados já cadastrado.');
    }

    const create = await this.databaseClientModel.create({
      id: getRandomIntInclusive(999, 9999) + getRandomIntInclusive(999, 9999),
      host,
      password,
      port,
      type,
      username,
      db_name,
      table_name,
      product_columnName,
      product_columnPrice,
      product_columnQtd,
    });

    const returnCreate = {
      id: create.id,
      host: create.host,
      password: create.password,
      port: create.port,
      type: create.type,
      username: create.username,
      db_name: create.db_name,
      table_name: create.table_name,
      product_columnName: create.product_columnName,
      product_columnPrice: create.product_columnPrice,
      product_columnQtd: create.product_columnQtd,
    };

    return returnCreate;
  }
}
