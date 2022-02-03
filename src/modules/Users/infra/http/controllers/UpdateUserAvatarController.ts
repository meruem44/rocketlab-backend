import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToPlain } from "class-transformer";

import { UpdateAvatarUserService } from "@modules/Users/services/UpdateAvatarUser/UpdateAvatarUserService";

class UpdateUserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const updateAvatarUser = container.resolve(UpdateAvatarUserService);

    const user = await updateAvatarUser.execute({
      fileName: String(request.file?.filename),
      userId: id,
    });

    return response.json(classToPlain(user));
  }
}

export { UpdateUserAvatarController };
