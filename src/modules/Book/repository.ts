import {EntityRepository, EntityManager} from "typeorm";
import { Book } from "./entity";
import { User } from "../User/entity";
import { IBookRepository } from "./service";
import { book } from "./entity";

@EntityRepository()
class BookRepository implements IBookRepository {

    constructor(private manager: EntityManager) {
    }


    async findAll(){
        return await this.manager.find(Book);
    }

    async addNew(book: book) {
        return await this.manager.save(Book, book);
    }

    async findByUser(email: string) {
        const user = await this.manager.findOne(User, {email});
        return user?.book;
    }

}

export default BookRepository;