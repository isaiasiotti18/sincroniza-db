import {
  Column,
  Table,
  Model,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class DatabaseClient extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  type:
    | 'mysql'
    | 'postgres'
    | 'sqlite'
    | 'mariadb'
    | 'mssql'
    | 'db2'
    | 'snowflake'
    | 'oracle';

  @Column
  host: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  port: number;

  @Column
  db_name: string;
}
