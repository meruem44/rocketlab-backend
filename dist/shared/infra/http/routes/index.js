"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _users = require("../../../../modules/Users/infra/http/routes/users.routes");

var _sessions = require("../../../../modules/Users/infra/http/routes/sessions.routes");

var _devs = require("../../../../modules/Users/infra/http/routes/devs.routes");

var _profile = require("../../../../modules/Users/infra/http/routes/profile.routes");

var _articles = require("../../../../modules/Articles/infra/http/routes/articles.routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.use("/users", _users.userRouter);
routes.use("/sessions", _sessions.sessionsRouter);
routes.use("/articles", _articles.articlesRouter);
routes.use("/devs", _devs.devsRouter);
routes.use("/profile", _profile.profileRouter);