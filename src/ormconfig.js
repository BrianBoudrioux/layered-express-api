import { Book } from '../modules/Book/entity';
import { User } from '../modules/User/entity';

const entities = [User, Book];

export default {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "bookstore",
    "logging": true,
    "entities": entities
}