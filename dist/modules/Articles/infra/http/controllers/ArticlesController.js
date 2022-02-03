"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleController = void 0;

var _tsyringe = require("tsyringe");

var _CreateArticleService = require("../../../useCases/CreateArticle/CreateArticleService");

var _ListArticlesService = require("../../../useCases/ListArticles/ListArticlesService");

class ArticleController {
  async create(request, response) {
    const {
      title,
      author,
      time_ready,
      url,
      thumbnail,
      category
    } = request.body;

    const createArticle = _tsyringe.container.resolve(_CreateArticleService.CreateArticleService);

    const article = await createArticle.execute({
      title,
      author,
      time_ready,
      url,
      thumbnail,
      category
    });
    return response.json(article);
  }

  async list(request, response) {
    const {
      category
    } = request.query;

    const listArticles = _tsyringe.container.resolve(_ListArticlesService.ListArticlesService);

    const articles = await listArticles.execute({
      category
    });
    return response.json(articles);
  }

}

exports.ArticleController = ArticleController;