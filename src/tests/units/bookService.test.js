import BookService from '../../modules/Book/service';
import bookDTO from '../../modules/Book/dto';
import BookRepositoryMock from '../mocks/bookRepository.mock';

const bookService = new BookService(BookRepositoryMock);

describe('Book USE-CASE : ', () => {
    
    describe('getAll use case : ', () => {
        it('Should return a array of bookDTO instance', async () => {
            const books = await bookService.getAll();
            expect(books[0] instanceof bookDTO).toBe(true);
            expect(books[1].title).toBe('death note');
        });
        
    });

    describe('add book use case :', () => {
        it('Should throw a error if bookData is empty or null', async () => {
            try {
                await bookService.add({});
            } catch(e) {
                expect(e.statusCode).toBe(400);
                expect(e.message).toBe('book validation failed');
            }
        });

        it ('Should return a new instance of BookService with specified data', async () => {
            const book = await bookService.add({title: 'one piece'});
            expect(book instanceof bookDTO).toBe(true);
            expect(book.title).toBe('one piece');
        })
        
    });
    
    

});
