import {IsEmail, IsOptional, IsString, Length, MaxLength, MinLength} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";

export class KeyValueRequest {
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()
    public key: string
    @IsString()
    @MinLength(1)
    @IsNotEmptyString()    
    public value: string    
}
