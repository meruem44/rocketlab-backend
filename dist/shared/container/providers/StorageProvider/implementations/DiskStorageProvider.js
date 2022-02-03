"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiskStorageProvider = void 0;

var _upload = require("../../../../../config/upload");

var _path = require("path");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DiskStorageProvider {
  async saveFile(file) {
    await _fs.default.promises.rename((0, _path.resolve)(_upload.uploadConfig.directory, file), (0, _path.resolve)(_upload.uploadConfig.directory, "uploads", file));
    return file;
  }

  async deleteFile(file) {
    const filePath = (0, _path.resolve)(_upload.uploadConfig.directory, "uploads", file);

    try {
      await _fs.default.promises.stat(filePath);
    } catch (error) {
      return;
    }

    await _fs.default.promises.unlink(filePath);
  }

}

exports.DiskStorageProvider = DiskStorageProvider;