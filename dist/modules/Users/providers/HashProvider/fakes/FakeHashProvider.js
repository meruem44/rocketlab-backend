"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeHashProvider = void 0;

class FakeHashProvider {
  async compareHash(hashed, payload) {
    return hashed === payload;
  }

  async generateHash(payload) {
    return payload;
  }

}

exports.FakeHashProvider = FakeHashProvider;