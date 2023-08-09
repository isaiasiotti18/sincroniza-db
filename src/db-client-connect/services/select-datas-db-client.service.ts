import { Injectable } from '@nestjs/common';
import { CreateConnectionWithDatabase } from './create-connection-with-database.service';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SelectDatasDbClientService {
  constructor(
    private readonly createConnectionWithDatabase: CreateConnectionWithDatabase,
  ) {}

  async performSomeQuery(): Promise<any> {
    const clientConnection: Sequelize =
      this.createConnectionWithDatabase.getClientConnection();

    // Agora você pode utilizar a conexão com o banco de dados do cliente para fazer consultas, atualizações, etc.
    // Por exemplo:
    const result = await clientConnection.query('SELECT * FROM produtos', {
      type: QueryTypes.SELECT,
    });
    return result;
  }
}
