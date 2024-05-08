import { Sequelize } from 'sequelize-typescript';
// import { Car } from 'src/car/entities/car.entity';

 const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'nestjs_demo',
      });
    //   sequelize.addModels([Car]);
      await sequelize.sync().then(() => {
          console.log("DataBase SuccessFully Connected....");
      }).catch((err) => {
          console.log("Error >>>>>>>>>>>.", err.message);
      });
      return sequelize;
    },
  },
];

export {databaseProviders}