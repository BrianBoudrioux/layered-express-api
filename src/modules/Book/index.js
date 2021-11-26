import BookDao from './dao';
import BookRepository from './repository';
import BookService from './service';
import BookController from './controller';
import BookRouter from './router';

const bookRepository = new BookRepository(BookDao);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
const bookRouter = new BookRouter(bookController);

export {bookRouter, BookDao};