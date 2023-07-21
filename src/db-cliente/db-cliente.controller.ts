import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbClienteService } from './db-cliente.service';
import { CreateDbClienteDto } from './dto/create-db-cliente.dto';
import { UpdateDbClienteDto } from './dto/update-db-cliente.dto';

@Controller('db-cliente')
export class DbClienteController {
  constructor(private readonly dbClienteService: DbClienteService) {}

  @Post()
  create(@Body() createDbClienteDto: CreateDbClienteDto) {
    return this.dbClienteService.create(createDbClienteDto);
  }

  @Get()
  findAll() {
    return this.dbClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dbClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDbClienteDto: UpdateDbClienteDto) {
    return this.dbClienteService.update(+id, updateDbClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dbClienteService.remove(+id);
  }
}
