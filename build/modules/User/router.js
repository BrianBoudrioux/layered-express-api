"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
exports.default = ((controller) => {
    const userRouter = (0, express_1.Router)();
    userRouter
        .route('/')
        .get(middlewares_1.auth.isAuth, controller.getAll)
        .post(controller.register);
    userRouter.route(`/auth`).post(controller.login);
    return userRouter;
});
