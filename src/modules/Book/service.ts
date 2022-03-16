import ApiError  from '../../helpers/error';
import { book } from '../../helpers/types/book.types';
import {IBookRepository, IBookService} from '../../helpers/interfaces/book.interfaces';

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
        
        return await this.bookRepo.addNew(bookData);
    }


}

export default bookService;