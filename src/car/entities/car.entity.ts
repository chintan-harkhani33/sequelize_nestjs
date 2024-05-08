import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class Car extends Model<Car> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  CarName: string;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  CarNumber: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  CarModels: string;
}

export { Car };
