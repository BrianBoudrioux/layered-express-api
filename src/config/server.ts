import { Request, Response } from 'express';
import { Server } from '@overnightjs/core'
import handleError from './middlewares/handleError';

class App extends Server {

    constructor(routes: Array<Object>, middlewares: Object) {
        super();

        this.initializeMiddlewares(middlewares);
        super.addControllers(routes);
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

    initializeErrorHandler() {
        this.app.use(handleError);
    }

    listen(port: string) {
        this.app.listen(port, async () => console.log(`application started on port : ${port}`));
    }
}

export default App;