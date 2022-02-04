import { Injectable } from '@nestjs/common';
import { CreateLecInfoDto } from './dto/create-lec-info.dto';
import { UpdateLecInfoDto } from './dto/update-lec-info.dto';

@Injectable()
export class LecInfoService {
  create(createLecInfoDto: CreateLecInfoDto) {
    return 'This action adds a new lecInfo';
  }

  findAll() {
    return `This action returns all lecInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecInfo`;
  }

  update(id: number, updateLecInfoDto: UpdateLecInfoDto) {
    return `This action updates a #${id} lecInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecInfo`;
  }
}
