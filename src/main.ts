import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const Boostrapp = async() =>{
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
    console.log("server is Running on http://localhost:3000");
}

Boostrapp()