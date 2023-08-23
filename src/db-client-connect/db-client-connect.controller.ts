import { Controller, Get, Post, Redirect, Render, Req } from '@nestjs/common';
import { SaveDatabaseClienteService } from './services/save-database-cliente.service';
import { CreateConnectionWithDatabase } from './services/create-connection-with-database.service';
import { Request } from 'express';
import { ListDatabasesService } from './services/list-databases.service';
import { Throttle } from '@nestjs/throttler';

@Controller('db-client-connect')
export class DbClientConnectController {
  constructor(
    private readonly createConnectionWithDatabase: CreateConnectionWithDatabase,
    private readonly saveDatabaseClienteService: SaveDatabaseClienteService,
    private readonly listDatabasesService: ListDatabasesService,
  ) {}

  @Get()
  @Redirect('http://localhost:3008/db-client-connect/saveDatabase', 301)
  home() {
    return {
      url: 'http://localhost:3008/db-client-connect/saveDatabase',
      statusCode: 302,
    };
  }

  @Get('saveDatabase')
  @Render('form-saveDatabase')
  async saveDatabaseGet() {
    return;
  }

  @Post('saveDatabase')
  @Render('message-saveDatabase')
  async saveDatabasePost(@Req() req: Request) {
    try {
      const res = {
        type: req.body.typedatabase,
        host: req.body.hostdatabase,
        port: req.body.portdatabase,
        username: req.body.usernamedatabase,
        password: req.body.passworddatabase,
        database: req.body.namedatabase,
        table_name: req.body.table_name,
        product_columnName: req.body.product_columnName,
        product_columnPrice: req.body.product_columnPrice,
        product_columnQtd: req.body.product_columnQtd,
      };

      await this.saveDatabaseClienteService.saveDataCliente({
        type: res.type,
        host: res.host,
        port: Number(res.port),
        username: res.username,
        password: res.password,
        db_name: res.database,
        table_name: res.table_name,
        product_columnName: res.product_columnName,
        product_columnPrice: res.product_columnPrice,
        product_columnQtd: res.product_columnQtd,
      });

      return res;
    } catch (error) {
      return {
        errorMessage: error.message,
      };
    }
  }

  @Get('databases')
  @Render('databases')
  async databases() {
    const databases = await this.listDatabasesService.execute();
    return {
      databases,
    };
  }

  @Get('send-to-application')
  @Render('send-to-application')
  async sendDataApplicationGET() {
    return;
  }

  //@Throttle(3, 60)
  @Post('send-to-application')
  async sendDataApplicationPOST() {
    return await this.createConnectionWithDatabase.connectDatabase();
  }
}
