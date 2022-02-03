import { User } from "../infra/typeorm/entities/User";
import { ICreateUserRequestDTO } from "../services/CreateUser/CreateUserDTO";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
  create(data: ICreateUserRequestDTO): Promise<User>;
  list(except_user_id: string): Promise<User[]>;
}
