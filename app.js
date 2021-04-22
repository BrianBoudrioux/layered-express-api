import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';
import {csrf} from './src/middlewares';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import winston from 'winston';
import Logger from './src/helpers/logger';
import routes from './src/modules';

const logger = new Logger(winston);
const middlewares = {cookieParser, csrf, morgan};
const application = new Server(express, routes, middlewares, logger);

(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({atler: true})
        await application.listen(config.app_port);
    } catch (e) {
        logger.log('warn', e.message);
    }
})()