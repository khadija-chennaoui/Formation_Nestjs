import { Status } from "../types/task.status.type";
import { Priority } from '../types/task.priority.type';
import { IsEnum , IsNotEmpty } from 'class-validator';
export class CreateTaskDto {
    @IsNotEmpty()
  
    @IsEnum(Status)
    status:Status;
    title: string;
    @IsEnum(Priority)
    priority: Priority;
    description: string;
    date_debut: Date;
    date_dechaence : Date;
   
 
}

