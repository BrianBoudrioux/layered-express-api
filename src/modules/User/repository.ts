import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import { UserDao } from '.';
import UserDTO from './dto';

class UserRepository {

    private userDAO;
    constructor(userDao: any) {
        this.userDAO = userDao;
    }

    async findAll() {
        return await this.userDAO.findAll({include: "books"});
    }

    async addNew(userEntity: any) {
        const salt = bcrypt.genSaltSync(10);
        userEntity.password = bcrypt.hashSync(userEntity.password, salt);
        return await this.userDAO.create(userEntity);
    }

    async findByEmail(userEntity: any) {
        return await this.userDAO.findOne({where: {email: userEntity.email}});
    }

    compareHash = async (password: string, hash: string) => await bcrypt.compareSync(password, hash);
}

export default UserRepository;