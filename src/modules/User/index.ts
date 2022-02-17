import {getCustomRepository} from "typeorm";
import UserRepository from './repository';
import UserService from './service';
import UserController from './controller';
import {jwtService, mailerService} from '../../libs';

const userRepository = getCustomRepository(UserRepository);
const userService = new UserService(userRepository, mailerService);
const userController = new UserController(userService, jwtService);

export {userController};