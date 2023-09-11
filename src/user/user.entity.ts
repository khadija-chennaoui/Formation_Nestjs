// user.entity.ts
import { Entity, Column, ObjectId,ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  email: string;
}
