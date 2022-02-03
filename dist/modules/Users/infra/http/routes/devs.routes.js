"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.devsRouter = void 0;

var _express = require("express");

var _DevsController = require("../controllers/DevsController");

var _EnsureAuthenticate = require("../../../../../shared/infra/http/middlewares/EnsureAuthenticate");

const devsRouter = (0, _express.Router)();
exports.devsRouter = devsRouter;
const devsController = new _DevsController.DevsController();
devsRouter.get("/", _EnsureAuthenticate.ensureAuthenticate, devsController.index);
devsRouter.get("/:id", _EnsureAuthenticate.ensureAuthenticate, devsController.show);