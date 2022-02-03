"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProfileService = void 0;

var _tsyringe = require("tsyringe");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateProfileService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateProfileService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    bio,
    email,
    name,
    user_id,
    job,
    whatsapp,
    github,
    linkedin,
    about
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.AppError("User not found");
    }

    if (about) {
      user.whatsapp = whatsapp;
      user.github = github;
      user.linkedin = linkedin;
    }

    if (user.email !== email) {
      const checkEmailUser = await this.usersRepository.findByEmail(email);

      if (checkEmailUser) {
        throw new _AppError.AppError("This email address already used");
      }

      user.email = email;
    }

    user.name = name;
    user.bio = bio;
    user.job = job;
    await this.usersRepository.save(user);
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateProfileService = UpdateProfileService;