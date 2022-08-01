import { Type } from 'class-transformer';
import {IsArray, IsEmail, IsIn, IsNumber, IsOptional, IsString, Length, Max, MaxLength, Min, MinLength, ValidateNested} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";
import { KeyValueRequest } from './KeyValueRequest';

export class UpdateFlashcardRequest {
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
    @IsNumber()
    @Min(1)
    @Max(5)
    @IsOptional()
    public masteredLevel: number   
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
