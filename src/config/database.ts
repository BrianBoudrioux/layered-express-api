import {ConnectionOptions, getConnectionManager} from "typeorm";
import config from './env';

const options: ConnectionOptions = {
    "type": 'mysql',
    "host": config.db_host,
    "port": config.db_port,
    "username": config.db_user,
    "password": config.db_password,
    "database": config.db_name,
    "logging": true,
    "entities": ["src/modules/**/entity{.js,.ts}"],
    "migrations": ["src/config/migration/*{.js,.ts}"],
    "cli": {
        "migrationsDir": "src/config/migration"
    }
}

const connectionManager = getConnectionManager();

const db = connectionManager.create(options);

export default db;