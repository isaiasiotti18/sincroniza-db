import { Body, Controller, Post } from '@nestjs/common';
import { DbClientConnectService } from './db-client-connect.service';
import { DbClientConnectDto } from './dto/DbClientConnect.dto';

@Controller('db-client-connect')
export class DbClientConnectController {
  constructor(
    private readonly dbClientConnectService: DbClientConnectService,
  ) {}

  @Post('create')
  async saveDataClient(
    @Body() dto: DbClientConnectDto,
  ): Promise<DbClientConnectDto> {
    const saveDataCliente = await this.dbClientConnectService.saveDataCliente(
      dto,
    );

    return await dto;
  }
}
