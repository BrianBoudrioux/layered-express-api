"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Book_1 = require("./Book");
const routes = [
    User_1.userController,
    Book_1.bookController
];
exports.default = routes;
