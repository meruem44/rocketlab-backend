"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWTTokenProvider = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _jwt = require("../../../../../config/jwt");

class JWTTokenProvider {
  generateToken(data) {
    return (0, _jsonwebtoken.sign)({}, _jwt.jwtConfig.secret, {
      expiresIn: _jwt.jwtConfig.expiresIn,
      subject: data.user_id
    });
  }

}

exports.JWTTokenProvider = JWTTokenProvider;