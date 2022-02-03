import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToPlain } from "class-transformer";

import { ListUsersService } from "@modules/Users/services/ListUsers/ListUsersService";
import { ShowUserProfileService } from "@modules/Users/services/ShowUserProfile/ShowUserProfileService";

class DevsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute({
      except_user_id: id,
    });

    return response.json(users);
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

export { DevsController };
