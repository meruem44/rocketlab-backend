import { injectable, inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { User } from "@modules/Users/infra/typeorm/entities/User";

import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IHashProvider } from "@modules/Users/providers/HashProvider/models/IHashProvider";

@injectable()
class CreateUseService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashedProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
    name,
  }: ICreateUserRequestDTO): Promise<User> {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError("User already exist");
    }

    const hashPassword = await this.hashedProvider.generateHash(password);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPassword,
    });

    return user;
  }
}

export { CreateUseService };
