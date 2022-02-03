"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeArticlesRepository = void 0;

var _Article = require("../../infra/typeorm/entities/Article");

var _uuid = require("uuid");

class FakeArticlesRepository {
  constructor() {
    this.articles = [];
  }

  async create({
    author,
    title
  }) {
    const article = new _Article.Article();
    Object.assign(article, {
      author,
      title,
      id: (0, _uuid.v4)()
    });
    this.articles.push(article);
    return article;
  }

  async findByCategory({
    category
  }) {
    const articles = this.articles.filter(findArticle => findArticle.category === category);
    return articles;
  }

  async find() {
    return this.articles;
  }

  async findByName(title) {
    const article = this.articles.find(find => find.title === title);
    return article;
  }

}

exports.FakeArticlesRepository = FakeArticlesRepository;