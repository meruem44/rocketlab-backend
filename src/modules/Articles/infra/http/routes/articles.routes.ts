import { Router } from "express";

import { ArticleController } from "../controllers/ArticlesController";

const articlesRouter = Router();
const articleController = new ArticleController();

articlesRouter.post("/", articleController.create);
articlesRouter.get("/", articleController.list);

export { articlesRouter };
