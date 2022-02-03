import { Router } from "express";

import { userRouter } from "@modules/Users/infra/http/routes/users.routes";
import { sessionsRouter } from "@modules/Users/infra/http/routes/sessions.routes";
import { devsRouter } from "@modules/Users/infra/http/routes/devs.routes";
import { profileRouter } from "@modules/Users/infra/http/routes/profile.routes";
import { articlesRouter } from "@modules/Articles/infra/http/routes/articles.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/articles", articlesRouter);
routes.use("/devs", devsRouter);
routes.use("/profile", profileRouter);

export { routes };
