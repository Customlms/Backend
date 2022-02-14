import { Module } from '@nestjs/common';
import { LecPlanService } from './lec-plan.service';
import { LecPlanController } from './lec-plan.controller';

@Module({
  controllers: [LecPlanController],
  providers: [LecPlanService]
})
export class LecPlanModule {}
