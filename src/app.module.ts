import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
// import { DatabaseModule } from './db.connection';
import { CarModule } from './car/car.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DBConnection } from './db.connection';
import { SchoolModule } from './school/school.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [SequelizeModule.forRoot(DBConnection) ,UserModule ,CarModule, SchoolModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
