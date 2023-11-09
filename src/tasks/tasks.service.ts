import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepository,
  ){}
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try{
      return await this.tasksRepository.creatTask(createTaskDto)
    }catch(error){
      throw new Error("error")
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

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
