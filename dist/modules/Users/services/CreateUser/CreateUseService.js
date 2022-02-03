"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUseService = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _IHashProvider = require("../../providers/HashProvider/models/IHashProvider");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateUseService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("HashProvider")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository, typeof _IHashProvider.IHashProvider === "undefined" ? Object : _IHashProvider.IHashProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUseService {
  constructor(usersRepository, hashedProvider) {
    this.usersRepository = usersRepository;
    this.hashedProvider = hashedProvider;
  }

  async execute({
    email,
    password,
    name
  }) {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new _AppError.AppError("User already exist");
    }

    const hashPassword = await this.hashedProvider.generateHash(password);
    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPassword
    });
    return user;
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateUseService = CreateUseService;