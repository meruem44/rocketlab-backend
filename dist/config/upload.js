"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadConfig = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

var _crypto = require("crypto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tmpFolder = (0, _path.resolve)(__dirname, "..", "..", "temp");
const uploadConfig = {
  driver: "s3",
  directory: tmpFolder,
  multer: {
    storage: _multer.default.diskStorage({
      destination: tmpFolder,

      filename(req, file, callback) {
        const fileHash = (0, _crypto.randomBytes)(10).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      }

    })
  },
  config: {
    disk: {},
    aws: {
      bucket: "rocketlab-bucket"
    }
  }
};
exports.uploadConfig = uploadConfig;