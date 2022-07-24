import {IsEmail, IsOptional, IsString, Length, MaxLength} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";

export class CreateFlashCardRequest {
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()
    public title: string
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()    
    public description: string
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()    
    public categoryId: string    
}
