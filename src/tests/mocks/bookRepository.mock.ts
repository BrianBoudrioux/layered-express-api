import { Book, book } from '../../modules/Book/entity';

const books = [
    {title: 'one piece', content: 'rr', author: 'ee'},
    {title: 'dark souls', content: 'rr', author: 'ee'}
];

interface IBookRepositoryMock {
    findAll(): Promise<book[]>
    addNew(book: book): Promise<book>
    findByUser(email: string): Promise<book[] | undefined>
}

class BookRepositoryMock implements IBookRepositoryMock {

    async findAll() {
        return  books;
    }

    async addNew(bookEntity: book) {
        books.push(bookEntity);
        return books[books.length - 1];
    }

    async findByUser(email: string) {
        const results = books.filter((book) => book);
        return results;
    }

}

export default BookRepositoryMock;