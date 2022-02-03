import { IFindArticleByCategoryDTO } from "@modules/Articles/dtos/IFindArticleByCategoryDTO";
import { Article } from "@modules/Articles/infra/typeorm/entities/Article";
import { ICreateArticleDTO } from "@modules/Articles/useCases/CreateArticle/CreateArticleDTO";
import { v4 } from "uuid";
import { IArticlesRepository } from "../IArticlesRepository";

class FakeArticlesRepository implements IArticlesRepository {
  private articles: Article[] = [];

  public async create({ author, title }: ICreateArticleDTO): Promise<Article> {
    const article = new Article();

    Object.assign(article, { author, title, id: v4() });

    this.articles.push(article);

    return article;
  }

  public async findByCategory({
    category,
  }: IFindArticleByCategoryDTO): Promise<Article[]> {
    const articles = this.articles.filter(
      (findArticle) => findArticle.category === category
    );

    return articles;
  }

  public async find(): Promise<Article[]> {
    return this.articles;
  }

  public async findByName(title: string): Promise<Article | undefined> {
    const article = this.articles.find((find) => find.title === title);

    return article;
  }
}

export { FakeArticlesRepository };
