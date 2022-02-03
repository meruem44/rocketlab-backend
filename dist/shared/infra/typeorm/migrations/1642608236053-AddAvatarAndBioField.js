"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddAvatarAndBioField1642608236053 = void 0;

var _typeorm = require("typeorm");

class AddAvatarAndBioField1642608236053 {
  async up(queryRunner) {
    await queryRunner.addColumns("users", [new _typeorm.TableColumn({
      name: "avatar",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "bio",
      type: "varchar",
      isNullable: true
    }), new _typeorm.TableColumn({
      name: "job",
      type: "varchar",
      isNullable: true
    })]);
  }

  async down(queryRunner) {
    await queryRunner.dropColumns("users", ["bio", "avatar"]);
  }

}

exports.AddAvatarAndBioField1642608236053 = AddAvatarAndBioField1642608236053;