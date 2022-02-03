import { IFindArticleByCategoryDTO } from "../dtos/IFindArticleByCategoryDTO";
import { Article } from "../infra/typeorm/entities/Article";
import { ICreateArticleDTO } from "../useCases/CreateArticle/CreateArticleDTO";

interface IArticlesRepository {
  create(data: ICreateArticleDTO): Promise<Article>;
  findByCategory(data: IFindArticleByCategoryDTO): Promise<Article[]>;
  findByName(name: string): Promise<Article | undefined>;
  find(): Promise<Article[]>;
}

export { IArticlesRepository };
