import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TasksRepository } from './tasks.repository';
import { SuccesResponse, BadResponse, ErrorResponse } from '../response/index';
import { IServiceResponse } from 'src/response/service.response';
import LoggerAdapter from 'src/core/logger.adapter';

@Injectable()
export class TasksService {
  private context;
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly logger: LoggerAdapter,
  ) {
    this.context = this.constructor.name;
  }
  async create(createTaskDto: CreateTaskDto): Promise<IServiceResponse<Task>> {
    try {
      const task = await this.tasksRepository.createTask(createTaskDto);
      this.logger.info('Task created :)', this.context);
      return SuccesResponse(task);
    } catch (error) {
      this.logger.error(error, this.context);
    }
  }

  async findAll() {
    try {
      const alltask = await this.tasksRepository.findAllTask();
      this.logger.info('All Task', this.context);
      return SuccesResponse(alltask);
    } catch (error) {
      this.logger.error(error, this.context);
    }
  }

  async findOne(id: number) {
    try {
      const onetask = await this.tasksRepository.findById(id);
      this.logger.info('One Task', this.context);
      return SuccesResponse(onetask);
    } catch (error) {
      this.logger.error(error, this.context);
    }
  }
  async filtre(title: string) {
    try {
      const onetask = await this.tasksRepository.findByTitle(title);
      this.logger.info('Search by title done', this.context);
      return SuccesResponse(onetask);
    } catch (error) {
      this.logger.error(error, this.context);
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try{
      const updatetask = await this.tasksRepository.udateTask(id,{
        status: updateTaskDto.status,
        title: updateTaskDto.title,
        priority: updateTaskDto.priority,
        description: updateTaskDto.description,
        date_debut: updateTaskDto.date_debut,
        date_dechaence: updateTaskDto.date_dechaence,
      })
      this.logger.info('Task updated',this.context)
      return SuccesResponse(updatetask)
    }catch(error){
      this.logger.error(error, this.context)
    }
   

  }

  async remove(id: number) {
    try {
      let task = await this.tasksRepository.findById(id);
      if (task) {
        const deletetask = await this.tasksRepository.deleteTask(id);
        this.logger.info(`Task deleted : ${id}`, this.context);
        return SuccesResponse(deletetask);
      } else this.logger.info(`id:${id} does not exist`, this.context);
    } catch (error) {
      this.logger.error(error, this.context);
    }
  }
}


