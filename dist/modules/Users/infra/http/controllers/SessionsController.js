"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionsController = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _AuthenticateUserService = require("../../../services/AuthenticateUser/AuthenticateUserService");

class SessionsController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_AuthenticateUserService.AuthenticateUserService);

    const {
      user,
      token
    } = await authenticateUser.execute({
      email,
      password
    });
    return response.json({
      user: (0, _classTransformer.classToPlain)(user),
      token
    });
  }

}

exports.SessionsController = SessionsController;