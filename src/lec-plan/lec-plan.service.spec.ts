import { Test, TestingModule } from '@nestjs/testing';
import { LecPlanService } from './lec-plan.service';

describe('LecPlanService', () => {
  let service: LecPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LecPlanService],
    }).compile();

    service = module.get<LecPlanService>(LecPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
