import { Book, book } from './entity';
import { ApiError } from '../../helpers/error';

export interface IBookService {
    getAll() : Promise<Book[]>
    add(bookData: book) : Promise<Book>
}

export interface IBookRepository {
    findAll(): Promise<any[]>
    addNew(book: book): Promise<any>
    findByUser(email: string): Promise<any>
}

class bookService implements IBookService {

    private bookRepo;
    constructor(bookRepository: IBookRepository) {
        this.bookRepo = bookRepository;
    }
    
    async getAll() {
        const books = await this.bookRepo.findAll();
        return books;
    }

    async add(bookData: book) {

        if (!bookData.title || !bookData.content)
            throw new ApiError(400, 'Book validation failed');
        
        const book = await this.bookRepo.addNew(bookData);

        return book;
    }


}

export default bookService;