import { Router } from "express";
import { auth, csrf } from "../../middlewares";

class BookRouter {

    constructor(controller) {
        this.router = Router();
        this.initializeRoutes(controller);
        return this.router;
    }

    initializeRoutes(controller) {
        this.router.route('/')
            .get(auth.isAuth, controller.getAll)
            .post(auth.isAuth, csrf, controller.add);
    }
}

export default BookRouter;