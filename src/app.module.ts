import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from './subject/subject.module';
import { LecInfoModule } from './lec-info/lec-info.module';
import { LecPlanModule } from './lec-plan/lec-plan.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SubjectModule, LecInfoModule, LecPlanModule, BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
