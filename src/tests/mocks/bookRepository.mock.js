class BookRepositoryMock {

    constructor() {
        this.books = [
            {id: 1, title: 'peter pan', UserId: 1},
            {id: 2, title: 'death note', UserId: null}
        ]
    }

    async findAll() {
        return this.books;
    }

    async create(bookEntity) {
        this.books.push(bookEntity);
        return bookEntity;
    }

    async findByUser(userEntity) {
        const books = this.books.filter((book) => book.UserId === userEntity.id);
        return books[0];
    }

}

export default new BookRepositoryMock();