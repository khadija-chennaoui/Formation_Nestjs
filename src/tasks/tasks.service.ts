import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TasksRepository } from './tasks.repository';
import LoggerAdapter from '../../core/logger/logger.adapter';

@Injectable()
export class TasksService {
  private context; 
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly logger: LoggerAdapter,
    
  ) {
    this.context = this.constructor.name;
  }
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try{
      this.logger.info('Tesk created :)',this.context)
      return await this.tasksRepository.createTask(createTaskDto)
    }catch(error){
      // throw new Error("🐞 error")
      this.logger.error(error, this.context);
    }
      
  }

  async findAll() {
    try{
      return await this.tasksRepository.findAllTask()
    }catch(error){
      throw new Error("No Task There is no pending task")
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return await this.tasksRepository.DeleteTask(id)
  }
}
