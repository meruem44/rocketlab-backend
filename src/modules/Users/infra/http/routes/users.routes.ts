import { Router } from "express";

import multer from "multer";
import { uploadConfig } from "@config/upload";

import { UsersController } from "@modules/Users/infra/http/controllers/UsersController";
import { UpdateUserAvatarController } from "@modules/Users/infra/http/controllers/UpdateUserAvatarController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/EnsureAuthenticate";

const userRouter = Router();
const usersController = new UsersController();
const updateUserAvatarController = new UpdateUserAvatarController();
const upload = multer(uploadConfig.multer);

userRouter.post("/", usersController.create);
userRouter.get("/:id", ensureAuthenticate, usersController.show);
userRouter.patch(
  "/",
  ensureAuthenticate,
  upload.single("file"),
  updateUserAvatarController.update
);

export { userRouter };
