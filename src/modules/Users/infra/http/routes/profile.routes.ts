import { Router } from "express";

import { ProfileController } from "@modules/Users/infra/http/controllers/ProfileController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/EnsureAuthenticate";

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get("/", ensureAuthenticate, profileController.show);
profileRouter.put("/", ensureAuthenticate, profileController.update);

export { profileRouter };
