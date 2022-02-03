import { container } from "tsyringe";

import "@modules/Users/providers";
import "./providers";

import { IUserRepository } from "@modules/Users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";

import { IArticlesRepository } from "@modules/Articles/repositories/IArticlesRepository";
import { ArticlesRepository } from "@modules/Articles/infra/typeorm/repositories/ArticlesRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IArticlesRepository>(
  "ArticlesRepository",
  ArticlesRepository
);
