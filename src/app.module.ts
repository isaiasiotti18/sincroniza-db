import { Module } from '@nestjs/common';
import { SincronizaModule } from './sincroniza/sincroniza.module';
import { DbClienteModule } from './db-cliente/db-cliente.module';

@Module({
  imports: [SincronizaModule, DbClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
