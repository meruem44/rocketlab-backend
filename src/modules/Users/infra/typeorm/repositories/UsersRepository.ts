import { getRepository, Repository } from "typeorm";
import { Not } from "typeorm";

import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "@modules/Users/services/CreateUser/CreateUserDTO";
import { User } from "../entities/User";

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async list(except_user_id: string): Promise<User[]> {
    const users = await this.ormRepository.find({
      where: { id: Not(except_user_id) },
    });

    return users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserRequestDTO): Promise<User> {
    const user = this.ormRepository.create({
      email,
      name,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }
}

export { UsersRepository };
