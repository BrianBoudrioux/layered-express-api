"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@overnightjs/core");
const jwt_1 = __importDefault(require("../../libs/jwt"));
const middlewares_1 = require("../../middlewares");
let UserController = class UserController {
    constructor(userService, jwtService) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield this.userService.getAll();
                res.status(200).json(users);
            }
            catch (err) {
                next(err);
            }
        });
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log('toto');
                const user = yield this.userService.register(Object.assign({}, req.body));
                res.status(201).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.login(Object.assign({}, req.body));
                const token = yield this.jwtService.generateToken({ id: user.id });
                res.cookie('auth-cookie', token, { expires: new Date(Date.now() + (30 * 86400 * 1000)) });
                res.status(200).json(user);
            }
            catch (err) {
                next(err);
            }
        });
        this.userService = userService;
        this.jwtService = jwtService;
    }
};
__decorate([
    (0, core_1.Get)(),
    (0, core_1.Middleware)(middlewares_1.auth.isAuth),
    __metadata("design:type", Object)
], UserController.prototype, "getAll", void 0);
__decorate([
    (0, core_1.Post)(),
    __metadata("design:type", Object)
], UserController.prototype, "register", void 0);
__decorate([
    (0, core_1.Post)('login'),
    __metadata("design:type", Object)
], UserController.prototype, "login", void 0);
UserController = __decorate([
    (0, core_1.Controller)('users'),
    __metadata("design:paramtypes", [Object, jwt_1.default])
], UserController);
exports.default = UserController;
