import Sequelize from 'sequelize';
import config from './config/config';

const sequelizeInstance = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'postgres',
  }
);

export default sequelizeInstance;
