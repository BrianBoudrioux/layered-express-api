import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import UserDao from './dao';
import UserRepository from './repository';
import UserService from './service';
import UserController from './controller';
import UserRouter from './router';

const router = Router();

const userRepository = new UserRepository(UserDao);
const userService = new UserService(userRepository, mailerService);
const userController = new UserController(userService, jwtService);
const userRouter = new UserRouter(router, auth, userController);

export {userRouter, UserDao};