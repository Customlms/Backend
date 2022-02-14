import { Injectable } from '@nestjs/common';
import { CreateLecPlanDto } from './dto/create-lec-plan.dto';
import { UpdateLecPlanDto } from './dto/update-lec-plan.dto';

@Injectable()
export class LecPlanService {
  create(createLecPlanDto: CreateLecPlanDto) {
    return 'This action adds a new lecPlan';
  }

  findAll() {
    return `This action returns all lecPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecPlan`;
  }

  update(id: number, updateLecPlanDto: UpdateLecPlanDto) {
    return `This action updates a #${id} lecPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecPlan`;
  }
}
