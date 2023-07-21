import { Module } from '@nestjs/common';
import { DbClienteService } from './db-cliente.service';
import { DbClienteController } from './db-cliente.controller';

@Module({
  controllers: [DbClienteController],
  providers: [DbClienteService]
})
export class DbClienteModule {}
