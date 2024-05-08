import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Optional,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { userDTO } from './dto';
import { UserService } from './user.service';

const USERS = [];
@Controller('/users')
class UserController {
  // @Post("/profile")
  // @HttpCode(HttpStatus.OK)
  // @HttpCode(200)
  // GetProfile(@Req() req:Request, @Res() res:Response  ){
  //     res.status(200).json({
  //         message:"Profile",
  //     })
  // }

  // @Post("/video")
  // addVideo(@Body()  RequestData : Record<string ,any>){
  //     console.log(RequestData);

  //     return {success:true}
  // }

//   @Post('/create')
//   addUser(@Body() UserData: userDTO, @Res() res: Response) {
//     USERS.push(UserData);
//     res.status(200).json({
//       message: 'User Success FUlly add',
//       data: UserData,
//     });
//   }

//   @Get('/get')
//   GetUserData() {
//     return USERS;
//   }

//   @Get('/get/:id')
//   GetUserById(@Param('id') id: number) {
//     return USERS.find((user) => user.id === id);
    
//   }

//   @Put('/update/:id')
//   UpdateUser(@Param('id') id: number, @Body() UpdateUserData: userDTO) {
//     const UserIndex = USERS.findIndex((user) => user.id === id);
    
//     if (!UserIndex) {
//       return;
//     }
//     USERS[UserIndex] = UpdateUserData;
//   }

//   @Delete('/delete/:id')
//   DeleteUser(@Param('id') id: number){
    
//     const UserIndex = USERS.findIndex((user) => user.id === id);
    
//     if (!UserIndex) {
//       return;
//     }
//     USERS.splice(UserIndex,1);
//   }


//   constructor(@Optional() private  UserService : UserService){
//     console.log(this.UserService);

//   }

   constructor(@Inject('DATABASE_NAME') private dbname : string ){
    console.log(dbname);
    
   }
}


export { UserController };
