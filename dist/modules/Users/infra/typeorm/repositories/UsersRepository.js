"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("../entities/User");

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.User);
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async list(except_user_id) {
    const users = await this.ormRepository.find({
      where: {
        id: (0, _typeorm.Not)(except_user_id)
      }
    });
    return users;
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async create({
    email,
    name,
    password
  }) {
    const user = this.ormRepository.create({
      email,
      name,
      password
    });
    await this.ormRepository.save(user);
    return user;
  }

  async save(user) {
    await this.ormRepository.save(user);
    return user;
  }

}

exports.UsersRepository = UsersRepository;