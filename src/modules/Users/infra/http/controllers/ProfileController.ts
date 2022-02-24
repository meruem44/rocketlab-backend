import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToPlain } from "class-transformer";

import { ShowUserProfileService } from "@modules/Users/services/ShowUserProfile/ShowUserProfileService";
import { UpdateProfileService } from "@modules/Users/services/UpdateProfile/UpdateProfileService";

class ProfileController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { email, name, bio, job, whatsapp, github, linkedin, about } =
      request.body;
    const { id } = request.user;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      email,
      name,
      bio,
      job,
      user_id: id,
      whatsapp,
      github,
      linkedin,
      about,
    });

    response.json(classToPlain(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const ShowUserProfile = container.resolve(ShowUserProfileService);

    const user = await ShowUserProfile.execute({
      user_id: id,
    });

    return response.json(classToPlain(user));
  }
}

export { ProfileController };
