import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"
@Entity()
export class Book {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    nameBook: string;
    
    @Column()
    nbrPage: number ;

    @Column()
    free : boolean ;
 
}