"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileRouter = void 0;

var _express = require("express");

var _ProfileController = require("../controllers/ProfileController");

var _EnsureAuthenticate = require("../../../../../shared/infra/http/middlewares/EnsureAuthenticate");

const profileRouter = (0, _express.Router)();
exports.profileRouter = profileRouter;
const profileController = new _ProfileController.ProfileController();
profileRouter.get("/", _EnsureAuthenticate.ensureAuthenticate, profileController.show);
profileRouter.put("/", _EnsureAuthenticate.ensureAuthenticate, profileController.update);