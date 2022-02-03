"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddInfoContacts1642780965835 = void 0;

var _typeorm = require("typeorm");

class AddInfoContacts1642780965835 {
  async up(queryRunner) {
    await queryRunner.addColumns("users", [new _typeorm.TableColumn({
      name: "github",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "linkedin",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "whatsapp",
      type: "varchar",
      isNullable: true
    })]);
  }

  async down(queryRunner) {
    await queryRunner.dropColumns("users", ["whatsapp", "linkedin", "github"]);
  }

}

exports.AddInfoContacts1642780965835 = AddInfoContacts1642780965835;