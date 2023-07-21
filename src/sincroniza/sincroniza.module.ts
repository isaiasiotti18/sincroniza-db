import { Module } from '@nestjs/common';
import { SincronizaService } from './sincroniza.service';
import { SincronizaController } from './sincroniza.controller';

@Module({
  controllers: [SincronizaController],
  providers: [SincronizaService]
})
export class SincronizaModule {}
