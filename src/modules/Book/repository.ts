import {EntityRepository, EntityManager} from "typeorm";
import { Book } from "./entity";
import { User } from "../User/entity";

export interface IBookRepository {
    findAll() : Promise<Book[]>
    addNew(book: Book) : Promise<Book>
    findByUser(email: string) : Promise<Book | undefined>
}

@EntityRepository()
class BookRepository implements IBookRepository {

    constructor(private manager: EntityManager) {
    }


    async findAll(){
        return await this.manager.find(Book);
    }

    async addNew(book: Book) {
        return await this.manager.save(Book, book);
    }

    async findByUser(email: string) {
        const user = await this.manager.findOne(User, {email});
        return user?.book;
    }

}

export default BookRepository;