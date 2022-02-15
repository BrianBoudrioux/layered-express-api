import {getCustomRepository} from "typeorm"
import BookRepository from './repository';
import BookService from './service';
import BookController from './controller';
import BookRouter from './router';


const bookRepository = getCustomRepository(BookRepository);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
// const bookRouter = BookRouter(bookController);

export {bookController};