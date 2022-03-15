import { Book } from "../../modules/Book/entity";
import { book } from "../../helpers/types/book.types";
import { IBookRepository } from "../../helpers/interfaces/book.interfaces";

const books: Book[] = [];

export default class BookRepositoryMock implements IBookRepository {
    async findAll() {
        return books;
    }

    async addNew(book: book) {
        const result = new Book();
        result.title = book.title;
        result.content = book.content;
        result.author = book.author;
        books.push(result);
        return result;
    }

    async findByUser(email: string) {
        return books[0];
    }
}