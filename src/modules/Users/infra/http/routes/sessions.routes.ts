import { Router } from "express";
import { Segments, celebrate, Joi } from "celebrate";

import { SessionsController } from "@modules/Users/infra/http/controllers/SessionsController";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  sessionsController.create
);

export { sessionsRouter };
