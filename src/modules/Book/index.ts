import {getCustomRepository} from "typeorm"
import BookRepository from './repository';
import BookService from './service';
import BookController from './controller';


const bookRepository = getCustomRepository(BookRepository);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

export {bookController};