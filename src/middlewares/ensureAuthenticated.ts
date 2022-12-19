import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { AppError } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request:Request, response: Response, next: NextFunction) {

    const authHearder = request.headers.authorization

    if(!authHearder) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHearder.split(" ")

    try {
        const { sub: user_id } = verify(token, "af80ed271812f8f278b7e6dcab669516") as IPayload
        
        const usersRepository = new UsersRepository()
        
        const user = await usersRepository.findById(user_id)

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }

        request.user = {
            id: user_id
        }

        next()
    }catch{
        throw new AppError("Invalid token!", 401);
        
    }
    
}