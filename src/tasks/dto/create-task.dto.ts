import { IsEnum } from 'class-validator';
import { Status } from "../types/task.status.type";


export class CreateTaskDto {
    // @IsEnum([])
    status:Status;
    
    title: string;
    description: string;

}

