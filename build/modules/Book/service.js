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
class bookService {
    constructor(bookRepository) {
        this.bookRepo = bookRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookRepo.findAll();
            return books;
        });
    }
    add(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bookData.title || !bookData.content)
                throw new error_1.ApiError(400, 'Book validation failed');
            const book = yield this.bookRepo.addNew(bookData);
            return book;
        });
    }
}
exports.default = bookService;
