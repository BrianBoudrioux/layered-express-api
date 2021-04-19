import {Sequelize} from 'sequelize';
import config from './env';

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {dialect: "mysql"});
const db = {sequelize, Sequelize}

export default db;