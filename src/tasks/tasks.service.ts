import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}
  async create(createTaskDto: CreateTaskDto) {
    return await this.tasksRepository.createTask(createTaskDto);
  }

  async findAll() {
    try {
      return await this.tasksRepository.findAllTask();
    } catch (error) {
      throw new Error('No Task There is no pending task');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return await this.tasksRepository.DeleteTask(id);
  }
}
