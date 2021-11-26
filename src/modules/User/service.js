import UserDTO from './dto';
import { ApiError } from '../../helpers/error';

class UserService {

    constructor(userRepository, mailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const users = await this.userRepo.findAll();
        return users.map((user) => new UserDTO(user));
    }

    async register(userData) {
        
        if (!userData.email || !userData.password)
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newUser = await this.userRepo.addNew(userData);
        await this.mailerService.sendMail(userData);
        return new UserDTO(newUser);
    }

    async login(userData) {

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
