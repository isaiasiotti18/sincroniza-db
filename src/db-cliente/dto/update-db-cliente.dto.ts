import { PartialType } from '@nestjs/mapped-types';
import { CreateDbClienteDto } from './create-db-cliente.dto';

export class UpdateDbClienteDto extends PartialType(CreateDbClienteDto) {}
