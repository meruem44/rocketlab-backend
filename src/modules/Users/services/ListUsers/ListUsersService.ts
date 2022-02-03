import { injectable, inject } from "tsyringe";

import { User } from "@modules/Users/infra/typeorm/entities/User";

import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  except_user_id: string;
}

@injectable()
class ListUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ except_user_id }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.list(except_user_id);

    return users;
  }
}

export { ListUsersService };
