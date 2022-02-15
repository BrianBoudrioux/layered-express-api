import { Router } from "express";
import { auth, csrf } from "../../middlewares";
import BookController from "./controller";

export default ((controller: BookController) => {
    const bookRouter = Router();

    bookRouter
        .route('/')
            .get(auth.isAuth, controller.getAll)
            .post(auth.isAuth, csrf, controller.add);

    return bookRouter;
});