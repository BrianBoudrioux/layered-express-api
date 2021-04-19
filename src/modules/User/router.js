class UserRouter {

    constructor({router, auth, userController}) {
        this.router = router;
        this.initializeRoutes({auth, userController});
        return this.router;
    }

    initializeRoutes({auth, userController}) {
        this.router.route('/users')
            .get(auth.authenticate, userController.getAll)
            .post(userController.register);

        this.router.route('/users/authenticate').post(userController.login);
    }
}

export default UserRouter;