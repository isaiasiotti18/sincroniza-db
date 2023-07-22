import { Controller } from '@nestjs/common';
import { DbClientConnectService } from './db-client-connect.service';

@Controller('db-client-connect')
export class DbClientConnectController {
  constructor(
    private readonly dbClientConnectService: DbClientConnectService,
  ) {}
}
