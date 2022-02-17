"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const typeorm_1 = require("typeorm");
const repository_1 = __importDefault(require("./repository"));
const service_1 = __importDefault(require("./service"));
const controller_1 = __importDefault(require("./controller"));
const libs_1 = require("../../libs");
const userRepository = (0, typeorm_1.getCustomRepository)(repository_1.default);
const userService = new service_1.default(userRepository, libs_1.mailerService);
const userController = new controller_1.default(userService, libs_1.jwtService);
exports.userController = userController;
