import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class DatabaseClient extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  active: boolean;

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

  @Column
  table_name: string;

  @Column
  product_columnName: string;

  @Column
  product_columnPrice: number;

  @Column
  product_columnQtd: number;
}
