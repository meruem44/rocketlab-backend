"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserService = void 0;

var _tsyringe = require("tsyringe");

var _IHashProvider = require("../../providers/HashProvider/models/IHashProvider");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _ITokenProvider = require("../../providers/TokenProvider/models/ITokenProvider");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

let AuthenticateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("HashProvider")(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)("TokenProvider")(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository, typeof _IHashProvider.IHashProvider === "undefined" ? Object : _IHashProvider.IHashProvider, typeof _ITokenProvider.ITokenProvider === "undefined" ? Object : _ITokenProvider.ITokenProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class AuthenticateUserService {
  constructor(usersRepository, hashProvider, tokenProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
    this.tokenProvider = tokenProvider;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.AppError("This combination email/password does not match");
    }

    const passwordMatched = await this.hashProvider.compareHash(password, user.password);

    if (!passwordMatched) {
      throw new _AppError.AppError("This combination email/password does not match");
    }

    const token = this.tokenProvider.generateToken({
      user_id: user.id
    });
    return {
      token,
      user
    };
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
exports.AuthenticateUserService = AuthenticateUserService;