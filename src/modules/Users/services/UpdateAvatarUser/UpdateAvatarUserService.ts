import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/models/IStorageProvider";

interface IRequest {
  userId: string;
  fileName: string;
}

@injectable()
class UpdateAvatarUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute({ fileName, userId }: IRequest) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User not found");
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    user.avatar = await this.storageProvider.saveFile(fileName);

    await this.usersRepository.save(user);

    return user;
  }
}

export { UpdateAvatarUserService };
