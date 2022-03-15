import { User } from "../../modules/User/entity";

export interface IUserService {
    getAll(): Promise<User[]>
    register(userData: User): Promise<User>
    login(userData: User): Promise<User>
}

export interface IUserRepository {
    findAll(): Promise<User[]>
    addNew(userEntity: any): Promise<any>
    findByEmail(userEntity: any): Promise<User | undefined>
    compareHash(password: string, hash: string): Promise<boolean>
}