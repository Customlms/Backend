import { Body, Controller, Get } from '@nestjs/common';
import { HrManagementService } from './hr-management.service';
import { FindStdCodeDto } from './dto/find-stdCode.dto'

@Controller('hr-management')
export class HrManagementController {
  constructor(private readonly hrManagementService: HrManagementService) {
    this.hrManagementService = hrManagementService;
  }

  //ํ๋ฒ ์กฐํ
  @Get()
  async findStdCode(@Body() FindStdCodeDto: FindStdCodeDto): Promise<number> {
    return await this.hrManagementService.findStdCode(FindStdCodeDto);
  }
}
