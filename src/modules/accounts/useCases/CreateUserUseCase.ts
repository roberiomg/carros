import { IUserRepository } from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUserRepository) {}

        async execute({name, username, email, password, driver_license}: ICreateUserDTO): Promise<void> {

            await this.userRepository.create({
                name,
                username,
                email,
                password,
                driver_license
            })
        }
    
}

export { CreateUserUseCase }