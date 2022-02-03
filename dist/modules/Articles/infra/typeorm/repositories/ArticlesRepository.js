"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticlesRepository = void 0;

var _typeorm = require("typeorm");

var _Article = require("../entities/Article");

class ArticlesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Article.Article);
  }

  async find() {
    const articles = await this.ormRepository.find();
    return articles;
  }

  async create({
    author,
    time_ready,
    title,
    url,
    thumbnail,
    category
  }) {
    const article = this.ormRepository.create({
      author,
      time_ready,
      title,
      url,
      thumbnail,
      category
    });
    await this.ormRepository.save(article);
    return article;
  }

  async findByName(title) {
    const article = await this.ormRepository.findOne({
      where: {
        title
      }
    });
    return article;
  }

  async findByCategory({
    category
  }) {
    const articles = await this.ormRepository.find({
      where: {
        category
      }
    });
    return articles;
  }

}

exports.ArticlesRepository = ArticlesRepository;