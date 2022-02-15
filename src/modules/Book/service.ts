import { Book } from './entity';
import BookDTO from './dto';
import { ApiError } from '../../helpers/error';
import { IBookRepository } from './repository';

export interface IBookService {
    getAll() : Promise<BookDTO[]>
    add(bookData: Book) : Promise<BookDTO>
}

class bookService implements IBookService {

    private bookRepo;
    constructor(bookRepository: IBookRepository) {
        this.bookRepo = bookRepository;
    }
    
    async getAll() {
        const books = await this.bookRepo.findAll();
        return books.map((book) => new BookDTO(book));
    }

    async add(bookData: Book) {

        if (!bookData.title || !bookData.content)
            throw new ApiError(400, 'Book validation failed');
        
        const book = await this.bookRepo.addNew(bookData);

        return new BookDTO(book);
    }


}

export default bookService;