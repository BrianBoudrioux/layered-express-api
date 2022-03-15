import ApiError from "../../helpers/error";
import { logger } from "./index";
import { NextFunction } from "express";
import { Response, Request } from "express";

const handleError = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const { message } = err;
    const statusCode = (err.statusCode) ? err.statusCode : 500;

    logger.log(statusCode, err);
    res.status(statusCode).json({
        statusCode,
        message
    });
}

export default handleError;