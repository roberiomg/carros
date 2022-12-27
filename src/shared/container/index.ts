import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)

container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationsRepository)

container.registerSingleton<IUserRepository>("UsersRepository", UsersRepository)

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository)