import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Req,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
class CarService {
  constructor(
    @InjectModel(Car)
    private CarModel: typeof Car,
  ) {}

  //create
  async  CreateCar(
    CarData: CreateCarDto,
  ): Promise<{ message: string; data: CreateCarDto } | object> {
    try {
    
      const { CarNumber, CarName, CarModels } = CarData;
      //check if all fields are present
      if (!CarNumber || !CarName || !CarModels) {
        throw new Error ('Car is not created. Required fields are missing.')
      }

      //check if car already exists
      const existingCar = await this.CarModel.findOne({ where: { CarName: CarData.CarName } });
      if (existingCar) {
        throw new BadRequestException('A car with this name already exists.');
      }

      const newData = await this.CarModel.create<Car>(CarData);
      return {
        status: HttpStatus.OK,
        message: 'Cars found successfully',
        data: newData,
      };
    } catch (error) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create car.',
        error: error.message,
      });
    }
  }

  //find data
  async FIndCars(): Promise<object | { message: string; data: Car[] }> {
    try {
      const Cars = await this.CarModel.findAll<Car>();
      //check if data is present
      if (!Cars.length) {
        throw new Error ('Car is not created')
      }
      return {
        status: HttpStatus.OK,
        message: 'Cars found successfully',
        data: Cars,
      };
    } catch (error) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create car.',
        error: error.message, 
      });
    }
  }

  async findData (id: number): Promise<object | { message: string; data: Car }>{

     try {
      const findOne = await this.CarModel.findByPk<Car>(id);
      if (!findOne) {
        throw new Error ('Car is not found');
      }
      return {
        status: HttpStatus.OK,
        message: 'Cars found successfully',
        data: findOne,
      }
     } catch (error) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create car.',
        error: error.message, 
      });
     }
  }; 
  
// update data
async UpdateCar(id: number,  updateCarDto: UpdateCarDto): Promise<object | { message: string; data: Car }>{
   try {
    const findOne = await this.CarModel.findByPk<Car>(id);
    if (!findOne) {
      throw new Error ('Car Data Not Found');
    }
    const updateCar = await this.CarModel.update<Car>(updateCarDto, { where: { id: id } });

    return {
      status: HttpStatus.OK,
      message: 'Car updated successfully',
      data: updateCar,
    }
   } catch (error) {
    throw new BadRequestException({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Failed to create car.',
      error: error.message, 
    });
   }
}

async DeleteData(id : number) :Promise<object |{message : string , data : Car}> {
  try {
    const findOne = await this.CarModel.findByPk<Car>(id);
    if (!findOne) {
      throw new Error ('Car Data Not Found');
      }   
      await this.CarModel.destroy({ where: { id: id } });
      return{
        status: HttpStatus.OK,
        message: 'Car deleted successfully',
        data: findOne,
    }
  } catch (error) {
    throw new BadRequestException({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Failed to create car.',
      error: error.message, 
    });
  }
}
}


export { CarService };
