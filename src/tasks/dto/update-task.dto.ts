import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import { Status } from '../types/task.status.type';
import { Priority } from '../types/task.priority.type';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  @IsEnum(Status, { message: 'Status doit être une valeur valide' })
  status?: Status;

  @IsOptional()
  @IsString({ message: 'Title doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Title ne doit pas être vide' })
  title?: string;

  @IsOptional()
  @IsEnum(Priority, { message: 'Priority doit être une valeur valide' })
  priority?: Priority;

  @IsOptional()
  @IsString({ message: 'Description doit être une chaîne de caractères' })
  description?: string;

  @IsOptional()
  @IsDate({ message: 'La date_debut doit être une date valide' })
  date_debut?: Date;

  @IsOptional()
  @IsDate({ message: 'La date_dechaence doit être une date valide' })
  date_dechaence?: Date;
}
