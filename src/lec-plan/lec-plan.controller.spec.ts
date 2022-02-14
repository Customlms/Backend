import { Test, TestingModule } from '@nestjs/testing';
import { LecPlanController } from './lec-plan.controller';
import { LecPlanService } from './lec-plan.service';

describe('LecPlanController', () => {
  let controller: LecPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecPlanController],
      providers: [LecPlanService],
    }).compile();

    controller = module.get<LecPlanController>(LecPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
