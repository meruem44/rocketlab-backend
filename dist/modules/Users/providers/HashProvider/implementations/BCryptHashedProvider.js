"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BCryptHashedProvider = void 0;

var _bcrypt = require("bcrypt");

class BCryptHashedProvider {
  async compareHash(hashed, payload) {
    return (0, _bcrypt.compare)(hashed, payload);
  }

  async generateHash(payload) {
    return (0, _bcrypt.hash)(payload, 12);
  }

}

exports.BCryptHashedProvider = BCryptHashedProvider;