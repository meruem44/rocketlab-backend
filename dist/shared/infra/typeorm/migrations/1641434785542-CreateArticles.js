"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateArticles1641434785542 = void 0;

var _typeorm = require("typeorm");

class CreateArticles1641434785542 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "articles",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      }, {
        name: "title",
        type: "varchar"
      }, {
        name: "author",
        type: "varchar"
      }, {
        name: "url",
        type: "varchar"
      }, {
        name: "thumbnail",
        type: "varchar"
      }, {
        name: "category",
        type: "varchar"
      }, {
        name: "time_ready",
        type: "int"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("articles");
  }

}

exports.CreateArticles1641434785542 = CreateArticles1641434785542;