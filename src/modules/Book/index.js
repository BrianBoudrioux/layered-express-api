import {Router} from 'express';
import {auth, csrf} from '../../middlewares';

import BookDao from './dao';
import BookRepository from './repository';
import BookService from './service';
import BookController from './controller';
import BookRouter from './router';

const router = Router();
const middlewares = {auth, csrf};

const bookRepository = new BookRepository(BookDao);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
const bookRouter = new BookRouter(router, bookController, middlewares);

export {bookRouter};