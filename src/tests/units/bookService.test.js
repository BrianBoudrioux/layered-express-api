import BookService from '../../modules/Book/service';
import BookEntity from '../../modules/Book/entity';
import BookRepositoryMock from '../mocks/bookRepository.mock';

const bookService = new BookService(BookRepositoryMock);

describe('Book USE-CASE : ', () => {
    
    describe('getAll use case : ', () => {
        it('Should return a array of bookEntity instance', async () => {
            const books = await bookService.getAll();
            expect(books[0] instanceof BookEntity).toBe(true);
            expect(books[1].title).toBe('death note');
        });
        
    });

    describe('add book use case :', () => {
        it('Should throw a error if bookData is empty or null', async () => {
            try {
                await bookService.add({});
            } catch(e) {
                expect(e.statusCode).toBe(400);
                expect(e.message).toBe('BookEntity validation failed');
            }
        });

        it ('Should return a new instance of BookService with specified data', async () => {
            const bookEntity = await bookService.add({title: 'one piece'});
            expect(bookEntity instanceof BookEntity).toBe(true);
            expect(bookEntity.title).toBe('one piece');
        })
        
    });
    
    

});
