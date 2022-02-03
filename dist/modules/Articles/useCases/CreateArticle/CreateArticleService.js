"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateArticleService = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _IArticlesRepository = require("../../repositories/IArticlesRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateArticleService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ArticlesRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IArticlesRepository.IArticlesRepository === "undefined" ? Object : _IArticlesRepository.IArticlesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateArticleService {
  constructor(articlesRepository) {
    this.articlesRepository = articlesRepository;
  }

  async execute({
    author,
    title,
    time_ready,
    url,
    thumbnail,
    category
  }) {
    const checkArticleExist = await this.articlesRepository.findByName(title);

    if (checkArticleExist) {
      throw new _AppError.AppError("This title already register");
    }

    const article = await this.articlesRepository.create({
      author,
      title,
      time_ready,
      url,
      thumbnail,
      category
    });
    return article;
  }

}) || _class) || _class) || _class) || _class);
exports.CreateArticleService = CreateArticleService;