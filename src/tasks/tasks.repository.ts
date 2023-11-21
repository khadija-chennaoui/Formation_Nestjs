import { DataSource, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  async deleteTask(id: number): Promise<{ affected?: number }> {
    return await this.taskRepository.delete(id);
  }
  async udateTask(id:number,updateTaskDto:UpdateTaskDto){
   return await this.taskRepository.update(id,{
    status: updateTaskDto.status,
    title: updateTaskDto.title,
    priority: updateTaskDto.priority,
    description: updateTaskDto.description,
    date_debut: updateTaskDto.date_debut,
    date_dechaence: updateTaskDto.date_dechaence,
   })
  }
}
