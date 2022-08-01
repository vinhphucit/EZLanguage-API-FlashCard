import { Type } from 'class-transformer';
import {IsArray, IsEmail, IsOptional, IsString, Length, MaxLength, ValidateNested} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";
import { KeyValueRequest } from './KeyValueRequest';

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
