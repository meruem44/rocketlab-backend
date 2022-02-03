import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { IArticlesRepository } from "@modules/Articles/repositories/IArticlesRepository";
import { ICreateArticleDTO } from "./CreateArticleDTO";
import { Article } from "@modules/Articles/infra/typeorm/entities/Article";

@injectable()
class CreateArticleService {
  constructor(
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  public async execute({
    author,
    title,
    time_ready,
    url,
    thumbnail,
    category,
  }: ICreateArticleDTO): Promise<Article> {
    const checkArticleExist = await this.articlesRepository.findByName(title);

    if (checkArticleExist) {
      throw new AppError("This title already register");
    }

    const article = await this.articlesRepository.create({
      author,
      title,
      time_ready,
      url,
      thumbnail,
      category,
    });

    return article;
  }
}

export { CreateArticleService };
