import {IsString, IsNumber,IsBoolean} from 'class-validator'
export class CreateBookDto{
    @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
    readonly nameBook: string;

    @IsNumber()
    readonly nbrPage: number ;

    @IsBoolean()
    readonly free: boolean;
}