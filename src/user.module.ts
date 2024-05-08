import { Module } from '@nestjs/common';
import {  UserController } from './user.controller';
// import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
//   providers : [UserService]
  providers: [{provide: 'DATABASE_NAME' , useValue:'MOON_KHIGHT'}]
})
export class UserModule {}
