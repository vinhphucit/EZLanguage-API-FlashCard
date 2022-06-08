import {IsEmail, IsOptional, IsString, Length, MaxLength} from 'class-validator';
import {IsNotEmptyString} from "../../../../utils/validation/IsNotEmptyString";

export class UpdateCategoryRequest {
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()
    @IsOptional()
    public title: string
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()    
    @IsOptional()
    public description: string    
    @IsString()
    @Length(1, 50)
    @IsNotEmptyString()    
    @IsOptional()
    public parentCategoryId: string   
    @IsString()
    @Length(1, 100)
    @IsNotEmptyString()    
    @IsOptional()
    public imageUrl: string   
}
