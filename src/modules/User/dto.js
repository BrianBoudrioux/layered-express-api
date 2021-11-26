import BookDTO from '../Book/dto';

class UserDTO {
    
    constructor({id, email, books = []}) {
        this.id = id;
        this.email = email;
        this.books = books.map((book) => new BookDTO(book));
    }

}

export default UserDTO;