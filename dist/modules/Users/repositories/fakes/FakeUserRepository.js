"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeUserRepository = void 0;

var _uuid = require("uuid");

var _User = require("../../infra/typeorm/entities/User");

class FakeUserRepository {
  constructor() {
    this.users = [];
  }

  async create({
    email,
    name,
    password
  }) {
    const user = new _User.User();
    Object.assign(user, {
      email,
      password,
      name,
      id: (0, _uuid.v4)()
    });
    this.users.push(user);
    return user;
  }

  async list(except_user_id) {
    const users = this.users.filter(user => user.id !== except_user_id);
    return users;
  }

  async findByEmail(email) {
    const user = this.users.find(findUser => findUser.email === email);
    return user;
  }

  async findById(id) {
    const user = this.users.find(findUser => findUser.id === id);
    return user;
  }

  async save(user) {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[findIndex] = user;
    return user;
  }

}

exports.FakeUserRepository = FakeUserRepository;