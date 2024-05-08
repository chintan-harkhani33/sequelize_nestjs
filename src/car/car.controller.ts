import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('/create')
  @ApiOperation({summary : "SuccessFully Created"})
  async createCar(
    @Body() createCarDto: CreateCarDto,
  ): Promise<{ message: string; data: CreateCarDto } | object> {
    const createdCars = await this.carService.CreateCar(createCarDto );
    return  createdCars;
  }

  //find
  @Get('/find')
  async FIndCars(
  ):Promise<{ message: string; data: Car[] } | object> {
    const  findData = await this.carService.FIndCars();
    return findData;
  }
  @Get('/finddata/:id')
  async FindById(
    @Param('id') id: number,
  ): Promise<object | { message: string; data: Car}> {
   return await this.carService.findData(id);
  //  return dataIdFind;

  }
  
  @Put('/update/:id')
   async UpdateCar(@Param('id') id : number , @Body() updateCarDto: UpdateCarDto): Promise<object | { message: string; data: Car}> {
      const updateCar = await this.carService.UpdateCar(id , updateCarDto);
      return updateCar;
   }

   @Delete('/delete/:id')
   async DeleteCar(@Param('id') id : number ):Promise<object | {message : string ; data : Car}>{
     const DeleteData = await this.carService.DeleteData(id);

     return DeleteData;
   }
  }
