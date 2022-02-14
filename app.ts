import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';
import routes from './src/modules';
import middlewares, {logger} from './src/middlewares';

const http = express();
const application = new Server(http, routes, middlewares);

(async () => {
    try {
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        await application.listen(config.app_port);
    } catch (e: any) {
        console.error(e);
        logger.log(500, e.message);
    }
})()