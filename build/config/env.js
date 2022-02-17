"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    app_port: process.env.APP_PORT || "3000",
    db_port: Number(process.env.DB_PORT) || 3306,
    db_name: process.env.DB_NAME || "bookstore",
    db_user: process.env.DB_USER || "root",
    db_host: process.env.DB_HOST || "localhost",
    db_type: process.env.DB_TYPE || 'mysql',
    db_password: process.env.DB_PASSWORD || "root",
    jwt_secret: process.env.JWT_SECRET || "blabla"
};
exports.default = config;
