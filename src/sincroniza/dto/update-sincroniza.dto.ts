import { PartialType } from '@nestjs/mapped-types';
import { CreateSincronizaDto } from './create-sincroniza.dto';

export class UpdateSincronizaDto extends PartialType(CreateSincronizaDto) {}
