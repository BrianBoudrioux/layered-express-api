"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const env_1 = __importDefault(require("./env"));
const options = {
    "type": 'mysql',
    "host": env_1.default.db_host,
    "port": env_1.default.db_port,
    "username": env_1.default.db_user,
    "password": env_1.default.db_password,
    "database": env_1.default.db_name,
    "logging": true,
    "entities": ["src/modules/**/entity{.js,.ts}"],
    "migrations": ["src/config/migration/*{.js,.ts}"],
    "cli": {
        "migrationsDir": "src/config/migration"
    }
};
const connectionManager = (0, typeorm_1.getConnectionManager)();
const db = connectionManager.create(options);
exports.default = db;
