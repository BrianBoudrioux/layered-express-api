import JwtService from "../../libs/jwt";
import UserService from "./service";
import { Response, Request, NextFunction } from "express";

class UserController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // console.log('toto');

            const user = await this.userService.register({...req.body});
            res.status(201).json(user);
        }
        catch (err) {
            next(err);
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userService.login({...req.body});
            const token = await this.jwtService.generateToken({ id: user.id });
            res.cookie('auth-cookie', token, {expires: new Date(Date.now() + (30 * 86400 * 1000))});
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }

    }
}

export default UserController;