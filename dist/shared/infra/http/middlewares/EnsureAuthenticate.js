"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticate = ensureAuthenticate;

var _jsonwebtoken = require("jsonwebtoken");

var _jwt = require("../../../../config/jwt");

function ensureAuthenticate(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      status: "error",
      message: "Token JWT is missing"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = (0, _jsonwebtoken.verify)(token, _jwt.jwtConfig.secret);
    const {
      sub
    } = decoded;
    request.user = {
      id: sub
    };
    next();
  } catch (error) {
    return response.status(401).json({
      status: "error",
      message: "Token JWT invalid"
    });
  }
}