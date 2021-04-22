class UserRouter {

    constructor(router, auth, userController) {
        this.router = router;
        this.initializeRoutes(userController, auth);
        return this.router;
    }

    initializeRoutes(userController, auth) {
        this.router.route('/users')
            .get(auth.authenticate, userController.getAll)
            .post(userController.register);

        this.router.route('/users/authenticate').post(userController.login);
    }
}

export default UserRouter;