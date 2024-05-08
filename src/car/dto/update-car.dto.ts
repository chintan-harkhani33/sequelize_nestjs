import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @IsOptional()
  @IsString()
  CarName?: string;
  @IsOptional()
  @IsNumber()
  CarNumber?: Number;
  @IsOptional()
  @IsString()
  CarModels?: string;
}
