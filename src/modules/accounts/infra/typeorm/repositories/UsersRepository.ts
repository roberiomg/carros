import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";






class UsersRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({id, name, email, password, driver_license, avatar}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            id,
            name,
            email,
            password,
            driver_license,
            avatar
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })
        return user
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }

}

export { UsersRepository }