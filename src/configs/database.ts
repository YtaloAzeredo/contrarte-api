import { DataSourceOptions } from 'typeorm'

export const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: ['src/models/*'],
  migrations: ['src/database/migrations/*'],

  logging: false,
  synchronize: true
}
