import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SincronizaService } from './sincroniza.service';
import { CreateSincronizaDto } from './dto/create-sincroniza.dto';
import { UpdateSincronizaDto } from './dto/update-sincroniza.dto';

@Controller('sincroniza')
export class SincronizaController {
  constructor(private readonly sincronizaService: SincronizaService) {}

  @Post()
  create(@Body() createSincronizaDto: CreateSincronizaDto) {
    return this.sincronizaService.create(createSincronizaDto);
  }

  @Get()
  findAll() {
    return this.sincronizaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sincronizaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSincronizaDto: UpdateSincronizaDto) {
    return this.sincronizaService.update(+id, updateSincronizaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sincronizaService.remove(+id);
  }
}
