"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _UpdateAvatarUserService = require("../../../services/UpdateAvatarUser/UpdateAvatarUserService");

class UpdateUserAvatarController {
  async update(request, response) {
    const {
      id
    } = request.user;

    const updateAvatarUser = _tsyringe.container.resolve(_UpdateAvatarUserService.UpdateAvatarUserService);

    const user = await updateAvatarUser.execute({
      fileName: String(request.file?.filename),
      userId: id
    });
    return response.json((0, _classTransformer.classToPlain)(user));
  }

}

exports.UpdateUserAvatarController = UpdateUserAvatarController;