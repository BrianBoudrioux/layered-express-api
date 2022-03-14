import { ApiError } from '../../helpers/error';
import { IMailerService } from './../../libs/mailer';
import { User } from './entity';

export interface IUserService {
    getAll() : Promise<User[]>
    register(userData: User) : Promise<User>
    login(userData: User) : Promise<User>
}

export interface IUserRepository {
    findAll(): Promise<User[]>
    addNew(userEntity: any): Promise<any>
    findByEmail(userEntity: any): Promise<User | undefined>
    compareHash(password: string, hash: string): Promise<boolean>
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
        return users;
    }

    async register(userData: User) {
        
        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newUser = await this.userRepo.addNew(userData);
        await this.mailerService.sendMail(userData);
        return newUser;
    }

    async login(userData : User) {

        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const user = await this.userRepo.findByEmail(userData);
        
        if (!user)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.userRepo.compareHash(userData.password, user.password);
        if (!passwordMatch)
            throw new ApiError(400, 'User password do not match');

        return user;
    }
}