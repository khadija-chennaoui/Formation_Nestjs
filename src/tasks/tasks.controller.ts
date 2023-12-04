import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/AddTask')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('/AllTasks')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/GetOneTask/:id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(+id);
  }
  @Get('/GetOneByTitle/:title')
  filtre(@Param('title') title: string) {
    return this.tasksService.filtre(title);
  }

  @Patch('/UpdateTask/:id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete('/DeletTask/:id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(+id);
  }
}

