import { Router } from "express";

import { DevsController } from "@modules/Users/infra/http/controllers/DevsController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/EnsureAuthenticate";

const devsRouter = Router();
const devsController = new DevsController();

devsRouter.get("/", ensureAuthenticate, devsController.index);
devsRouter.get("/:id", ensureAuthenticate, devsController.show);

export { devsRouter };
