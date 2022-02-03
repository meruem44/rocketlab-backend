import { v4 } from "uuid";

import { User } from "@modules/Users/infra/typeorm/entities/User";
import { IUserRepository } from "../IUsersRepository";
import { ICreateUserRequestDTO } from "@modules/Users/services/CreateUser/CreateUserDTO";

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async create({
    email,
    name,
    password,
  }: ICreateUserRequestDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { email, password, name, id: v4() });

    this.users.push(user);

    return user;
  }

  public async list(except_user_id: string): Promise<User[]> {
    const users = this.users.filter((user) => user.id !== except_user_id);

    return users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((findUser) => findUser.email === email);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((findUser) => findUser.id === id);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(
      (findUser) => findUser.id === user.id
    );

    this.users[findIndex] = user;
    return user;
  }
}

export { FakeUserRepository };
