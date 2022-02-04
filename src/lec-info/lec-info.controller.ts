import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecInfoService } from './lec-info.service';
import { CreateLecInfoDto } from './dto/create-lec-info.dto';
import { UpdateLecInfoDto } from './dto/update-lec-info.dto';

@Controller('lec-info')
export class LecInfoController {
  constructor(private readonly lecInfoService: LecInfoService) {}

  @Post()
  create(@Body() createLecInfoDto: CreateLecInfoDto) {
    return this.lecInfoService.create(createLecInfoDto);
  }

  @Get()
  findAll() {
    return this.lecInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecInfoDto: UpdateLecInfoDto) {
    return this.lecInfoService.update(+id, updateLecInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecInfoService.remove(+id);
  }
}
