import { Test, TestingModule } from '@nestjs/testing';
import { DbClienteController } from './db-cliente.controller';
import { DbClienteService } from './db-cliente.service';

describe('DbClienteController', () => {
  let controller: DbClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbClienteController],
      providers: [DbClienteService],
    }).compile();

    controller = module.get<DbClienteController>(DbClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
