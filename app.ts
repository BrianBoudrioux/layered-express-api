import App from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';
import routes from './src/modules';
import middlewares, {logger} from './src/middlewares';

const application = new App(routes, middlewares);

(async () => {
    try {
        await db.connect();
        application.listen(config.app_port);
    } catch (e: any) {
        console.error(e);
        logger.log(500, e.message);
    }
})()