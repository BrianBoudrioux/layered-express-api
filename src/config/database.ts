import {Sequelize} from 'sequelize';
import config from './env';

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {dialect: "mysql", port: config.db_port, host: config.db_host});
const associateAll = async (models: any) => Object.values(models).map((model: any) => model.associate(models));
const db = {sequelize, Sequelize, associateAll};

export default db;