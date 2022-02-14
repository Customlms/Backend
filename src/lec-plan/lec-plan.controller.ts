import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecPlanService } from './lec-plan.service';
import { CreateLecPlanDto } from './dto/create-lec-plan.dto';
import { UpdateLecPlanDto } from './dto/update-lec-plan.dto';

@Controller('lec-plan')
export class LecPlanController {
  constructor(private readonly lecPlanService: LecPlanService) {}

  @Post()
  create(@Body() createLecPlanDto: CreateLecPlanDto) {
    return this.lecPlanService.create(createLecPlanDto);
  }

  @Get()
  findAll() {
    return this.lecPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecPlanDto: UpdateLecPlanDto) {
    return this.lecPlanService.update(+id, updateLecPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecPlanService.remove(+id);
  }
}
