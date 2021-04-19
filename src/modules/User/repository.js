class UserRepository {

    constructor(userDAO) {
        this.userDAO = userDAO;
    }

    async getAll() {
        return await this.userDAO.findAll();
    }

    async register(userData) {
        return await this.userDAO.create(userData);
    }

    async getByMail(mail) {
        return await this.userDAO.findOne({where: {email: mail}})
    }
}

export default UserRepository;