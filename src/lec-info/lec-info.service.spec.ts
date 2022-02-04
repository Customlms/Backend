import { Test, TestingModule } from '@nestjs/testing';
import { LecInfoService } from './lec-info.service';

describe('LecInfoService', () => {
  let service: LecInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecInfoService],
    }).compile();

    service = module.get<LecInfoService>(LecInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
