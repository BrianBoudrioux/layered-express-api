import { Book } from '../Book/entity';
import BookDTO from '../Book/dto';

class UserDTO {
    
    public id;
    public email;
    public books;
    constructor({id, email, books = []} : {id: number, email: string, books?: Book[]}) {
        this.id = id;
        this.email = email;
        this.books = books.map((book: any) => new BookDTO(book));
    }

}

export default UserDTO;