import UserDTO from './dto';
import { ApiError } from '../../helpers/error';
import UserRepository from './repository';
import MailerService from '../../libs/mailer';

class UserService {

    private userRepo;
    private mailerService;
    constructor(userRepository: UserRepository, mailerService : MailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const users = await this.userRepo.findAll();
        return users.map((user: any) => new UserDTO(user));
    }

    async register(userData: any) {
        
        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newUser = await this.userRepo.addNew(userData);
        await this.mailerService.sendMail(userData);
        return new UserDTO(newUser);
    }

    async login(userData : any) {

        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const user = await this.userRepo.findByEmail(userData);
        if (!user)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.userRepo.compareHash(userData.password, user.password);
        if (!passwordMatch)
            throw new ApiError(400, 'User password do not match');

        return new UserDTO(user);
    }
}

export default UserService;
