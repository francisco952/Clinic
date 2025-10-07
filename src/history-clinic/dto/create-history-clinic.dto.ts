import { IsDate, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateHistoryClinicDto {
    @IsNotEmpty()
    @IsString()
    idPacient:string;

    @IsNotEmpty()
    @IsString()
    idDoctor:string;

    @IsNotEmpty()
    date:Date;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(45)
    reasonConsultation:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    status:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    place:string;

    
}
