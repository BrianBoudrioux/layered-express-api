import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { User } from "../User/entity";

@Entity()
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    author: string;

    @OneToMany(() => User, user => user.book)
    users: User[];
}

export type book = {
    title: string,
    content: string,
    author: string,
}