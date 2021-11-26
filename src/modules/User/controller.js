class UserController {

    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const user = await this.userService.register({...req.body});
            res.status(201).json(user);
        }
        catch (err) {
            next(err);
        }
    }

    login = async (req, res, next) => {
        try {
            const user = await this.userService.login({...req.body});
            const token = await this.jwtService.generateToken({ id: user.id });
            res.cookie('auth-cookie', token, {expiresIn: '30d'});
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }
}

export default UserController;