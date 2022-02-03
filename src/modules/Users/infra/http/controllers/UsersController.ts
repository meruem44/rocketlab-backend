import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToPlain } from "class-transformer";

import { CreateUseService } from "@modules/Users/services/CreateUser/CreateUseService";
import { ShowUserProfileService } from "@modules/Users/services/ShowUserProfile/ShowUserProfileService";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUseService);

    const user = await createUser.execute({
      email,
      name,
      password,
    });

    return response.json(classToPlain(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserProfile = container.resolve(ShowUserProfileService);

    const user = await showUserProfile.execute({
      user_id: id,
    });

    return response.json(classToPlain(user));
  }
}

export { UsersController };
