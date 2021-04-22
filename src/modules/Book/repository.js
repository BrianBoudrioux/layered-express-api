class BookRepository {

    constructor(bookDao) {
        this.bookDAO = bookDao;
    }

    async findAll() {
        return await this.bookDAO.findAll();
    }

    async create(bookEntity) {
        return await this.bookDAO.create(bookEntity);
    }

    async findByUser(userEntity) {
        return await this.bookDAO.findOne({where: {UserId: userEntity.id}});
    }

}

export default BookRepository;