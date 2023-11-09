import { DataSource, Repository} from "typeorm";
import { Task } from "./entities/task.entity";
import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TasksRepository {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
      ) {}
   
    async findByName(id: number): Promise<Task>{
        return await this.taskRepository.findOne({where: { id }})
    }
    async creatTask(createtask:CreateTaskDto) {
        return await this.taskRepository.save(createtask);
    }
    async findAllTask(){
        return this.taskRepository.find()
    }
    

}
