import ApiError  from '../../helpers/error';
import { IMailerService } from './../../libs/mailer';
import { User } from './entity';
import {IUserService, IUserRepository} from '../../helpers/interfaces/user.interfaces';

export default class UserService implements IUserService {

    private userRepo;
    private mailerService;
    constructor(userRepository: IUserRepository, mailerService : IMailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const users = await this.userRepo.findAll();
        return users;
    }

    async register(userData: User) {
        
        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email or password fields');
        
        const newUser = await this.userRepo.addNew(userData);
        await this.mailerService.sendMail(userData);
        return newUser;
    }

    async login(userData : User) {

        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email or password fields');
        
        const user = await this.userRepo.findByEmail(userData);
        
        if (!user)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.userRepo.compareHash(userData.password, user.password);
        if (!passwordMatch)
            throw new ApiError(400, 'Email/password do not match');

        return user;
    }
}