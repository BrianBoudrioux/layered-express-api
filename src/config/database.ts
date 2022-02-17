import {ConnectionOptions, getConnectionManager} from "typeorm";
import { Book } from '../modules/Book/entity';
import { User } from '../modules/User/entity';
import config from './env';

const entities = [User, Book];

const options: ConnectionOptions = {
    "type": 'mysql',
    "host": config.db_host,
    "port": config.db_port,
    "username": config.db_user,
    "password": config.db_password,
    "database": config.db_name,
    "logging": true,
    "entities": entities,
    "migrations": ["src/config/migration/*.js"],
    "cli": {
        "migrationsDir": "src/config/migration"
    }
}

const connectionManager = getConnectionManager();

const db = connectionManager.create(options);

export {db};
export default options;