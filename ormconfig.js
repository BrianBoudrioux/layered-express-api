const Book = require('./src/modules/Book/entity');
const User = require('./src/modules/User/entity');

const entities = [User, Book];

module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST || 'localhost',
    "port": process.env.DB_PORT || 3306,
    "username": process.env.DB_USER || 'root',
    "password": process.env.DB_PASSWORD || 'root',
    "database": process.env.DB_NAME || 'bookstore',
    "logging": true,
    "entities": entities,
    "migrations": ["src/config/migration/*.js"],
    "cli": {
        "migrationsDir": "src/config/migration"
    }
}