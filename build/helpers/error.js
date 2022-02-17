"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ApiError = void 0;
const middlewares_1 = require("../middlewares");
class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ApiError = ApiError;
const handleError = (err, req, res, next) => {
    const { message } = err;
    const statusCode = (err.statusCode) ? err.statusCode : 500;
    middlewares_1.logger.log(statusCode, err);
    res.status(statusCode).json({
        statusCode,
        message
    });
};
exports.handleError = handleError;
