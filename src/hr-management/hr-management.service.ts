import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HrManagement } from './entities/hr-management.entity';
import { FindStdCodeDto } from './dto/find-stdCode.dto'

@Injectable()
export class HrManagementService {
  constructor(
    @InjectRepository(HrManagement)
    private readonly hrManagementRepository: Repository<HrManagement>
  ) {
    this.hrManagementRepository = hrManagementRepository;
  }

  async findStdCode( FindStdCodeDto: FindStdCodeDto): Promise<number> {
    const { position, name, birthday, addmission } = FindStdCodeDto;

    // select stdCode from hr_management where name = name and posititon = position and birthday = birthday and addmission = addmission;
    const stdcode = await this.hrManagementRepository.find({
      select: ['stdCode'],
      where:[
        {
          position: position,
          name: name,
          birthday: birthday,
          addmission: addmission
        }
      ]
    })
    return stdcode[0].stdCode;
  }
}
