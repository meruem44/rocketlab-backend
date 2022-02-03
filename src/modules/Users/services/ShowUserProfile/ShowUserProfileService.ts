import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserProfileService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ user_id }: IRequest) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("user does not exist");
    }

    return user;
  }
}

export { ShowUserProfileService };
