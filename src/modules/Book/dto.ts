import { User } from "../User/entity";

class BookDTO {
    id;
    title;
    users;
    constructor({id, title, users} : {id: number, title: string, users: User[]}) {
        this.id = id;
        this.title = title;
        this.users = users;
    }

}

export default BookDTO;