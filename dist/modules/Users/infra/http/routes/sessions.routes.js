"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessionsRouter = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _SessionsController = require("../controllers/SessionsController");

const sessionsRouter = (0, _express.Router)();
exports.sessionsRouter = sessionsRouter;
const sessionsController = new _SessionsController.SessionsController();
sessionsRouter.post("/", (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().min(6).required()
  }
}), sessionsController.create);