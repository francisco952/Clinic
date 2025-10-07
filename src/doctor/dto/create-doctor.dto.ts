import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDoctorDto {
@IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(10)
    identification:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    name:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    speciality:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    range:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(15)
    phone: string;

    @IsString()
    @IsOptional()
    directions:string;
}
