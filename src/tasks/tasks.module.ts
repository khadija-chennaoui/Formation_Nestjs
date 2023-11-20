import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import LoggerAdapter from '../core/logger.adapter';

@Module({
  imports : [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService,TasksRepository, LoggerAdapter],
  exports: [TasksService]
})
export class TasksModule {}
