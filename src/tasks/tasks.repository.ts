import { DataSource, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findById(id: number): Promise<Task> {
    return await this.taskRepository.findOneBy({ id } );
  }
  async createTask(createtask: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.save(createtask);
  }
  async findAllTask(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  async DeleteTask(id: number): Promise<{ affected?: number }> {
    return await this.taskRepository.delete(id);
  }
}
