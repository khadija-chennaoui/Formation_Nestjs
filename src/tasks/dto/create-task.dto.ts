import { Status } from '../types/task.status.type';
import { Priority } from '../types/task.priority.type';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsEnum(Status, { message: 'Status doit être une valeur valide' })
  status: Status;
 
  @IsString({ message: 'Title doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Title ne doit pas être vide' })
  title: string;
  
  @IsNotEmpty()
  @IsEnum(Priority, { message: 'Priority doit être une valeur valide' })
  priority: Priority;

  @IsString({ message: 'Description doit être une chaîne de caractères' })
  description: string;

  @IsNotEmpty()
  @IsDate({ message: 'La date_debut doit être une date valide' })
  date_debut: Date;
  
  @IsNotEmpty()
  @IsDate({ message: 'La date_dechaence doit être une date valide' })
  date_dechaence: Date;
}
