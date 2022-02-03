"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3StorageProvider = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _path = require("path");

var _mime = _interopRequireDefault(require("mime"));

var _fs = _interopRequireDefault(require("fs"));

var _upload = require("../../../../../config/upload");

var _AppError = require("../../../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class S3StorageProvider {
  constructor() {
    this.client = void 0;
    this.client = new _awsSdk.default.S3({
      region: "us-east-1",
      accessKeyId: "AKIAZM2BOXMH7LGHGZDB",
      secretAccessKey: "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"
    });
  }

  async saveFile(file) {
    console.log(file); // Pegando o diretório do arquivo

    const originalPath = (0, _path.resolve)(_upload.uploadConfig.directory, file);

    const ContentType = _mime.default.getType(originalPath);

    if (!ContentType) {
      throw new _AppError.AppError("File not found");
    }

    const fileContent = await _fs.default.promises.readFile(originalPath);
    await this.client.putObject({
      Bucket: _upload.uploadConfig.config.aws.bucket,
      Key: file,
      ACL: "public-read",
      ContentType,
      ContentDisposition: `inline; filename=${file}`,
      Body: fileContent
    }).promise();
    await _fs.default.promises.unlink(originalPath);
    return file;
  }

  async deleteFile(file) {
    await this.client.deleteObject({
      Bucket: _upload.uploadConfig.config.aws.bucket,
      Key: file
    });
  }

}

exports.S3StorageProvider = S3StorageProvider;