import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  name: string;
  bio: string;
  email: string;
  job: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  about: boolean;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({
    bio,
    email,
    name,
    user_id,
    job,
    whatsapp,
    github,
    linkedin,
    about,
  }: IRequest) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found");
    }

    if (about) {
      user.whatsapp = whatsapp;
      user.github = github;
      user.linkedin = linkedin;
    }

    if (user.email !== email) {
      const checkEmailUser = await this.usersRepository.findByEmail(email);

      if (checkEmailUser) {
        throw new AppError("This email address already used");
      }

      user.email = email;
    }

    user.name = name;
    user.bio = bio;
    user.job = job;

    await this.usersRepository.save(user);

    return user;
  }
}

export { UpdateProfileService };
