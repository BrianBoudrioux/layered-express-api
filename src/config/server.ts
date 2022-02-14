import { Response } from 'express';
import { Request } from 'express';
import {handleError} from '../helpers/error';

class Server {

    private app;
    constructor(http: any, routes: Object, middlewares: Object) {
        this.app = http;
        this.initializeMiddlewares(middlewares);
        this.initializeRouter(routes);
        this.initializeErrorHandler();
    }

    initializeMiddlewares(middlewares: any) {
        for (const key in middlewares) {
            if (key === 'csrf') {
                this.app.get('/csrf', middlewares[key], (req: Request | any, res: Response) => {
                    res.status(200).json(req.csrfToken());
                })
            }
            else
                this.app.use(middlewares[key]);
        }
    }

    initializeRouter(routes: any) {
        for (let path in routes) {
            this.app.use(path, routes[path]);
        }
    }

    initializeErrorHandler() {
        this.app.use(handleError);
    }

    listen(port: string) {
        this.app.listen(port, async () => console.log(`application started on port : ${port}`));
    }
}

export default Server;