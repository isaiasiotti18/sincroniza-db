import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { SaveDatabaseClienteService } from './services/save-database-cliente.service';
import { DbClientConnectDto } from './dto/DbClientConnect.dto';
import { CreateConnectionWithDatabase } from './services/create-connection-with-database.service';
import { SelectDatasDbClientService } from './services/select-datas-db-client.service';
import { Request } from 'express';

@Controller('db-client-connect')
export class DbClientConnectController {
  constructor(
    private readonly createConnectionWithDatabase: CreateConnectionWithDatabase,
    private readonly saveDatabaseClienteService: SaveDatabaseClienteService,
  ) {}

  // @Post('create')
  // async saveDataClient(
  //   @Body() dto: DbClientConnectDto,
  // ): Promise<DbClientConnectDto> {
  //   try {
  //     const saveDataCliente =
  //       await this.saveDatabaseClienteService.saveDataCliente(dto);

  //     return await saveDataCliente;
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }

  @Get('create')
  @Render('create')
  async sendGet(@Req() req: Request) {
    return;
  }

  @Post('create')
  @Render('res')
  async sendPost(@Req() req: Request) {
    try {
      const res = {
        type: req.body.typedatabase,
        host: req.body.hostdatabase,
        port: req.body.portdatabase,
        username: req.body.usernamedatabase,
        password: req.body.passworddatabase,
        database: req.body.namedatabase,
      };

      await this.saveDatabaseClienteService.saveDataCliente({
        type: res.type,
        host: res.host,
        port: Number(res.port),
        username: res.username,
        password: res.password,
        db_name: res.database,
      });

      return res;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('connect')
  async connectDatabaseCliente() {
    return await this.createConnectionWithDatabase.connectDatabase();
  }
}
