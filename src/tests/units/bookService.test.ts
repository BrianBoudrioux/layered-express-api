import BookService from '../../modules/Book/service';
import bookDTO from '../../modules/Book/dto';
import { getCustomRepository } from "typeorm";
import BookRepositoryMock from '../mocks/bookRepository.mock';
import { book } from '../../modules/Book/entity';

jest.mock('typeorm', () => {

    return {

        getCustomRepository: (repo: any) => new repo(),
        BaseEntity: class Mock { },
        ObjectType: () => { },
        Entity: () => { },
        InputType: () => { },
        Index: () => { },
        PrimaryGeneratedColumn: () => { },
        Column: () => { },
        CreateDateColumn: () => { },
        UpdateDateColumn: () => { },
        OneToMany: () => { },
        ManyToOne: () => { },
    }
});

const bookService = new BookService(getCustomRepository(BookRepositoryMock));
const datatest: book = {title: 'one piece', content: 'oo', author: 'ee'};

describe('Book USE-CASE : ', () => {
    
    describe('getAll use case : ', () => {
        it('Should return a array of bookDTO instance', async () => {
            const books = await bookService.getAll();
            expect(books[0].content).toBe('rr');
        });
        
    });

    describe('add book use case :', () => {
        it('Should throw a error if bookData is empty or null', async () => {
            try {
                await bookService.add(datatest);
            } catch(e: any) {
                expect(e.statusCode).toBe(400);
                expect(e.message).toBe('Book validation failed');
            }
        });

        it ('Should return a new instance of BookService with specified data', async () => {
            const result = await bookService.add(datatest);
            expect(result.title).toBe('one piece');
        })
        
    });
    
    

});
