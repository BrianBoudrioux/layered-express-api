"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dto_1 = __importDefault(require("../Book/dto"));
class UserDTO {
    constructor({ id, email, books = [] }) {
        this.id = id;
        this.email = email;
        this.books = books.map((book) => new dto_1.default(book));
    }
}
exports.default = UserDTO;
