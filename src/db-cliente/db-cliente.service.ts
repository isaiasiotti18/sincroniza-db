import { Injectable } from '@nestjs/common';
import { CreateDbClienteDto } from './dto/create-db-cliente.dto';
import { UpdateDbClienteDto } from './dto/update-db-cliente.dto';

@Injectable()
export class DbClienteService {
  create(createDbClienteDto: CreateDbClienteDto) {
    return 'This action adds a new dbCliente';
  }

  findAll() {
    return `This action returns all dbCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dbCliente`;
  }

  update(id: number, updateDbClienteDto: UpdateDbClienteDto) {
    return `This action updates a #${id} dbCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} dbCliente`;
  }
}
