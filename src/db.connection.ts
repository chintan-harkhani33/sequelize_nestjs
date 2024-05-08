import { SequelizeModuleOptions } from '@nestjs/sequelize';

const DBConnection: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'nestjs_demo',
  autoLoadModels: true,
  synchronize: true, // set to false in production
};

export  {DBConnection};