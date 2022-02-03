import "reflect-metadata";

import { ListArticlesService } from "./ListArticlesService";
import { FakeArticlesRepository } from "@modules/Articles/repositories/fakes/FakeArticlesRepository";

let listArticlesService: ListArticlesService;
let fakeArticlesRepository: FakeArticlesRepository;

describe("ListArticles", () => {
  beforeEach(() => {
    fakeArticlesRepository = new FakeArticlesRepository();
    listArticlesService = new ListArticlesService(fakeArticlesRepository);
  });

  it("should be able to list articles be category", async () => {
    const article1 = await fakeArticlesRepository.create({
      author: "joeDue",
      category: "backend",
      thumbnail: "thumb.png",
      time_ready: 2,
      title: "Joe due",
      url: "joe.http",
    });

    const article2 = await fakeArticlesRepository.create({
      author: "joeDue2",
      category: "backend",
      thumbnail: "thumb2.png",
      time_ready: 2,
      title: "Joe due2",
      url: "joe.http",
    });

    const articles = await listArticlesService.execute({ category: "backend" });

    console.log(articles);

    expect(articles).toEqual([article1, article2]);
  });
});
