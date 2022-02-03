"use strict";

require("reflect-metadata");

var _celebrate = require("celebrate");

var _app = require("./app");

var _globalError = require("./middlewares/globalError");

_app.server.use((0, _celebrate.errors)());

_app.server.use(_globalError.globalError);

_app.server.listen(process.env.PORT || 3333, () => {
  console.log("Server is Running");
});