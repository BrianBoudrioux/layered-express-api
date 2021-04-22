import UserEntity from './entity';
import { ApiError } from '../../helpers/error';
class UserService {

    constructor(userRepository, mailerService) {
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const users = await this.userRepo.findAll();
        return users.map((user) => new UserEntity(user));
    }

    async register(userData) {
        const userEntity = new UserEntity(userData);
        if (!userEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newUser = await this.userRepo.create(userEntity);
        await this.mailerService.sendMail(userEntity);
        return new UserEntity(newUser);
    }

    async login(userData) {
        const userEntity = new UserEntity(userData);
        if (!userEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const user = await this.userRepo.findByEmail(userEntity);
        if (!user)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.userRepo.compareHash(userEntity.password, user.password);
        if (!passwordMatch)
            throw new ApiError(400, 'User password do not match');

        return new UserEntity(user);
    }
}

export default UserService;
