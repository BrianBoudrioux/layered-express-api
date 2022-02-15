import {getConnectionManager} from "typeorm";
import { Book } from '../modules/Book/entity';
import { User } from '../modules/User/entity';

const entities = [User, Book];

const connectionManager = getConnectionManager();
const db = connectionManager.create({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "bookstore",
    logging: true,
    synchronize: true,
    entities: entities
});

export default db;