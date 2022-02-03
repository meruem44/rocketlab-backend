"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalError = globalError;

var _AppError = require("../../../errors/AppError");

function globalError(err, request, response, _) {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }

  console.log(err);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
    messageError: err.message
  });
}