import BookDTO from './dto';
import { ApiError } from '../../helpers/error';

class bookService {

    constructor(bookRepository) {
        this.bookRepo = bookRepository;
    }
    
    async getAll() {
        const books = await this.bookRepo.findAll();
        return books.map((book) => new BookDTO(book));
    }

    async add(bookData) {

        if (!bookData.title)
            throw new ApiError(400, 'Book validation failed');
        
        const book = await this.bookRepo.addNew(bookData);

        return new BookDTO(book);
    }


}

export default bookService;