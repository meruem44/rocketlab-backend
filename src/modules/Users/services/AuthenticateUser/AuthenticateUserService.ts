import { inject, injectable } from "tsyringe";

import { IHashProvider } from "@modules/Users/providers/HashProvider/models/IHashProvider";
import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";

import {
  IAuthenticateUserRequest,
  IAuthenticateUserResponse,
} from "./AuthenticateUserDTO";

import { AppError } from "@shared/errors/AppError";
import { ITokenProvider } from "@modules/Users/providers/TokenProvider/models/ITokenProvider";

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}

  public async execute({
    email,
    password,
  }: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("This combination email/password does not match");
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError("This combination email/password does not match");
    }

    const token = this.tokenProvider.generateToken({ user_id: user.id });

    return {
      token,
      user,
    };
  }
}

export { AuthenticateUserService };
