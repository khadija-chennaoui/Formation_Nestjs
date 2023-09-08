import {IsString, IsNumber,IsBoolean} from 'class-validator'
export class CreateBookDto{
    @IsString()
    readonly nameBook: string;

    @IsNumber()
    readonly nbrPage: number ;

    @IsBoolean()
    readonly free: boolean;
}