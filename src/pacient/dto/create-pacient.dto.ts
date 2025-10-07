import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePacientDto {
    
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

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(15)
    phone: string;

    @IsString()
    @IsOptional()
    @MinLength(7)
    @MaxLength(15)
    directions:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(2)
    bloodType:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(2)
    age:string;
}
