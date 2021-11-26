import bcrypt from 'bcrypt';

class UserRepository {

    constructor(userDao) {
        this.userDAO = userDao;
    }

    async findAll() {
        return await this.userDAO.findAll({include: "books"});
    }

    async addNew(userEntity) {
        const salt = bcrypt.genSaltSync(10);
        userEntity.password = bcrypt.hashSync(userEntity.password, salt);
        return await this.userDAO.create(userEntity);
    }

    async findByEmail(userEntity) {
        return await this.userDAO.findOne({where: {email: userEntity.email}});
    }

    compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);
}

export default UserRepository;