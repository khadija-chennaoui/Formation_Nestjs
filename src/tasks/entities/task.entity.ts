import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Status } from '../types/task.status.type';
import { Priority } from '../types/task.priority.type';
@Entity()
export class Task {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: String ;

@Column()
description : String ;
  
@Column()
date_debut : Date ;

@Column()
date_dechaence : Date ;

@Column({
  type: 'enum',
  enum: Status,
  default :Status.ToDo
})
status: string

@Column({
  type: 'enum',
  enum: Priority,
  nullable:true
})
priority: string

@ManyToOne(() => User, user => user.tasks)
  user: User;
}
