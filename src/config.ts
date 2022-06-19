import { registerAs } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config as setConfig } from 'dotenv';
import { join } from 'path';

setConfig({ path: '.env' });

export default registerAs('database', () => {
  return config;
});
console.log('password: ', process.env.DB_PASSWORD);
console.log('host: ', process.env.DB_HOST);
console.log('port: ', process.env.DB_PORT);
console.log('user: ', process.env.DB_USER);
console.log('database: ', process.env.DB_NAME);
const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
  logging: ['warn', 'error'],
  logger: 'debug',
};
