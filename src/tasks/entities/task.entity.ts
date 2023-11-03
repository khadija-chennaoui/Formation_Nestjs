import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Task {
@PrimaryGeneratedColumn()
id: number;

@Column()
title : String ;

@Column()
description : String ;
  
@Column()
date_debut : Date ;

@Column()
date_dechaence : Date ;

@Column({ type: 'enum', enum: ['À faire', 'En cours', 'Terminé'] })
status: 'À faire' | 'En cours' | 'Terminé';

@Column({ type: 'enum', enum: ['Low', 'Medium', 'High'] })
priority: 'Low' | 'Medium' | 'High';

@ManyToOne(() => User, user => user.tasks)
  user: User;
}
