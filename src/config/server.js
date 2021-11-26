import {handleError} from '../helpers/error';

class Server {
    constructor(http, routes, middlewares) {
        this.app = http;
        this.initializeMiddlewares(middlewares);
        this.initializeRouter(routes);
        this.initializeErrorHandler();
    }

    initializeMiddlewares(middlewares) {
        for (const key in middlewares) {
            if (key === 'csrf') {
                this.app.get('/csrf', middlewares[key], (req, res) => {
                    res.status(200).json(req.csrfToken());
                })
            }
            else
                this.app.use(middlewares[key]);
        }
    }

    initializeRouter(routes) {
        for (let path in routes) {
            this.app.use(path, routes[path]);
        }
    }

    initializeErrorHandler() {
        this.app.use(handleError);
    }

    listen(port) {
        this.app.listen(port, async () => console.log(`application started on port : ${port}`));
    }
}

export default Server;