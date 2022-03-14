import { Request } from 'express';
import { Response, NextFunction } from 'express';
import { IBookService } from './service';
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { auth, csrf } from '../../middlewares';
import BookDTO from './dto';

@Controller('books')
class BookController {

    private bookService;
    constructor(bookService: IBookService) {
        this.bookService = bookService;
    }

    @Get()
    @Middleware(auth.isAuth)
    getAll = async ({res, next} : {res: Response, next: NextFunction}) => {
        try {
            let books = await this.bookService.getAll();
            const result = books.map((book) => new BookDTO(book));
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    @Post()
    @Middleware([auth.isAuth, csrf])
    add = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const book = await this.bookService.add({...req.body});
            res.status(201).json(new BookDTO(book));
        }
        catch (err) {
            next(err);
        }
    }
}

export default BookController;