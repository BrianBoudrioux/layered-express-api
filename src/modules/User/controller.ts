import { Response, Request, NextFunction } from "express";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import JwtService from "../../libs/jwt";
import { IUserService } from './service';
import { auth } from "../../middlewares";

@Controller('users')
class UserController {
    private userService;
    private jwtService;
    constructor(userService: IUserService, jwtService: JwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @Get()
    @Middleware(auth.isAuth)
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    @Post()
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

    @Post('login')
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