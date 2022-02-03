"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ShowUserProfileService = require("../../../services/ShowUserProfile/ShowUserProfileService");

var _UpdateProfileService = require("../../../services/UpdateProfile/UpdateProfileService");

class ProfileController {
  async update(request, response) {
    const {
      email,
      name,
      bio,
      job,
      whatsapp,
      github,
      linkedin,
      about
    } = request.body;
    const {
      id
    } = request.user;

    const updateProfile = _tsyringe.container.resolve(_UpdateProfileService.UpdateProfileService);

    const user = await updateProfile.execute({
      email,
      name,
      bio,
      job,
      user_id: id,
      whatsapp,
      github,
      linkedin,
      about
    });
    return response.json(user);
  }

  async show(request, response) {
    const {
      id
    } = request.user;

    const ShowUserProfile = _tsyringe.container.resolve(_ShowUserProfileService.ShowUserProfileService);

    const user = await ShowUserProfile.execute({
      user_id: id
    });
    return response.json((0, _classTransformer.classToPlain)(user));
  }

}

exports.ProfileController = ProfileController;