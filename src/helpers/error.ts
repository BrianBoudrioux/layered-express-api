import { NextFunction, Response } from 'express';
import { Request } from 'express';
import { logger } from '../middlewares';

class ApiError extends Error {
    public statusCode;
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const {message} = err;
    const statusCode = (err.statusCode) ? err.statusCode : 500;

    logger.log(statusCode, err);
    res.status(statusCode).json({
        statusCode,
        message
    });
}

export {ApiError, handleError};