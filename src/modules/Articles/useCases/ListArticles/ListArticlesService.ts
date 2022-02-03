import { inject, injectable } from "tsyringe";

import { Article } from "@modules/Articles/infra/typeorm/entities/Article";
import { IArticlesRepository } from "@modules/Articles/repositories/IArticlesRepository";

interface IRequest {
  category: "frontend" | "backend" | "mobile" | "";
}

@injectable()
class ListArticlesService {
  constructor(
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  public async execute({ category }: IRequest): Promise<Article[]> {
    if (!category) {
      const articles = await this.articlesRepository.find();

      return articles;
    }

    const articles = await this.articlesRepository.findByCategory({
      category,
    });

    return articles;
  }
}

export { ListArticlesService };
