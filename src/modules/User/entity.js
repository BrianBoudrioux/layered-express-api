import BookEntity from '../Book/entity';

class UserEntity {
    
    constructor({id, email, password, books = []}) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.books = books.map((book) => new BookEntity(book));
    }

    validate() {
        if (!this.email || !this.password)
            return false;
        else
            return true;
    }

}

export default UserEntity;