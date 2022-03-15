import { Book } from "../../modules/Book/entity";
import { book } from "../types/book.types";

export interface IBookService {
    getAll(): Promise<Book[]>
    add(bookData: book): Promise<Book>
}

export interface IBookRepository {
    findAll(): Promise<Book[]>
    addNew(book: book): Promise<Book>
    findByUser(email: string): Promise<Book | undefined>
}