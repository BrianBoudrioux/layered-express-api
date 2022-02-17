"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = exports.mailerService = void 0;
// config
const env_1 = __importDefault(require("../config/env"));
// services
const mailer_1 = __importDefault(require("./mailer"));
const jwt_1 = __importDefault(require("./jwt"));
// services dependencies
const nodemailer_1 = __importDefault(require("nodemailer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Instanciate all your singleton service with dépendencies injection
const mailerService = new mailer_1.default(nodemailer_1.default);
exports.mailerService = mailerService;
const jwtService = new jwt_1.default(jsonwebtoken_1.default, env_1.default.jwt_secret);
exports.jwtService = jwtService;
