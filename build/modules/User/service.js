"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../../helpers/error");
class UserService {
    constructor(userRepository, mailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepo.findAll();
            return users;
        });
    }
    register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.email || !userData.password)
                throw new error_1.ApiError(400, 'Missing required email and password fields');
            const newUser = yield this.userRepo.addNew(userData);
            yield this.mailerService.sendMail(userData);
            return newUser;
        });
    }
    login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userData.email || !userData.password)
                throw new error_1.ApiError(400, 'Missing required email and password fields');
            const user = yield this.userRepo.findByEmail(userData);
            if (!user)
                throw new error_1.ApiError(400, 'User with the specified email does not exists');
            const passwordMatch = yield this.userRepo.compareHash(userData.password, user.password);
            if (!passwordMatch)
                throw new error_1.ApiError(400, 'User password do not match');
            return user;
        });
    }
}
exports.default = UserService;
