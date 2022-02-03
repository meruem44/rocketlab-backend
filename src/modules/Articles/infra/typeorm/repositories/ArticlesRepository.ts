import { getRepository, Repository } from "typeorm";

import { IArticlesRepository } from "@modules/Articles/repositories/IArticlesRepository";
import { ICreateArticleDTO } from "@modules/Articles/useCases/CreateArticle/CreateArticleDTO";
import { Article } from "../entities/Article";
import { IFindArticleByCategoryDTO } from "@modules/Articles/dtos/IFindArticleByCategoryDTO";

class ArticlesRepository implements IArticlesRepository {
  private ormRepository: Repository<Article>;

  constructor() {
    this.ormRepository = getRepository(Article);
  }

  public async find(): Promise<Article[]> {
    const articles = await this.ormRepository.find();

    return articles;
  }

  public async create({
    author,
    time_ready,
    title,
    url,
    thumbnail,
    category,
  }: ICreateArticleDTO): Promise<Article> {
    const article = this.ormRepository.create({
      author,
      time_ready,
      title,
      url,
      thumbnail,
      category,
    });

    await this.ormRepository.save(article);

    return article;
  }

  public async findByName(title: string): Promise<Article | undefined> {
    const article = await this.ormRepository.findOne({
      where: { title },
    });

    return article;
  }

  public async findByCategory({
    category,
  }: IFindArticleByCategoryDTO): Promise<Article[]> {
    const articles = await this.ormRepository.find({
      where: { category },
    });

    return articles;
  }
}

export { ArticlesRepository };
