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
class AuthMiddleware {
    constructor(jwtService) {
        this.isAuth = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.cookies['auth-cookie'];
                if (!token) {
                    return res.status(401).json('Access denied. Your session expired');
                }
                // Verify Token
                const decoded = yield this.jwt.decodeToken(token);
                // if the user has permissions
                req.currentUserId = decoded.id;
                next();
            }
            catch (e) {
                return res.status(401).json('Authentication failed : \n' + e);
            }
        });
        this.jwt = jwtService;
    }
}
exports.default = AuthMiddleware;
