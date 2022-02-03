"use strict";

var _tsyringe = require("tsyringe");

var _BCryptHashedProvider = require("./HashProvider/implementations/BCryptHashedProvider");

var _JWTTokenProvider = require("./TokenProvider/implementations/JWTTokenProvider");

_tsyringe.container.registerSingleton("HashProvider", _BCryptHashedProvider.BCryptHashedProvider);

_tsyringe.container.registerSingleton("TokenProvider", _JWTTokenProvider.JWTTokenProvider);