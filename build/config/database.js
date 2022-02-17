"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../modules/Book/entity");
const entity_2 = require("../modules/User/entity");
const env_1 = __importDefault(require("./env"));
const entities = [entity_2.User, entity_1.Book];
const options = {
    "type": 'mysql',
    "host": env_1.default.db_host,
    "port": env_1.default.db_port,
    "username": env_1.default.db_user,
    "password": env_1.default.db_password,
    "database": env_1.default.db_name,
    "logging": true,
    "entities": entities,
    "migrations": ["src/config/migration/*.js"],
    "cli": {
        "migrationsDir": "src/config/migration"
    }
};
const connectionManager = (0, typeorm_1.getConnectionManager)();
const db = connectionManager.create(options);
exports.db = db;
exports.default = options;
