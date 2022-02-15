import UserDTO from './dto';
import { ApiError } from '../../helpers/error';
import { IMailerService } from './../../libs/mailer';
import { IUserRepository } from './repository';
import { User } from './entity';

export interface IUserService {
    getAll() : Promise<UserDTO[]>
    register(userData: any) : Promise<UserDTO>
    login(userData: any) : Promise<UserDTO>
}

export default class UserService implements IUserService {

    private userRepo;
    private mailerService;
    constructor(userRepository: IUserRepository, mailerService : IMailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const users = await this.userRepo.findAll();
        return users.map((user: any) => new UserDTO(user));
    }

    async register(userData: User) {
        
        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newUser = await this.userRepo.addNew(userData);
        await this.mailerService.sendMail(userData);
        return new UserDTO(newUser);
    }

    async login(userData : User) {

        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const user = await this.userRepo.findByEmail(userData);
        console.log(user);
        
        if (!user)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.userRepo.compareHash(userData.password, user.password);
        if (!passwordMatch)
            throw new ApiError(400, 'User password do not match');

        return new UserDTO(user);
    }
}