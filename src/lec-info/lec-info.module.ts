import { Module } from '@nestjs/common';
import { LecInfoService } from './lec-info.service';
import { LecInfoController } from './lec-info.controller';

@Module({
  controllers: [LecInfoController],
  providers: [LecInfoService]
})
export class LecInfoModule {}
