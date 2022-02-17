import App from './config/server'
import db from './config/database'
import config from './config/env'
import routes from './modules'
import middlewares, {logger} from './middlewares'

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