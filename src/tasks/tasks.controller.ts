import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IServiceResponse } from 'src/response/service.response';
import { Task } from './entities/task.entity';
import { SuccesResponse } from 'src/response';
import LoggerAdapter from 'core/logger/logger.adapter';

@Controller('tasks')
export class TasksController {
  private context ; 
  constructor(private readonly tasksService: TasksService ,  private readonly logger: LoggerAdapter)  {
    this.context = this.constructor.name;
  }

  @Post('/AddTask')
  async create(@Body() createTaskDto: CreateTaskDto) : Promise<IServiceResponse< Task>> {
    // return this.tasksService.create(createTaskDto);
   try{
      this.logger.info('Task created :)',this.context)
      const task = await this.tasksService.create(createTaskDto)
       return SuccesResponse(task)
    }catch(error){
      // throw new Error("🐞 error")
      this.logger.error(error, this.context);
    }
  }

  @Get('/AllTasks')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/GetOneTask/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch('/UpdateTask/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete('/DeletTask/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
