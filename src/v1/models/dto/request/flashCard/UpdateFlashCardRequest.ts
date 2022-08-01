import { Type } from 'class-transformer';
import {IsArray, IsEmail, IsOptional, IsString, Length, MaxLength, MinLength, ValidateNested} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";
import { KeyValueRequest } from './KeyValueRequest';

export class UpdateFlashCardRequest {
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()
    @IsOptional()
    public title: string
    @IsString()
    @MinLength(1)
    @IsNotEmptyString()    
    @IsOptional()
    public description: string   
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => KeyValueRequest)
    @IsOptional()
    imageUrls: KeyValueRequest[];
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => KeyValueRequest)
    @IsOptional()
    soundUrls: KeyValueRequest[];
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => KeyValueRequest)
    @IsOptional()
    references: KeyValueRequest[]; 
}
