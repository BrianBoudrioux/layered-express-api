class BookController {

    constructor(bookService) {
        this.bookService = bookService;
    }

    getAll = async ({res, next}) => {
        try {
            let books = await this.bookService.getAll();
            res.status(200).json(books);
        } catch (err) {
            next(err);
        }
    }

    add = async (req, res, next) => {
        try {
            const book = await this.bookService.add({...req.body});
            res.status(201).json(book);
        }
        catch (err) {
            next(err);
        }
    }
}

export default BookController;