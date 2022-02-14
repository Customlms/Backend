import { Test, TestingModule } from '@nestjs/testing';
import { LecInfoController } from './lec-info.controller';
import { LecInfoService } from './lec-info.service';

describe('LecInfoController', () => {
  let controller: LecInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecInfoController],
      providers: [LecInfoService],
    }).compile();

    controller = module.get<LecInfoController>(LecInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
