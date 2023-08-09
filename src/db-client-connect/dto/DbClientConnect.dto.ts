import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DbClientConnectDto {
  @IsString()
  @IsNotEmpty()
  type:
    | 'mysql'
    | 'postgres'
    | 'sqlite'
    | 'mariadb'
    | 'mssql'
    | 'db2'
    | 'snowflake'
    | 'oracle';

  @IsString()
  @IsNotEmpty()
  host: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  port: number;

  @IsString()
  @IsNotEmpty()
  db_name: string;
}
