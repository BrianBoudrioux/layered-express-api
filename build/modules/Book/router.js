"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
exports.default = ((controller) => {
    const bookRouter = (0, express_1.Router)();
    bookRouter
        .route('/')
        .get(middlewares_1.auth.isAuth, controller.getAll)
        .post(middlewares_1.auth.isAuth, middlewares_1.csrf, controller.add);
    return bookRouter;
});
