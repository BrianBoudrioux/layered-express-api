import BookService from '../../modules/Book/service';
import BookRepositoryMock from '../mocks/bookRepository.mock';
import { Book } from '../../modules/Book/entity';

const bookService = new BookService(new BookRepositoryMock());

describe("Book service unit test", () => {

    describe("add book use case : ", () => {

        it("Should throw a error if bookdata is empty or null", async () => {
            try {
                
                await bookService.add({title: '', content: 'oo', author: ''});
            } catch (e: any) {
                
                expect(e.statusCode).toBe(400);
                expect(e.message).toBe('Book validation failed');
            }
        })

        it("Should throw a error if bookdata is empty or null", async () => {
            const book = await bookService.add({ title: 'ee', content: 'oo', author: 'ee' });
            expect(book.title).toBe('ee');
            expect(book instanceof Book).toBe(true);
        })

        it('Should return a array of Book instance', async () => {
            const books = await bookService.getAll();
            expect(books[0] instanceof Book).toBe(true);
            expect(books[0].content).toBe('oo');
        });

    })

})