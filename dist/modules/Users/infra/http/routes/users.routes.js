"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = require("../../../../../config/upload");

var _UsersController = require("../controllers/UsersController");

var _UpdateUserAvatarController = require("../controllers/UpdateUserAvatarController");

var _EnsureAuthenticate = require("../../../../../shared/infra/http/middlewares/EnsureAuthenticate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
const usersController = new _UsersController.UsersController();
const updateUserAvatarController = new _UpdateUserAvatarController.UpdateUserAvatarController();
const upload = (0, _multer.default)(_upload.uploadConfig.multer);
userRouter.post("/", usersController.create);
userRouter.get("/:id", _EnsureAuthenticate.ensureAuthenticate, usersController.show);
userRouter.patch("/", _EnsureAuthenticate.ensureAuthenticate, upload.single("file"), updateUserAvatarController.update);