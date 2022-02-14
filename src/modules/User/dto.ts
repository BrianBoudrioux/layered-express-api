import BookDTO from '../Book/dto';

class UserDTO {
    
    public id;
    public email;
    public books;
    constructor({id, email, books = []} : {id: any, email: string, books: any}) {
        this.id = id;
        this.email = email;
        this.books = books.map((book: any) => new BookDTO(book));
    }

}

export default UserDTO;