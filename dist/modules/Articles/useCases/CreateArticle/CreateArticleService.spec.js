"use strict";

var _FakeArticlesRepository = require("../../repositories/fakes/FakeArticlesRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateArticleService = require("./CreateArticleService");

let fakeArticlesRepository;
let createArticle;
describe("CreateArticle", () => {
  beforeEach(() => {
    fakeArticlesRepository = new _FakeArticlesRepository.FakeArticlesRepository();
    createArticle = new _CreateArticleService.CreateArticleService(fakeArticlesRepository);
  });
  it("should be able to create a new article", async () => {
    const article = await createArticle.execute({
      author: " joe due",
      time_ready: 2,
      title: "Teste",
      url: "hhttp;222,xcom",
      category: "backend",
      thumbnail: "thumb.png"
    });
    expect(article).toHaveProperty("id");
  });
  it("should not be able to create a new article with title already used", async () => {
    await createArticle.execute({
      author: " joe due",
      time_ready: 2,
      title: "Teste",
      url: "hhttp;222,xcom",
      category: "backend",
      thumbnail: "thumb.png"
    });
    await expect(createArticle.execute({
      author: " joe due",
      time_ready: 2,
      title: "Teste",
      url: "hhttp;222,xcom",
      category: "backend",
      thumbnail: "thumb.png"
    })).rejects.toBeInstanceOf(_AppError.AppError);
  });
});