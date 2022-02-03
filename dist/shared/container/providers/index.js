"use strict";

var _tsyringe = require("tsyringe");

var _S3StorageProvider = require("./StorageProvider/implementations/S3StorageProvider");

_tsyringe.container.registerSingleton("StorageProvider", _S3StorageProvider.S3StorageProvider);