"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.articlesRouter = void 0;

var _express = require("express");

var _ArticlesController = require("../controllers/ArticlesController");

const articlesRouter = (0, _express.Router)();
exports.articlesRouter = articlesRouter;
const articleController = new _ArticlesController.ArticleController();
articlesRouter.post("/", articleController.create);
articlesRouter.get("/", articleController.list);