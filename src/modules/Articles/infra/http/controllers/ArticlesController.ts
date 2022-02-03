import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateArticleService } from "@modules/Articles/useCases/CreateArticle/CreateArticleService";
import { ListArticlesService } from "@modules/Articles/useCases/ListArticles/ListArticlesService";

class ArticleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, author, time_ready, url, thumbnail, category } =
      request.body;

    const createArticle = container.resolve(CreateArticleService);

    const article = await createArticle.execute({
      title,
      author,
      time_ready,
      url,
      thumbnail,
      category,
    });

    return response.json(article);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const { category } = request.query;

    const listArticles = container.resolve(ListArticlesService);

    const articles = await listArticles.execute({
      category,
    });

    return response.json(articles);
  }
}

export { ArticleController };
