import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table
export class DatabaseClient extends Model {
  @Column
  type: string;

  @Column
  host: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  port: number;
}
