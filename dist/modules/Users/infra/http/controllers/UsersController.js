"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateUseService = require("../../../services/CreateUser/CreateUseService");

var _ShowUserProfileService = require("../../../services/ShowUserProfile/ShowUserProfileService");

class UsersController {
  async create(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUseService.CreateUseService);

    const user = await createUser.execute({
      email,
      name,
      password
    });
    return response.json((0, _classTransformer.classToPlain)(user));
  }

  async show(request, response) {
    const {
      id
    } = request.params;

    const showUserProfile = _tsyringe.container.resolve(_ShowUserProfileService.ShowUserProfileService);

    const user = await showUserProfile.execute({
      user_id: id
    });
    return response.json((0, _classTransformer.classToPlain)(user));
  }

}

exports.UsersController = UsersController;