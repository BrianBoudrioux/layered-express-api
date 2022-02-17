"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrf = exports.logger = exports.auth = void 0;
// middlewares dépendencies
const express_1 = __importDefault(require("express"));
const libs_1 = require("../libs");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const winston_1 = __importDefault(require("winston"));
const logger_1 = __importDefault(require("../helpers/logger"));
const morgan_1 = __importDefault(require("morgan"));
const csurf_1 = __importDefault(require("csurf"));
// middlewares
const auth_1 = __importDefault(require("./auth"));
// initialize middlewares with dependencies injection
const auth = new auth_1.default(libs_1.jwtService);
exports.auth = auth;
const logger = new logger_1.default(winston_1.default);
exports.logger = logger;
const csrf = (0, csurf_1.default)({ cookie: true });
exports.csrf = csrf;
//export default api middlewares
exports.default = {
    urlencoded: express_1.default.urlencoded({ extended: false }),
    json: express_1.default.json(),
    cookieParser: (0, cookie_parser_1.default)(),
    apiLogger: (0, morgan_1.default)('combined', { stream: logger.stream }),
    csrf
};
