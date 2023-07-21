import { Test, TestingModule } from '@nestjs/testing';
import { DbClienteService } from './db-cliente.service';

describe('DbClienteService', () => {
  let service: DbClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbClienteService],
    }).compile();

    service = module.get<DbClienteService>(DbClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
