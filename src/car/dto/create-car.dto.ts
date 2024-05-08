import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
    @IsString()
    @IsNotEmpty()
    CarName: string;

    @IsNumber()
    @IsNotEmpty()
    CarNumber : Number;

    @IsString()
    @IsNotEmpty()
    CarModels : string;
}
