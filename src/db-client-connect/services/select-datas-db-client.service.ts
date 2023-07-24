import { Injectable } from '@nestjs/common';
import { DbClientConnectService } from './db-client-connect.service';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SelectDatasDbClientService {
  constructor(
    private readonly dbClientConnectService: DbClientConnectService,
  ) {}

  async performSomeQuery(): Promise<any> {
    const clientConnection: Sequelize =
      this.dbClientConnectService.getClientConnection();

    // Agora você pode utilizar a conexão com o banco de dados do cliente para fazer consultas, atualizações, etc.
    // Por exemplo:
    const result = await clientConnection.query(
      'SELECT * FROM tabela_do_cliente',
      { type: QueryTypes.SELECT },
    );
    return result;
  }
}
