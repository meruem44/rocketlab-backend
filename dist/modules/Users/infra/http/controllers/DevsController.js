"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevsController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ListUsersService = require("../../../services/ListUsers/ListUsersService");

var _ShowUserProfileService = require("../../../services/ShowUserProfile/ShowUserProfileService");

class DevsController {
  async index(request, response) {
    const {
      id
    } = request.user;

    const listUsers = _tsyringe.container.resolve(_ListUsersService.ListUsersService);

    const users = await listUsers.execute({
      except_user_id: id
    });
    return response.json(users);
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

exports.DevsController = DevsController;