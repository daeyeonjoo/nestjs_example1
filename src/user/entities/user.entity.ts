import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { BOOLEAN, STRING } from 'sequelize';

@Table
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    type: STRING(50),
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: STRING(50),
    allowNull: false,
  })
  lastName: string;

  @Column(BOOLEAN)
  isActive: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
