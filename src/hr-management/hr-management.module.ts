import { Module } from '@nestjs/common';
import { HrManagementService } from './hr-management.service';
import { HrManagementController } from './hr-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrManagement } from './entities/hr-management.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([HrManagement])
  ],
  controllers: [HrManagementController],
  providers: [HrManagementService]
})
export class HrManagementModule {}
