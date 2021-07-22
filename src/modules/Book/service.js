import BookEntity from './entity';
import { ApiError } from '../../helpers/error';

class bookService {

    constructor(bookRepository) {
        this.bookRepo = bookRepository;
    }
    
    async getAll() {
        const books = await this.bookRepo.findAll();
        return books.map((book) => new BookEntity(book));
    }

    async add(bookData) {
        const bookEntity = new BookEntity(bookData);
        if (!bookEntity.validate())
            throw new ApiError(400, 'BookEntity validation failed');
        
        await this.bookRepo.create(bookEntity);

        return bookEntity;
    }


}

export default bookService;