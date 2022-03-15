import {EntityRepository, EntityManager} from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./entity";
import {IUserRepository} from '../../helpers/interfaces/user.interfaces';
import {user} from '../../helpers/types/user.types';


@EntityRepository()
class UserRepository implements IUserRepository {

    constructor(private manager: EntityManager) {
    }

    async findAll() {
        return await this.manager.find(User);
    }

    async addNew(userEntity: user) {
        const salt = bcrypt.genSaltSync(10);
        userEntity.password = bcrypt.hashSync(userEntity.password, salt);
        return await this.manager.save(User, userEntity);
    }

    async findByEmail(userEntity: user) {
        return await this.manager.findOne(User, {email: userEntity.email});
    }

    compareHash = async (password: string, hash: string) => await bcrypt.compareSync(password, hash);
}

export default UserRepository;