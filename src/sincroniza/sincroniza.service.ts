import { Injectable } from '@nestjs/common';
import { CreateSincronizaDto } from './dto/create-sincroniza.dto';
import { UpdateSincronizaDto } from './dto/update-sincroniza.dto';

@Injectable()
export class SincronizaService {
  create(createSincronizaDto: CreateSincronizaDto) {
    return 'This action adds a new sincroniza';
  }

  findAll() {
    return `This action returns all sincroniza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sincroniza`;
  }

  update(id: number, updateSincronizaDto: UpdateSincronizaDto) {
    return `This action updates a #${id} sincroniza`;
  }

  remove(id: number) {
    return `This action removes a #${id} sincroniza`;
  }
}
