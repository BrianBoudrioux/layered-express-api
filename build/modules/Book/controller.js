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
const middlewares_1 = require("../../middlewares");
const dto_1 = __importDefault(require("./dto"));
let BookController = class BookController {
    constructor(bookService) {
        this.getAll = ({ res, next }) => __awaiter(this, void 0, void 0, function* () {
            try {
                let books = yield this.bookService.getAll();
                const result = books.map((book) => new dto_1.default(book));
                res.status(200).json(result);
            }
            catch (err) {
                next(err);
            }
        });
        this.add = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield this.bookService.add(Object.assign({}, req.body));
                res.status(201).json(new dto_1.default(book));
            }
            catch (err) {
                next(err);
            }
        });
        this.bookService = bookService;
    }
};
__decorate([
    (0, core_1.Get)(),
    (0, core_1.Middleware)(middlewares_1.auth.isAuth),
    __metadata("design:type", Object)
], BookController.prototype, "getAll", void 0);
__decorate([
    (0, core_1.Post)(),
    (0, core_1.Middleware)([middlewares_1.auth.isAuth, middlewares_1.csrf]),
    __metadata("design:type", Object)
], BookController.prototype, "add", void 0);
BookController = __decorate([
    (0, core_1.Controller)('books'),
    __metadata("design:paramtypes", [Object])
], BookController);
exports.default = BookController;
