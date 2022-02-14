import { PartialType } from '@nestjs/swagger';
import { CreateLecPlanDto } from './create-lec-plan.dto';

export class UpdateLecPlanDto extends PartialType(CreateLecPlanDto) {}
