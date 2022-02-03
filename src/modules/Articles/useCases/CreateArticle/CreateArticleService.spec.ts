import { FakeArticlesRepository } from "@modules/Articles/repositories/fakes/FakeArticlesRepository";
import { AppError } from "@shared/errors/AppError";
import { CreateArticleService } from "./CreateArticleService";

let fakeArticlesRepository: FakeArticlesRepository;
let createArticle: CreateArticleService;

describe("CreateArticle", () => {
  beforeEach(() => {
    fakeArticlesRepository = new FakeArticlesRepository();
    createArticle = new CreateArticleService(fakeArticlesRepository);
  });

  it("should be able to create a new article", async () => {
    const article = await createArticle.execute({
      author: " joe due",
      time_ready: 2,
      title: "Teste",
      url: "hhttp;222,xcom",
      category: "backend",
      thumbnail: "thumb.png",
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
      thumbnail: "thumb.png",
    });

    await expect(
      createArticle.execute({
        author: " joe due",
        time_ready: 2,
        title: "Teste",
        url: "hhttp;222,xcom",
        category: "backend",
        thumbnail: "thumb.png",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
