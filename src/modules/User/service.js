class UserService {

    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    async getAll() {
        return await this.userRepo.getAll();
    }

    async register(userData) {
        return await this.userRepo.register(userData);
    }
    
    async getByMail(mail) {
        return await this.userRepo.getByMail(mail);
    }
}

export default UserService;
