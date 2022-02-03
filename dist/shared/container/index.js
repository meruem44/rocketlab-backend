"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/Users/providers");

require("./providers");

var _UsersRepository = require("../../modules/Users/infra/typeorm/repositories/UsersRepository");

var _ArticlesRepository = require("../../modules/Articles/infra/typeorm/repositories/ArticlesRepository");

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton("ArticlesRepository", _ArticlesRepository.ArticlesRepository);