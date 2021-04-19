import {Router} from 'express';
import bcrypt from 'bcrypt';
import {DataTypes} from 'sequelize';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';
import db from '../../config/database';


import User from './dao';
import UserRepository from './repository';
import UserService from './service';
import UserController from './controller';
import UserRouter from './router';

const router = Router();
const userDao = User.init(db.sequelize, DataTypes);
const userRepository = new UserRepository(userDao);
const userService = new UserService(userRepository);
const userController = new UserController({userService, mailer: mailerService, jwt: jwtService, bcrypt});
const userRouter = new UserRouter({router, auth, userController});

export {userService, userDao};

export default userRouter;