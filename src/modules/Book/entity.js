class BookEntity {
    
    constructor({id, title, UserId}) {
        this.id = id;
        this.title = title;
        this.UserId = UserId;
    }

    validate() {
        return (!this.title) ? false : true;
    }

}

export default BookEntity;