"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const typeorm_1 = require("typeorm");
const repository_1 = __importDefault(require("./repository"));
const service_1 = __importDefault(require("./service"));
const controller_1 = __importDefault(require("./controller"));
const bookRepository = (0, typeorm_1.getCustomRepository)(repository_1.default);
const bookService = new service_1.default(bookRepository);
const bookController = new controller_1.default(bookService);
exports.bookController = bookController;
