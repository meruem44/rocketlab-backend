"use strict";

require("reflect-metadata");

var _ListArticlesService = require("./ListArticlesService");

var _FakeArticlesRepository = require("../../repositories/fakes/FakeArticlesRepository");

let listArticlesService;
let fakeArticlesRepository;
describe("ListArticles", () => {
  beforeEach(() => {
    fakeArticlesRepository = new _FakeArticlesRepository.FakeArticlesRepository();
    listArticlesService = new _ListArticlesService.ListArticlesService(fakeArticlesRepository);
  });
  it("should be able to list articles be category", async () => {
    const article1 = await fakeArticlesRepository.create({
      author: "joeDue",
      category: "backend",
      thumbnail: "thumb.png",
      time_ready: 2,
      title: "Joe due",
      url: "joe.http"
    });
    const article2 = await fakeArticlesRepository.create({
      author: "joeDue2",
      category: "backend",
      thumbnail: "thumb2.png",
      time_ready: 2,
      title: "Joe due2",
      url: "joe.http"
    });
    const articles = await listArticlesService.execute({
      category: "backend"
    });
    console.log(articles);
    expect(articles).toEqual([article1, article2]);
  });
});