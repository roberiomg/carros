import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@shared/errors/AppErrors";





@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUserRepository) {}

        async execute({name, email, password, driver_license, id, avatar}: ICreateUserDTO): Promise<void> {

            const userAlreadyExists = await this.userRepository.findByEmail(email)

            if (userAlreadyExists) {
                throw new AppError("User already exists!");
                
            }

            const passwordHash = await hash(password, 8)

            await this.userRepository.create({
                id,
                name,
                email,
                password: passwordHash,
                driver_license,
                avatar
            })
        }
    
}

export { CreateUserUseCase }